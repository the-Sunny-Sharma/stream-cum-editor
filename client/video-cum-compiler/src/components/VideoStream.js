import React from "react";
// import hostScreen from "../assets/host-screen.png";
// import hostFacecam from "../assets/host-facecam.jpg";
import RealStream from "./RealStream";
import "../style/ZegoCloud.css";

export default function VideoStream() {
  return (
    <>
      <div className="left-container split-div">
        {/* <p>here comes the live straem, comments, facecam</p>
        <div className="host-screen">
          <img src={hostScreen} alt="Description" className="video-stream" />
        </div>
        <div className="overflow-parent">
          <div className="live-chat">
            <p className="chats">
              <span className="student-chat chat-by">Rajan : </span>My code's
              got issues!
            </p>
            <p className="chats-host chats">
              <span className="host-chat chat-by">Angela Leo : </span>
              Code gremlins strike again! Time to put on our detective hats.
            </p>
            <p className="chats">
              <span className="student-chat chat-by">Ekta : </span>Help, I'm
              lost in an infinite loop!
            </p>
            <p className="chats-host chats">
              <span className="host-chat chat-by">Angela Leo : </span>
              Ctrl + C to the rescue! Break free from the loop!
            </p>
            <p className="chats">
              <span className="student-chat chat-by">Sidharth : </span>Hello
              Ma'am
            </p>
            <p className="chats">
              <span className="student-chat chat-by">Raju : </span>Good Morning
              Ma'am
            </p>
            <p className="chats">
              <span className="student-chat chat-by">Pranay : </span>Good
              Morning Ma'am
            </p>
            <p className="chats">
              <span className="student-chat chat-by">Ganesh : </span>Good
              Morning 🌞 Ma'am
            </p>

            <p className="chats-host chats">
              <span className="host-chat chat-by">Angela Leo : </span>Good
              Morning to all
            </p>
            <p className="chats">
              <span className="student-chat chat-by">Pranay : </span>💖💗🥰💞
            </p>
          </div>
          <div className="host-facecam ">
            <img src={hostFacecam} alt="Description" className="facecam" />
          </div>
        </div>{" "} */}
        <RealStream />
      </div>
    </>
  );
}
