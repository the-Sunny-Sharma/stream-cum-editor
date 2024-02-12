import React from "react";

export default function UnityHeader() {
  return (
    <>
      <div className="unity-header">
        <h1 className="unity-title">Unity</h1>
        <p className="unity-title">Understanding SHA256 - Hash</p>
        <div className="back-forth-opt">
          <ul>
            <li>
              <button className="prev-btn bf-btn">Previous</button>
            </li>
            <li>
              <button className="back-btn bf-btn">Next</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
