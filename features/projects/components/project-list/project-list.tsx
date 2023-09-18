import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import styles from "./project-list.module.scss";
import { LoadingIndicator, ErrorScreen } from "@features/ui";

export function ProjectList() {
  const { data, isLoading, isError, error } = useGetProjects();

  if (isLoading) {
    return (
      <div className={styles.loadContainer}>
        <LoadingIndicator />
      </div>
    );
  }

  if (isError) {
    console.error(error);
    return <ErrorScreen 
      theError={"There was a problem while loading the project data."} 
      buttonFunction={() => window.location.reload()}
      />;
    
  }

  return (
    <ul className={styles.list}>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
