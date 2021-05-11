import React from "react";
import style from "../style/welcome.module.css";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div className={style.WelcomeContainer}>
      <h1>Welcome</h1>
      <div className={style.WelcomeInfo}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum odit
          velit reiciendis repellat, pariatur beatae dolore cumque! Magnam porro
          deserunt, distinctio temporibus sunt dicta velit corporis repellat eum
          labore incidunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cum, qui
          dolores eaque velit magni molestias, atque distinctio magnam
          repellendus quam vero culpa eius fuga harum nulla laborum. Est, odio?
        </p>
        <p>Nguyen Huu Hung - hungnh.work@gmail.com</p>
      </div>
      <div className={style.actionBtn}>
        <Link
          to="/phone_confirm"
          className="primaryBtn d-flex align-items-center mb-3">
          Get Username
          {/* <img src="" alt="" /> */}
        </Link>
        <Link to="/phone_confirm">SIGN IN ??</Link>
      </div>
    </div>
  );
};

export default Welcome;
