import React, { useState } from "react";
import style from "../../style/bottomSheet.module.css";
import { FcGlobe } from "react-icons/fc";
const StartRoom = (props) => {
  const [room, setRoom] = useState("open");
  return (
    <>
      <div className={style.switch}></div>
      <div style={{ textAlign: "right" }}>
        <button className={style.addTopicBtn}>+ Create a Topic</button>
      </div>
      <div className={style.selectRoom}>
        <button
          className={room == "open" ? style.active : ""}
          onClick={() => setRoom("open")}>
          <div>
            <FcGlobe />
          </div>
          Open
        </button>
        <button
          className={room == "social" ? style.active : ""}
          onClick={() => setRoom("social")}>
          <div>
            <FcGlobe />
          </div>
          Social
        </button>
        <button
          className={room == "closed" ? style.active : ""}
          onClick={() => setRoom("closed")}>
          <div>
            <FcGlobe />
          </div>
          Closed
        </button>
      </div>
      <p>
        Create a room{" "}
        <span>
          {room == "closed"
            ? "for people I choose"
            : room == "social"
            ? "with people I follow"
            : "open to everyone"}
        </span>
      </p>
      <div>
        <button
          className={style.letGoBtn}
          onClick={() => {
            props.setSheetCreateRoom(true);
            props.setSheetVisible(true);
            props.setSheetVisible(false);
          }}>
          Let's Go
        </button>
      </div>
    </>
  );
};

export default StartRoom;
