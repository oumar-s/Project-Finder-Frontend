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

  return (
    <AllProjectsView allProjects={data} />
  );
}
  
  


