import { useState } from "react";
//import {redirect} from "react-router-dom"
import AddProjectFormView from "./addProjectFormView";
import { useAddProjectMutation } from "../../api/apiSlice";

export function AddProjectFormContainer() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [addPost] = useAddProjectMutation();

    //These event handlers keeps track of changes as the user fills out the form.
    //these event handlers will be passed to the AddProjectFormView as a prop.
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleSubmit = async event => {
        //event.preventDefault();
        let project = {
            projectTitle: title,
            projectDescription: description
        };
        //console.log(project)
        await addPost(project);
    }

    
    return (
        <AddProjectFormView
            handleTitleChange = {handleTitleChange} 
            handleDescriptionChange = {handleDescriptionChange}
            handleSubmit = {handleSubmit}
        />

    );
   
}
