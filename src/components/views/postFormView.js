const PostFormView = (props) => {

    return (
        <div className="container col-6" data-bs-theme="dark">
            <div className="mb-3">
                <label className="form-label">Project Title</label>
                <input type="text" className="form-control"   />
            </div>
            <div className="mb-3">
                <label  className="form-label">Description</label>
                <textarea className="form-control"  rows="3"></textarea>
            </div>
            <div className="d-grid col-3 mx-auto">
                <button type="button" className="btn btn-success ">Post</button> 
            </div>
        </div>


    )

}

export default PostFormView;