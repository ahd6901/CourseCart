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
        name: null,
        description: null,
        details: null,
        department: null,


    }
    display = () => {
        this.fetchCourses()
        return this.state.courses.map((course) => {
            const {course_id, name, c_desc, details, department, college} = course
            return (
                <Course add={this.add} update={this.update}
                        course_id={course_id} name={name} des={c_desc} details={details}
                        dept={department} college={college}
                ></Course>

            )
        })
    }
    addName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    addDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    }
    addDetails = (e) => {
        this.setState({
            details: e.target.value
        })
    }
    addDepartment = (e) => {
        this.setState({
            department: parseInt(e.target.value)
        })
    }


    handleAdd = () => {
        this.setState({
            modal: true
        })
    }
    handleCancel = () => {
        this.setState({
            modal: false,
            name: null,
            description: null,
            details: null,
            department: null
        })
    }

    handleOk = () => {
        this.setState({
            modal: false
        })
        this.add(this.state.name, this.state.description, this.state.details, this.state.department)
    }


    add = (name, c_desc, details, department_id) => {
        fetch('/coursedata/', {
            method: "POST",
            body: JSON.stringify({
                name: name,
                c_desc: c_desc,
                details: details,
                dept_id: department_id
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(
            response => response.json()
        )
            .then(
                () => {
                    this.fetchCourses()
                }
            )
    }
    update = (course_id, name, c_desc, details, department_id) => {
        fetch('/coursedata/' + course_id, {
            method: "PUT",
            body: JSON.stringify({
                name: name,
                c_desc: c_desc,
                details: details,
                dept_id: department_id
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(
            response => response.json()
        )
            .then(
                () => {
                    this.fetchCourses()
                }
            )
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
    updateCourses = (apiResponse) => {
        this.setState({
            courses: apiResponse
        })
    }

    render() {
        return (
            <div><Card>
                <CardHeader>Course List</CardHeader>
                <Table striped>
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
                        <Input id="cName" type='text' onChange={this.addName}></Input>
                        <Label>Course Description</Label>
                        <Input id="cDescription" type='text' onChange={this.addDescription}></Input>
                        <Label>Course Details</Label>
                        <Input id="cDetails" type='text' onChange={this.addDetails}></Input>
                        <Label>Department </Label><br/>
                        <select onClick={this.addDepartment}>
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