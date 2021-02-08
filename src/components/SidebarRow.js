import React from "react";
import '../styles/SidebarRow.css';

function SidebarRow({ Icon, text }) {
  return (
    <div className="sidebarRow">
      {Icon && <Icon />}
      <h4>{text}</h4>
    </div>
  );
}

export default SidebarRow;
