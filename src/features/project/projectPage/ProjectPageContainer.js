import ProjectPageView from "./ProjectPageView";
import { useGetProjectQuery, useGetMembersQuery, useAddRequestMutation } from "../../api/apiSlice";
import { useParams } from "react-router-dom";

export function ProjectPageContainer() {
  let params = useParams();
  const { data, error, isLoading } = useGetProjectQuery(params.projectId);
  const {data: requests, isError, loading, isSuccess } = useGetMembersQuery(params.projectId)
  const [addRequest, { requestIsLoading }] = useAddRequestMutation()
  

  if (isLoading || loading) {
    return <div>Loading projects...</div>;
  }

  if (error || isError) {
    return <div>Error: {error.message}</div>;
  }

  
  
  

  const handleJoin = async () => {
    await addRequest(params.projectId);
  }
  if(isSuccess)
  {return (
    <ProjectPageView project={data} members={requests} joinHandler={handleJoin} />
  )}
}
  