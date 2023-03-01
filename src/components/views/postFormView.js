const PostFormView = (props) => {

    const {handleChange, handleSubmit} = props;
    return (
        <form className="container col-6" data-bs-theme="dark">
            <div className="mb-3">
                <label className="form-label">Project Title</label>
                <input type="text" className="form-control" onChange={(e)=> handleChange(e)} />
            </div>
            <div className="mb-3">
                <label  className="form-label">Description</label>
                <textarea className="form-control"  rows="3" onChange={(e)=> handleChange(e)} />
            </div>
            <div className="d-grid col-3 mx-auto">
                <button type="submit" className="btn btn-success ">Post </button>
            </div>
        </form>


    )

}

export default PostFormView;