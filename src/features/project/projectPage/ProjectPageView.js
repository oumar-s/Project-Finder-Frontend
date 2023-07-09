const ProjectPageView = (props) => {
    console.log(props);
    return (
        <div className="container">
            <h1>{props.project.projectTitle}</h1>
            <p>{props.project.projectDescription}</p>
            <button>Join</button>
        </div>
    )
}
export default ProjectPageView;