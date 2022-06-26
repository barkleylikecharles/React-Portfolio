import React from "react";
import ProjectList from "../ProjectList";
import { capitalizeFirstLetter } from '../../utils/helpers';



function Projects({ currentCategory }) {
  const { name, description } = currentCategory;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <ProjectList category={currentCategory.name} />
    </section>
  );
}

export default Projects;