import React from "react"; //Imr
import NewProject from '../projects/NewProject';
import ProjectsList from '../projects/ProjectsList';

const Sidebar = () => {
  //sfc
  return (
    <aside>
      <h1>
        MERN <span>Tasks</span>{" "}
      </h1>
      <NewProject />
      <div className="proyectos">
        <h2>Tus proyectos</h2>
        <ProjectsList/>
      </div>
    </aside>
  );
};

export default Sidebar;
