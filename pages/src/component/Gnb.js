import { useRouter } from "next/router";
import React from "react";

function Gnb(props) {
  const router = useRouter();

  function goLink(e, data) {
    e.preventDefault();
    console.log(e.target.innerText);
    if (e.target.innerText === "Home") {
      router.push("/");
    } else if (e.target.innerText === "About") {
      router.push("/about");
    } else if (e.target.innerText === "Friends") {
      router.push("/friends");
    }
  }

  return (
    <>
      <div className="container">
        <span onClick={goLink}>Home</span>
        <span onClick={goLink}>About</span>
        <span onClick={goLink}>Friends</span>
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
