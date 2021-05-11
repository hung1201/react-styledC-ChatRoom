import React from "react";
import style from "../style/explore.module.css";
import { DownOutlined, FireOutlined } from "@ant-design/icons";
import data from "../data/Explore.json";
import { Input } from "antd";
import SubHeader from "../components/SubHeader";
const Explore = () => {
  const { people, conversation } = data;
  return (
    <div className={style.exploreContainer}>
      <div className={style.header}>
        <SubHeader pageTitle="EXPLORE" />
        <Input
          style={{
            backgroundColor: "#f4f4f4",
            borderRadius: "0.8em",
            padding: "0.3em 1em",
            border: "none",
            boxShadow: "none",
          }}
          size="large"
          placeholder="Find"
          prefix={<img src="images/search.png" width="15px" />}></Input>
      </div>
      <h6>FOLLOWED</h6>
      <div className={style.peopleContainer}>
        {people.map((item) => (
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src="/images/user-img.jpg" alt="ok" />
              <div style={{ marginLeft: "10px" }}>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
            <button>Follow</button>
          </div>
        ))}
        <button className={style.showMore}>
          Show more <DownOutlined />
        </button>
      </div>
      <h6>FIND CHAT ABOUT...</h6>
      <div className="row mx-0">
        {conversation.map((item) => (
          <div className="col-6 px-2 mb-3">
            <div className={style.conversationCard}>
              <h6>
                <FireOutlined />
                {item.title}
              </h6>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
