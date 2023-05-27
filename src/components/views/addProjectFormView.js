const AddProjectFormView = (props) => {

    const {handleChange, handleSubmit} = props;
    return (
        <form className="container col-6" data-bs-theme="dark" onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
                <label className="form-label">Project Title</label>
                <input type="text" className="form-control" name="projectTitle" onChange={(e)=> handleChange(e)} />
            </div>
            <div className="mb-3">
                <label  className="form-label">Description</label>
                <textarea className="form-control"name="projectDescription"  rows="3" onChange={(e)=> handleChange(e)} />
            </div>
            <div className="d-grid col-3 mx-auto">
                <button type="submit" className="btn btn-success" >Post </button>
            </div>
        </form>


    )

}

export default AddProjectFormView;