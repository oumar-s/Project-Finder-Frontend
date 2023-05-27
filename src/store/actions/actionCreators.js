import * as at from './actionTypes';

//All Projects 
export const fetchAllProjects = (projects) => {
    return {
        type: at.FETCH_ALL_PROJECTS,
        payload: projects
    };
};

//addProject
export const addProject = (project) => {
    return{
        type: at.ADD_PROJECT,
        payload: project
    };
};

