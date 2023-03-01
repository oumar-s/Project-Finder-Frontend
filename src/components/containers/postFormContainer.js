import axios, { Axios } from "axios";
import { Component } from "react";
import { Connect } from "react-redux";
//import {redirect} from "react-router-dom"

import PostFormView from "../views/postFormView";
//import thunk
class  PostFormContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            projectTitle: "",
            projectDescription: ""
        };
    }

    //This event handler keeps track of changes as the user fills out the form.
    //this event handler will be passed to the PostFormView as a prop.
    handleChange = event => {
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

        let newProject = await this.props.addProject(project);
    }
}