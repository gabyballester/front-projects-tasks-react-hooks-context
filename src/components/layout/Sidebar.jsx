import React from "react"; //Imr
import NewProject from "../projects/NewProject";

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
      </div>
    </aside>
  );
};

export default Sidebar;
