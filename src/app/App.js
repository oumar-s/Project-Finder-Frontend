import './App.css';
import {ProjectsContainer} from '../features/project/allProjects/allProjectsContainer'
import Navbar from '../common/navbar';
import Footer from '../common/footer';
import {AddProjectFormContainer} from '../features/project/addProjectForm/addFormContainer';

function App() {
  return (
    <div >
        <Navbar />
        <AddProjectFormContainer />
        <ProjectsContainer />
        <Footer />
    </div> 
  
  );
}

export default App;
