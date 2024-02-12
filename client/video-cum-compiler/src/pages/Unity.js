import React from "react";
import UnityHeader from "../components/UnityHeader";
import VideoStream from "../components/VideoStream";
import Compiler from "../components/Compiler";
import "../style/Unity.css";

export default function Unity() {
  return (
    <>
      <UnityHeader />
      <div className="split-component">
        <VideoStream />
        <Compiler />
      </div>
    </>
  );
}
