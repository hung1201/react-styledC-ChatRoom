import React from "react";

const PlainLayout = ({ children }) => {
  return (
    <div style={{ width: "100%", maxWidth: "500px", margin: "auto" }}>
      {children}
    </div>
  );
};

export default PlainLayout;
