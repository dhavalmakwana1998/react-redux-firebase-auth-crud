import React from "react";

const Loading = () => {
  return (
    <div className="loading bg-primary">
      <div
        className="spinner-grow text-warning"
        role="status"
        style={{ width: "100px", height: "100px" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
