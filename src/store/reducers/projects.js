import * as at from '../actions/actionTypes';

const allProjects = (state = [], action) => {
    switch(action.type) {
        case at.FETCH_ALL_PROJECTS:
            return action.payload;
        default: 
            return state;
    }
};

export default allProjects;