import {ProjectsContainer} from '../features/project/allProjects/allProjectsContainer'
import Navbar from '../common/navbar';
import Footer from '../common/footer';
import {AddProjectFormContainer} from '../features/project/addProjectForm/addFormContainer';

export default function HomePage() {
	
	return (
	<div >
        <Navbar />
        <ProjectsContainer />
        <Footer />
    </div> 
	);
}