import React, {useEffect} from "react";

import { useGetAllProjectsQuery } from "../../api/apiSlice";
import AllProjectsView from "./allProjectsView";

export function ProjectsContainer() {
  const { data, error, isLoading } = useGetAllProjectsQuery();

  if (isLoading) {
    return <div>Loading projects...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  //console.log(data)
  return (
    <AllProjectsView allProjects={data} />
  )
}
  
  


