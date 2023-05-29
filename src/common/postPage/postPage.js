import Navbar from '../footer';
import Footer from '../navbar';
import AddProjectFormContainer from '../../features/project/addProjectForm/addFormContainer';
function PostPage() {
    return (
      <div >
          <Navbar />
          <AddProjectFormContainer />
          <Footer />
      </div> 
    
    );
  }

export default PostPage;