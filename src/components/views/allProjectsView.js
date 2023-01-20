
const AllProjectsView = (props) => {
    if(!props.allProjects.length){
        return <div>There are no projects.</div>
    }

    return (
        <div>
            <ul>
                {
                    props.allProjects.map((project) => {
                        return (
                            <div key={project.id}>
                                <h1>{project.title}</h1>
                                <p>{project.description}</p>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default AllProjectsView;