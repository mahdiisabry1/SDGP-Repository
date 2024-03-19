import React from "react";
import Tabs from "../components/Tabs";
import NavBar from "../components/NavBar";

const Certification = () => {
  const backgroundStyles = {
    backgroundImage: 'url("https://i.pinimg.com/originals/0f/b2/88/0fb288a519fdb745d0b773d87a6aaf2e.gif")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed", // Fix the background image to the viewport
  };
  return (
    <>
      <NavBar />
      <div className="py-40 text-white" style={backgroundStyles}>
        <Tabs />
      </div>
    </>
  );
};

export default Certification;
