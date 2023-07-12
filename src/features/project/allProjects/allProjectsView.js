import {Link} from "react-router-dom"

const AllProjectsView = (props) => {
    if(!props.allProjects.length){
        return <div>There are no projects.</div>
    }

    return (
        <div>
            <ul className="container">
                <div className="row">
                   
                    {props.allProjects.map((project) => {
                        return (
                            <div key={project.id} className='col-sm-4'>
                                <Link to={"/projects/" + project.id}>
                                    <h1>{project.projectTitle}</h1>
                                </Link>
                                <p>{project.projectDescription}</p>
                            </div>
                        )
                    })
                }
                
                </div>
                
            </ul>
        </div>
    )
}

export default AllProjectsView;