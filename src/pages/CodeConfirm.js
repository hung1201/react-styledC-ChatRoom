import React from "react";
import style from "../style/phoneComfirm.module.css";
import { Link } from "react-router-dom";
const CodeConfirm = () => {
  return (
    <div className={style.phoneContainer}>
      <Link to="/phone_confirm" className={style.backBtn}>
        <img src="/images/arrow.png" alt="arrow" />
      </Link>
      <div className="text-center">
        <h1 style={{ width: "100%", maxWidth: "200px", marginBottom: "20px" }}>
          Enter code:
        </h1>
        <input
          type="text"
          style={{
            width: "100%",
            border: "none",
            textAlign: "center",
            outline: "none",
          }}
        />
        <p className="mt-2">
          Didn't receive code ? <span>Send again</span>
        </p>
      </div>
      <Link to="/allow_noti" className="primaryBtn d-flex align-items-center">
        Next
        <img
          src="/images/nextArrowIcon.svg"
          alt="arrows2"
          style={{ marginLeft: "5px" }}
        />
      </Link>
    </div>
  );
};

export default CodeConfirm;
