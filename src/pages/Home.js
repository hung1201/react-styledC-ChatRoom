import React, { useState } from "react";
import DailyCard from "../components/DailyCard";
import Header from "../components/Header";
import RoomCard from "../components/RoomCard";
import style from "../style/home.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { BsGrid3X3Gap } from "react-icons/bs";
import data from "../data/roomCard.json";
import BottomSheet from "../components/BottomSheet";
import newRoomData from "../data/newRoom.json";
const Home = () => {
  const [itemsVisible, setItemsVisible] = useState(true);
  const [sheetVisible, setSheetVisible] = useState(false);
  const [sheetCreateRoom, setSheetCreateRoom] = useState(false);
  const [loaderVisibility, setLoaderVisibility] = useState(false);
  const [cardId, setCardId] = useState(1);
  return (
    <>
      {loaderVisibility ? (
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            zIndex: "1000",
          }}>
          <img src="/images/loader.gif" alt="img" />
        </div>
      ) : (
        ""
      )}
      <Header />
      <div className={style.homeContainer}>
        <DailyCard />
        <RoomCard />
      </div>
      <div className={style.action_btn}>
        <button onClick={() => setSheetVisible(true)}>
          <AiOutlinePlus style={{ marginRight: "5px" }} />
          Create a room
        </button>
        <button>
          <BsGrid3X3Gap />
        </button>
        <BottomSheet
          sheetTitle="start room"
          setSheetVisible={(item) => setSheetVisible(item)}
          sheetVisible={sheetVisible}
          cardDetail={data.find((item) => item.id == cardId)}
          setItemsVisible={(item) => setItemsVisible(item)}
          setSheetCreateRoom={(item) => {
            setLoaderVisibility(true);
            setTimeout(() => {
              setSheetCreateRoom(item);
              setLoaderVisibility(false);
            }, 1000);
          }}
        />
        <BottomSheet
          sheetTitle="new room"
          setSheetVisible={(item) => setSheetCreateRoom(item)}
          sheetVisible={sheetCreateRoom}
          cardDetail={newRoomData}
          setItemsVisible={(item) => setItemsVisible(item)}
        />
      </div>
    </>
  );
};

export default Home;
