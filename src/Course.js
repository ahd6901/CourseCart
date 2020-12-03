import React, {Component} from "react";
import {Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

class Course extends Component {
    state = {
        modal_displayed: false,
        added: "false"
    }
    okClicked = () => {
        this.setState({
            modal_displayed: false
        })
    }
    cancelClicked = () => {
        this.setState({
            modal_displayed: false
        })
    }

    render() {
        return (
            <div>
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
        );
    }

}

export default Course;