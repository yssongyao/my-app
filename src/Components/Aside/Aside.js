import React from "react";
import Data from "./Data";
import Blog from "./Blog";
import Articles from "./Articles";
import Contact from "./Contact";

const Aside = () => {

  return (
    <div className="AsideSection">
      <Data />
      <Blog />
      <Articles />  
      <Contact />         
    </div>
  );
};

export default Aside;