import React from "react";

function Calculator() {
  return (
    <div
      id="calculator-background"
      aria-label="calculator background"
      className="bg-white rounded-t-3xl rounded-tr-3xl rounded-br-none w-80 h-96 mx-auto mr-auto"
    >
      {" "}
      {/**24px, 24px, 200px, 24px */}
      <div id="calculator-fields" aria-label="calculator fields"></div>
      <div id="calculator-button" aria-label="calculator button"></div>
      <div id="calculator-result" aria-label="calculator result"></div>
    </div>
  );
}

export default Calculator;
