import ProjectPageView from "./ProjectPageView";
import { useGetProjectQuery, useAddRequestMutation } from "../../api/apiSlice";
import { useParams } from "react-router-dom";

export function ProjectPageContainer() {
    let params = useParams();
  const { data, error, isLoading } = useGetProjectQuery(params.projectId);
  const [addRequest, { requestIsLoading }] = useAddRequestMutation()
  

  if (isLoading) {
    return <div>Loading projects...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleJoin = async event => {
    await addRequest(params.projectId);
  }

  return (
    <ProjectPageView project={data} joinHandler={handleJoin} />
  )
}
  