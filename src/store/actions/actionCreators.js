import * as at from './actionTypes';

//All Projects 
export const fetchAllProjects = (projects) => {
    return {
        type: at.FETCH_ALL_PROJECTS,
        payload: projects
    };
};