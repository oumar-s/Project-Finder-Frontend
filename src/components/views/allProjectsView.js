
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
                                <h1>{project.title}</h1>
                                <p>{project.description}</p>
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