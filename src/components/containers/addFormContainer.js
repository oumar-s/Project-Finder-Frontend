import { Component } from "react";
import { connect } from "react-redux";
//import {redirect} from "react-router-dom"

import AddProjectFormView from "../views/addProjectFormView";
import { addProjectThunk } from "../../store/thunks";

class AddProjectFormContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            projectTitle: "",
            projectDescription: ""
        };
    }

    //This event handler keeps track of changes as the user fills out the form.
    //this event handler will be passed to the AddProjectFormView as a prop.
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();
        let project = {
            projectTitle: this.state.projectTitle,
            projectDescription: this.state.projectDescription
        };
        console.log(project)
        await this.props.addProject(project);
    }

    render() {
        return (
            <AddProjectFormView
                handleChange = {this.handleChange} 
                handleSubmit = {this.handleSubmit}
            />

        );
    }
}
const mapDispatch = (dispatch) => {
    return({
        addProject: (project) => dispatch(addProjectThunk(project)),
    })
}

export default connect(null, mapDispatch)(AddProjectFormContainer);