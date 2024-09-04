import React from "react";

function Spinner() {
  return (
    /* From Uiverse.io by satyamchaudharydev */
    <div className="w-10/12 h-screen mx-auto flex items-center">
      <div className="loading mx-auto">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    </div>
  );
}

export default Spinner;
