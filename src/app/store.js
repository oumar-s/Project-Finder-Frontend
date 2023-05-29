import { configureStore} from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import projectsReducer from '../features/project/projectSlice'

export default configureStore({
    reducer: {
        projects: projectsReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})