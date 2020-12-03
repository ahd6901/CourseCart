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

class List extends Component {

    state = {
        courses: [],
        modal: false,
        department:" "

    }
    handleCancel = () => {
        this.setState({
            modal: false
        })
    }
    handleAdd = () => {
        this.setState({
            modal: false
        })
    }

    add = () => {
        this.setState({
            modal: true
        })
    }

    render() {
        // const department = parseInt("");
        return (
            <div><Card>
                <CardHeader>Course List</CardHeader>
                <Table striped bordered>
                    <thead>
                    <th></th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Details</th>
                    <th>Department</th>
                    <th>College</th>
                    </thead>
                    <tbody>
                    </tbody>
                </Table>
                <CardFooter>
                    <Button color="primary" onClick={this.add}>Add</Button>
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
                        <Button color="primary" onClick={this.handleAdd}>Ok</Button>
                        <Button color="primary" onClick={this.handleCancel}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }


}

export default List;