import React, {Component} from "react";
import {Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

class Course extends Component {
    state = {
        modal_displayed: false,
        name: null,
        description: null,
        details: null,
        department: null,
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
        this.props.update(this.props.course_id, this.state.name, this.state.description, this.state.details, this.state.department)

    }
    cancelClicked = () => {
        this.setState({
            modal_displayed: false,
            modal: false,
            name: null,
            description: null,
            details: null,
            department: null
        })
    }
    updateName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    updateDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    }
    updateDetails = (e) => {
        this.setState({
            details: e.target.value
        })
    }
    updateDepartment = (e) => {
        this.setState({
            department: parseInt(e.target.value)
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
                <ModalHeader>Edit Course</ModalHeader>
                <ModalBody>
                    <Label>Course Name</Label>
                    <Input placeholder={this.props.name} id="cName" type='text' onChange={this.updateName}></Input>
                    <Label>Course Description</Label>
                    <Input placeholder={this.props.des} id="cDescription" type='text' onChange={this.updateDescription}></Input>
                    <Label>Course Details</Label>
                    <Input placeholder={this.props.details} id="cDetails" type='text'
                           onChange={this.updateDetails}></Input>
                    <Label>Department </Label><br/>
                    <select onClick={this.updateDepartment}>
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