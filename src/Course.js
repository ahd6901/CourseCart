import React, {Component} from "react";
import {Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

class Course extends Component {
    state = {
        modal_displayed: false,
        added: "false",
        department: null
    }
    editClicked = () => {
        this.setState({
            modal_displayed: true
        })
    }
    okClicked = () => {
        this.setState({
            modal_displayed: false
        })
        if (this.state.department != null) {
            this.props.update(this.props.course_id, this.props.name, this.props.des, this.props.details, this.props.dept)
        }

    }
    cancelClicked = () => {
        this.setState({
            modal_displayed: false,
            department: ""
        })
    }
    departmentOnChanged = (event) => {
        this.setState({
            modal_displayed: false,
            department: event.target.value
        })
    }

    render() {
        return [
            <tr key={this.props.id}>
                <td><Button color="primary" onClick={this.editClicked}>Edit</Button></td>
                <td>{this.props.name}</td>
                <td>{this.props.des}</td>
                <td>{this.props.details}</td>
                <td>{this.props.dept}</td>
                <td>{this.props.college}</td>
            </tr>,
            <Modal isOpen={this.state.modal_displayed}>
                <ModalHeader>Add Course</ModalHeader>
                <ModalBody>
                    <Label>Course Name</Label>
                    <Input id="cName" type='text' onChange={this.updateFirstName}></Input>
                    <Label>Course Description</Label>
                    <Input id="cDescription" type='text' onChange={this.updateFirstName}></Input>
                    <Label>Course Details</Label>
                    <Input input={this.props.details} id="cDetails" type='text'
                           onChange={this.updateFirstName}></Input>
                    <Label>Department </Label><br/>
                    <select onChange={this.departmentOnChanged}>
                        <option value="1">Software Engineering</option>
                        <option value="2">Computer Science</option>
                        <option value="3">Computer Engineering</option>
                        <option value="4">Virology</option>
                    </select>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.okClicked}>Ok</Button>
                    <Button color="primary" onClick={this.cancelClicked}>Cancel</Button>
                </ModalFooter>
            </Modal>

        ];
    }

}

export default Course;