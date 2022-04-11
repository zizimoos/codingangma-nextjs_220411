import React from "react";

function Gnb(props) {
  return (
    <>
      <div className="container">
        <span>Home</span>
        <span>Message</span>
        <span>Friends</span>
      </div>

      <style jsx>{`
        .container {
          width: 900px;
          height: 50px;
          margin: 0 auto;
          background-color: black;

          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        .container span {
          margin-left: 20px;
          font-size: 14px;
          color: white;
        }
      `}</style>
    </>
  );
}

export default Gnb;
