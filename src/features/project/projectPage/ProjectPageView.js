const ProjectPageView = (props) => {
    return (
        <div className="container">
            <h1>{props.project.projectTitle}</h1>
            <p>{props.project.projectDescription}</p>
            <button onClick={props.joinHandler}>Join</button>
        </div>
    )
}
export default ProjectPageView;