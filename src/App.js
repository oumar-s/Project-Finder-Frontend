import './App.css';
import AllProjectsContainer from './components/containers/allProjectsContainer'
import Navbar from './components/containers/navbar';
import Footer from './components/containers/footer';
import AddProjectFormContainer from './components/containers/addFormContainer';

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
