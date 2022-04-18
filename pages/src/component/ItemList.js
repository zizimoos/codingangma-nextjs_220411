import Image from "next/image";
import Link from "next/link";
import React from "react";

function ItemList({ list }) {
  return (
    <div className="container">
      {list.map((item, index) => {
        return (
          <div key={index} className="unit">
            <div>
              <Link href={`/view/${item.id}`}>
                <a>
                  <Image
                    src={item.image_link}
                    alt={item.name}
                    style={{ width: "200px", height: "200px" }}
                  />
                </a>
              </Link>
              <div className="texts">
                <div>name : {item.name}</div>
                <div>brand : {item.brand}</div>
                <div className="price">price :$ {item.price}</div>
              </div>
            </div>
          </div>
        );
      })}

      <style jsx>{`
        .container {
          width: 900px;
          height: 100%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 220px 220px 220px 220px;
          gap: 10px;
        }
        .unit {
          border: 1px solid teal;
          border-radius: 10px;
          padding: 10px;
        }
        .texts {
          padding: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }
        .price {
          color: teal;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}

export default ItemList;
