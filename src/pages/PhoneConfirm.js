import React, { useState } from "react";
import style from "../style/phoneComfirm.module.css";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
const PhoneConfirm = () => {
  const [value, setValue] = useState();
  return (
    <div className={style.phoneContainer}>
      <Link to="/" className={style.backBtn}>
        <img src="/images/arrow.png" alt="arrow" />
      </Link>
      <h1>Enter your phone number</h1>
      <p style={{ marginBottom: "10px" }}>Phone number: </p>
      <PhoneInput
        placeholder="Enter phone number"
        international
        defaultCountry="VN"
        value={value}
        onChange={setValue}
      />
      <Link
        to="/code_confirm"
        className="primaryBtn d-flex align-items-center"
        style={{ marginTop: "10px" }}>
        Next{" "}
        <img
          src="/images/nextArrowIcon.svg"
          alt="arrows2"
          style={{ marginLeft: "5px" }}
        />
      </Link>
    </div>
  );
};

export default PhoneConfirm;
