import './App.css';
import AllProjectsContainer from './components/containers/allProjectsContainer'
import Navbar from './components/containers/navbar';
import Footer from './components/containers/footer';

function App() {
  return (
    <div >
        <Navbar />
        <AllProjectsContainer />
        <Footer />
    </div>
  
  );
}

export default App;
