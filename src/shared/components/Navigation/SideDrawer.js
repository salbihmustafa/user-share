import './SideDrawer.css';
import React from "react";

const SideDrawer = (props) => {
  return (
    <aside className="side-drawer">{props.children}</aside>
  )
}

export default SideDrawer;