import React from "react";
import CompilerOptions from "./CompilerOptions";
import "../style/Compiler.css";
import Output from "./Output";
import IDEContainer from "./IDEContainer";

export default function Compiler() {
  return (
    <>
      <div className="right-container split-div">
        <div className="compiler-head">
          <CompilerOptions />
        </div>
        <div className="code-editor-container">
          <IDEContainer />
        </div>
        <Output />
      </div>
    </>
  );
}
