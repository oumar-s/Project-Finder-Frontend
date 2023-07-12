import { createSlice } from "@reduxjs/toolkit";
const axios = require('axios'); 

export const ProjectSlice = createSlice({
    name: 'projects',
    initialState:{
        projects: []
    },
    reducers: {
        allProjects: (state, action) => {
            return action.payload;
        },
        projectAdded: (state, action) => {
            return [...state, action.payload];
        },
        projectViewed: (state, action) => {
            return action.payload;
        }
    }
})

//Selectors
export const selectAllProjects = state => state.projects;

//let path = 'http://localhost:8080/api';

//All projects 
export const fetchAllProjectsThunk = () => async (dispatch) => {
    try {
        let res = await axios.get('/api/projects');
        dispatch(ProjectSlice.actions.allProjects(res.data));
    } catch(err) {
        console.error(err);
    }
};

export const addProjectThunk = (project) => async (dispatch) => {
    try {
      let res = await axios.post('/api/projects', project);
      dispatch(ProjectSlice.actions.projectAdded(res.data));
      return res.data;
    } catch(err) {
      console.error(err);
    }
  };

export const {allProjects, projectAdded, projectViewed} = ProjectSlice.actions;
export default ProjectSlice.reducer;