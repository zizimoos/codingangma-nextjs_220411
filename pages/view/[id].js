import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function id({ list }) {
  return (
    <>
      <Head>
        <title>{list.name}</title>
        <meta name="description" content={list.description} />
      </Head>
      <div className="itemBox">
        <img
          src={list.image_link}
          alt={list.name}
          style={{ width: "200px", height: "200px" }}
        />
        <div className="priceBox">
          <div>{list.name}</div>
          <div>Price : {list.price}</div>
          <div className="purchaseButton">구매하기</div>
        </div>
      </div>
      <hr></hr>
      <div>{list.description}</div>
      <hr></hr>
      <style jsx>{`
        .itemBox {
          margin-top: 20px;
          margin-bottom: 20px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
        .priceBox {
          margin-left: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .purchaseButton {
          width: 100px;
          height: 30px;
          margin-top: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid Fuchsia;
          border-radius: 5px;
          background-color: Fuchsia;
          color: white;
          font-weight: bold;
          font-size: 15px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export default id;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const res = await axios.get(
    `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`
  );
  return {
    props: {
      list: res.data,
    },
  };
}
