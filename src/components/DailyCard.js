import React from "react";
import style from "../style/dailyCard.module.css";
import data from "../data/dailyCard.json";
const DailyCard = () => {
  return (
    <div className={style.dailyCard}>
      {data.map((item) => (
        <div>
          <span className="">{item.time}</span>
          <div>
            <span>{item.title}</span>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DailyCard;
