import ProjectPageView from "./ProjectPageView";
import { useNavigate } from "react-router-dom";
import { useGetProjectQuery, useGetMembersQuery, useAddRequestMutation } from "../../api/apiSlice";
import { useParams } from "react-router-dom";
import { useState } from "react";


export function ProjectPageContainer() {
  const navigate = useNavigate();
  let params = useParams();
  const [setJoined, joined] = useState(false);
  const { data, error, isLoading } = useGetProjectQuery(params.projectId);
  const {data: requests, isError, loading, isSuccess } = useGetMembersQuery(params.projectId)
  const [addRequest, {isSuccess: isSuccessRequest, isLoading: isLoadingRequest, isError: isErrorRequest}] = useAddRequestMutation()
  

  if (isLoading || loading) {
    return <div>Loading projects...</div>;
  }

  if (error || isError) {
    return <div>Error: {error.message}</div>;
  }

  
  
  

  const handleJoin = async () => {
    await addRequest(params.projectId);
    if (isLoadingRequest) {
      return <div>Sending Request...</div>;
    }
  
    if (isErrorRequest) {
      return <div>Error Sending Request: {error.message}</div>;
    }
    if(isSuccessRequest){
      setJoined(true);
    }

  }
  if(isSuccess)
  {return (
    <ProjectPageView project={data} members={requests} joinHandler={handleJoin} isJoined = {joined} />
  )}
}
  