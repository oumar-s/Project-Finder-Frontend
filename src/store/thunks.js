import * as ac from './actions/actionCreators';
const axios = require('axios'); 

//let path = 'http://localhost:8080/api';

//All projects 
export const fetchAllProjectsThunk = () => async (dispatch) => {
    try {
        let res = await axios.get('/api/projects');
        dispatch(ac.fetchAllProjects(res.data));
    } catch(err) {
        console.error(err);
    }
};

export const addProjectThunk = (project) => async (dispatch) => {
    try {
      let res = await axios.post('/api/projects', project);
      dispatch(ac.addProject(res.data));
      return res.data;
    } catch(err) {
      console.error(err);
    }
  };

