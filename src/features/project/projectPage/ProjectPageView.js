import Members from "./Members";
const ProjectPageView = (props) => {
    console.log(props.members)
    if(props.isJoined){
        return <>Your requst has been sent</>
    }
    return (
        <div className="container col-6 my-5" style={{minHeight: "100vh"}}>
            <h1>{props.project.projectTitle}</h1>
            <p>{props.project.projectDescription}</p>
            <p>Owner: {props.project.owner.firstName} {props.project.owner.lastName}</p>
            <h5>Members</h5>
            <Members members={props.members}/>
            <button type="button" onClick={props.joinHandler} className="btn btn-success d-grid col-3 mx-auto my-4">Join</button>
        </div>
    )
}
export default ProjectPageView;