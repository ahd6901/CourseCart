import React, {Component} from "react";

import {
    Button,
    Card,
    CardFooter,
    CardHeader, Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Table
} from "reactstrap";
import Course from "./Course";

class List extends Component {
    state = {
        courses: [],
        modal: false,
        // department: " "

    }
    display = () => {
        this.fetchCourses()
        return this.state.courses.map((course) => {
            const {course_id, name, c_desc, details, department, college} = course
            return (
                    // <tr key={course_id}>
                    //     <td><Button color="primary" onClick={this.editClicked}>Edit</Button></td>
                    //     <td>{name}</td>
                    //     <td>{c_desc}</td>
                    //     <td>{details}</td>
                    //     <td>{department}</td>
                    //     <td>{college}</td>
                    // </tr>

                <Course add={this.add} update={this.update}
                        course_id={course_id} name={name} des={c_desc} details={details}
                        dept={department} college={college}
                ></Course>

            )
        })
    }

    // displayCourses = () => {
    //     return this.state.courses.map((course) => {
    //         return (
    //             <tr key={course.id}>
    //                 <td>{course.name}</td>
    //                 <td>{course.c_desc}</td>
    //                 <td>{course.details}</td>
    //                 <td>{course.department}</td>
    //                 <td>{course.college}</td>
    //             </tr>
    //
    //         )
    //     })
    // }
    handleAdd = () => {
        this.setState({
            modal: true
        })
    }
    handleCancel = () => {
        this.setState({
            modal: false
        })
    }

    handleOk = () => {
        this.setState({
            modal: false
        })
    }
    updateCourses = (apiResponse) => {
        this.setState({
            courses: apiResponse
        })
    }
    fetchCourses = () => {
        fetch('/coursedata')
            .then(
                response => response.json()
            ).then(jsonOutput => {
                this.updateCourses(jsonOutput)
            }
        )

    }
    // add = (name, c_desc, details, department_id) => {
    //     fetch('/coursedata/', {
    //         method: "POST",
    //         body: JSON.stringify({
    //             name: name,
    //             c_desc: c_desc,
    //             details: details,
    //             dept_id: department_id
    //         }),
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     }).then(
    //         response => response.json()
    //     )//The promise response is returned, then we extract the json data
    //         .then(
    //             () => //jsonOutput now has result of the data extraction
    //             {
    //                 this.fetchCourses()
    //             }
    //         )
    // }
    // update = (course_id, name, c_desc, details, department_id) => {
    //     fetch('/coursedata/' + course_id, {
    //         method: "PUT",
    //         body: JSON.stringify({
    //             name: name,
    //             c_desc: c_desc,
    //             details: details,
    //             dept_id: department_id
    //         }),
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     }).then(
    //         response => response.json()
    //     )//The promise response is returned, then we extract the json data
    //         .then(
    //             () => //jsonOutput now has result of the data extraction
    //             {
    //                 this.fetchCourses()
    //             }
    //         )
    // }

    render() {
        // const department = parseInt("");
        return (
            <div><Card>
                <CardHeader>Course List</CardHeader>
                <Table striped >
                    <thead>
                    <th></th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Details</th>
                    <th>Department</th>
                    <th>College</th>
                    </thead>
                    <tbody>
                    {this.display()}
                    </tbody>
                </Table>
                <CardFooter>
                    <Button color="primary" onClick={this.handleAdd}>Add</Button>
                </CardFooter>
            </Card>

                <Modal isOpen={this.state.modal}>
                    <ModalHeader>Add Course</ModalHeader>
                    <ModalBody>
                        <Label>Course Name</Label>
                        <Input id="cName" type='text' onChange={this.updateFirstName}></Input>
                        <Label>Course Description</Label>
                        <Input id="cDescription" type='text' onChange={this.updateFirstName}></Input>
                        <Label>Course Details</Label>
                        <Input id="cDetails" type='text' onChange={this.updateFirstName}></Input>
                        <Label>Department </Label><br/>
                        <select>
                            <option value="1">Software Engineering</option>
                            <option value="2">Computer Science</option>
                            <option value="3">Computer Engineering</option>
                            <option value="4">Virology</option>
                        </select>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleOk}>Ok</Button>
                        <Button color="primary" onClick={this.handleCancel}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }


}

export default List;