import Navbar from '../common/footer';
import Footer from '../common/navbar';
import { AddProjectFormContainer } from '../features/project/addProjectForm/addFormContainer';
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