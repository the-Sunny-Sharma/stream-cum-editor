import React, { useEffect } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

export default function RealStream() {
  useEffect(() => {
    const generateToken = async (tokenServerUrl, userID) => {
      console.log("TokenServerUrl : " + tokenServerUrl);
      console.log("userId : " + userID);
      return fetch(
        `${tokenServerUrl}/access_token?userID=${userID}&expired_ts=7200`,
        {
          method: "GET",
        }
      ).then((res) => res.json());
    };

    const randomID = (len) => {
      let result = "";
      if (result) return result;
      var chars =
        "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP";
      var maxPos = chars.length;
      var i;
      len = len || 5;
      for (i = 0; i < len; i++) {
        result += chars.charAt(Math.floor(Math.random() * maxPos));
      }
      return result;
    };

    const getUrlParams = (url) => {
      let urlStr = url.split("?")[1];
      const urlSearchParams = new URLSearchParams(urlStr);
      const result = Object.fromEntries(urlSearchParams.entries());
      return result;
    };

    const init = async () => {
      const roomID =
        getUrlParams(window.location.href)["roomID"] || randomID(5);
      let role = getUrlParams(window.location.href)["role"] || "Host";
      role =
        role === "Host"
          ? ZegoUIKitPrebuilt.Host
          : role === "Cohost"
          ? ZegoUIKitPrebuilt.Cohost
          : ZegoUIKitPrebuilt.Audience;

      let sharedLinks = [];
      if (
        role === ZegoUIKitPrebuilt.Host ||
        role === ZegoUIKitPrebuilt.Cohost
      ) {
        sharedLinks.push({
          name: "Join as co-host",
          url:
            window.location.origin +
            window.location.pathname +
            "?roomID=" +
            roomID +
            "&role=Cohost",
        });
      }
      sharedLinks.push({
        name: "Join as audience",
        url:
          window.location.origin +
          window.location.pathname +
          "?roomID=" +
          roomID +
          "&role=Audience",
      });

      const userID = randomID(5);
      const userName = randomID(5);
      const { token } = await generateToken(
        "http://localhost:9000/getToken",
        userID
      );
      const KitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        2137113653, // You need to replace the appid with your own appid
        "93546ef2e39a01618620284c0d02bf35",
        roomID,
        userID,
        userName
      );
      const zp = ZegoUIKitPrebuilt.create(KitToken);
      zp.joinRoom({
        container: document.getElementById("videoStreamContainer"), // Use a DOM element directly
        branding: {
          logoURL:
            "https://www.zegocloud.com/_nuxt/img/zegocloud_logo_white.ddbab9f.png",
        },
        scenario: {
          mode: ZegoUIKitPrebuilt.LiveStreaming,
          config: {
            role,
          },
        },
        sharedLinks,
        onLeaveRoom: () => {
          // do do something
        },
        showUserList: true,
      });
    };

    init();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className="video-stream-container" id="videoStreamContainer"></div>
  );
}
