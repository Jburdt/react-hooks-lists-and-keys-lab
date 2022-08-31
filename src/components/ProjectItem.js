import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(technologies)

  const ProjectName = technologies.map((prop, index) => {
    return (
      <span key = {index}>{prop}</span>
    )
  })


  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {ProjectName}
      </div>
    </div>
  );
}

export default ProjectItem;
