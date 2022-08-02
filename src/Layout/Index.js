import React from "react";
import Topbar from "../components/Topbar";

function Layout({ children }) {
  return (
    <div>
      <Topbar />
      {children}
    </div>
  );
}

export default Layout;
