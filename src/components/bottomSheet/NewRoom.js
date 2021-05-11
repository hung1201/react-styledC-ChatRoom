import React, { useState } from "react";
import style from "../../style/roomDetail.module.css";
import { AiOutlineFile, AiOutlinePlus } from "react-icons/ai";
import { BsMicFill, BsMicMuteFill } from "react-icons/bs";
const NewRoom = (props) => {
  const [micMute, setMicMute] = useState(false);
  const [itemsVisible, setItemsVisible] = useState(true);
  const card = props.cardDetail;
  return (
    <>
      <div className={style.roomDetailContainer}>
        <div className={style.head}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <a href="#" onClick={() => props.setSheetVisible(false)}>
              <img
                src="/images/arrow.png"
                alt="img"
                className={style.arrow_icon}
              />
            </a>
            <span>Chat room</span>
          </div>
          <div>
            <AiOutlineFile />
            <img
              src="/images/user-img.jpg"
              alt="img1"
              className={style.profile_img}
            />
          </div>
        </div>
        <div className={style.roomDetailCard}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              padding: "0.5em 1em",
            }}>
            {card.members.map((member) => (
              <div className={style.memberContainer}>
                {micMute ? (
                  <div className={style.audio_icon}>
                    <BsMicMuteFill />
                  </div>
                ) : (
                  ""
                )}
                <img src="/images/user-img.jpg" alt="userimg" />
                <p>{member.first_name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={style.footer}>
          <button onClick={() => props.setSheetVisible(false)}>
            <img src="/images/hand-peace.png" alt="hand" />
            Leave room
          </button>
          <div>
            <button>
              <AiOutlinePlus />
            </button>
            <button>
              <img src="/images/stopHandIcon.png" alt="handicon" />
            </button>
            <button onClick={() => setMicMute(!micMute)}>
              {micMute ? <BsMicMuteFill /> : <BsMicFill />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewRoom;
