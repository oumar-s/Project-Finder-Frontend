import './App.css';
import AllProjectsContainer from '../features/allProjects/allProjectsContainer'
import Navbar from '../common/navbar';
import Footer from '../common/footer';
import AddProjectFormContainer from '../features/addProjectForm/addFormContainer';

function App() {
  return (
    <div >
        <Navbar />
        <AddProjectFormContainer />
        <AllProjectsContainer />
        <Footer />
    </div> 
  
  );
}

export default App;
