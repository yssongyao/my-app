import React from "react";
import News from "./News";
import Highlights from "./Highlights";
import Upcoming from "./Upcoming";

const Main = () => {

  return (
    <div className="MainSection">
      <News />
      <Highlights />
      <Upcoming />           
    </div>
  );
};

export default Main;