import React from "react";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import style from "../style/bottomSheet.module.css";
import StartRoom from "./bottomSheet/StartRoom";
import NewRoom from "./bottomSheet/NewRoom";
const BottomSheet = (props) => {
  return (
    <div style={{ zIndex: "100" }}>
      <SwipeableBottomSheet
        open={props.sheetVisible}
        onChange={() => {
          props.setSheetVisible(!props.sheetVisible);
          props.setItemsVisible(true);
        }}
        fullScreen={props.sheetTitle == "room detail" ? true : false}>
        <div
          className={style.bottomSheetContainer}
          style={{
            backgroundColor: props.sheetTitle == "profile" ? "transparent" : "",
          }}>
          {props.sheetTitle == "start room" ? (
            <>
              <StartRoom
                setSheetCreateRoom={props.setSheetCreateRoom}
                setSheetVisible={(item) => {
                  props.setSheetVisible(item);
                  props.setItemsVisible(true);
                }}
                setSheetVisible={props.setSheetVisible}
              />
            </>
          ) : props.sheetTitle == "new room" ? (
            <>
              <NewRoom
                cardDetail={props.cardDetail}
                setSheetCreateRoom={props.setSheetCreateRoom}
                setSheetVisible={(item) => {
                  props.setSheetVisible(item);
                  props.setItemsVisible(true);
                }}
              />
            </>
          ) : (
            ""
          )}
        </div>
      </SwipeableBottomSheet>
    </div>
  );
};

export default BottomSheet;
