import React, { useEffect, useState } from "react";
import style from "../style/roomCard.module.css";
import data from "../data/roomCard.json";
import { BsChatDots, BsChatDotsFill, BsFillPersonFill } from "react-icons/bs";
const RoomCard = (props) => {
  return (
    <>
      {data.map((item) => (
        <div>
          <div>
            <div className={style.roomCardContainer}>
              <h6>{item.title}</h6>
              <h2>{item.sub_title}</h2>
              <div className={style.roomMembers}>
                <div>
                  <img src="/images/user-img.jpg" alt="images" />
                  <img src="/images/user-img.jpg" alt="images1" />
                </div>
                <div>
                  {item.members.map((member) => (
                    <p>
                      {member.first_name} {member.last_name} <BsChatDots />
                    </p>
                  ))}
                  <p className="d-flex align-items-center">
                    <span style={{ marginRight: "5px" }}>1.8</span>
                    <BsFillPersonFill />
                    <span className="mx-2"></span>
                    <span style={{ marginRight: "5px" }}>5</span>{" "}
                    <BsChatDotsFill />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RoomCard;
