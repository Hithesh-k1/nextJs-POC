import React from "react";
import MainHeader from "./mainHeader";

function Layout(props) {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
