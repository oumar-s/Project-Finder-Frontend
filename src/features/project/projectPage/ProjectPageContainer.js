import ProjectPageView from "./ProjectPageView";
import { useGetProjectQuery } from "../../api/apiSlice";
import { useParams } from "react-router-dom";

export function ProjectPageContainer() {
    let params = useParams();
  const { data, error, isLoading } = useGetProjectQuery(params.projectId);

  if (isLoading) {
    return <div>Loading projects...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  //console.log(data)
  return (
    <ProjectPageView project={data} />
  )
}
  