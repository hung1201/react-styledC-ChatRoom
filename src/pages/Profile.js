import React from "react";
import { Link } from "react-router-dom";
import exploreStyle from "../style/explore.module.css";
import style from "../style/profile.module.css";
import { BsAt, BsPlus, BsUpload } from "react-icons/bs";
import {
  AiOutlineInstagram,
  AiOutlineSetting,
  AiOutlineTwitter,
} from "react-icons/ai";
const Profile = () => {
  return (
    <>
      <div className={style.profileContainer}>
        <div className={exploreStyle.header}>
          <div
            className={`${exploreStyle.head} text-right mb-0`}
            style={{ justifyContent: "space-between" }}>
            <Link to="/home">
              <img
                src="/images/arrow.png"
                alt="img"
                className={exploreStyle.arrow_icon}
              />
            </Link>
            <div className={style.actionBtn}>
              <BsAt />
              <BsUpload />
              <AiOutlineSetting />
            </div>
          </div>
        </div>
        <img
          src="/images/user-img.jpg"
          alt="imguser"
          className={style.profile_image}
        />
        <h4>Nguyen Hung</h4>
        <p>@hungnh</p>
        <div className={style.follow}>
          <p>
            <span>12 </span>
            followers
          </p>
          <p>
            <span>01 </span>
            following
          </p>
        </div>
        <button>Add info</button>
        <div className="mb-4">
          <button className="mb-0">
            <AiOutlineTwitter /> Add Twitter
          </button>
          <button className="mb-0">
            <AiOutlineInstagram /> Add Instagram
          </button>
        </div>
        <div className={style.nominated}>
          <img src="/images/user-img.jpg" alt="ias" />
          <div>
            <p>Joined 11/05/2021</p>
            <p>
              Invited by <span>Hung Nguyen</span>
            </p>
          </div>
        </div>
        <p>Member of: </p>
        <button className={style.addMemberBtn}>
          <BsPlus />
        </button>
      </div>
    </>
  );
};

export default Profile;
