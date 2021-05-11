import React from "react";
import style from "../style/phoneComfirm.module.css";
import { Link } from "react-router-dom";
const AllowNoti = () => {
  return (
    <div className={style.phoneContainer}>
      <div className="text-center">
        <h1 className="mb-4">Last step! Enable notification</h1>
        <div className={style.notiContainer}>
          <h4>We would like to send you Notifications</h4>
          <p className="mw-100">Includes alerts, sounds,...</p>
          <div className={style.action_btn}>
            <Link to="/home">Don't Allow</Link>
            <Link to="/home">Allow</Link>
            <img
              src="/images/handIcon.svg"
              alt="icon"
              className={style.hand_icon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllowNoti;
