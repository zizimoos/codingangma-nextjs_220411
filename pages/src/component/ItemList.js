import Link from "next/link";
import React from "react";

function itemList({ list }) {
  return (
    <div className="container">
      {list.slice(0, 20).map((item, index) => {
        return (
          <div key={index} className="unit">
            <div>
              <Link href={`/view/${item.id}`}>
                <a>
                  <img
                    src={
                      item.image_link
                        ? item.image_link
                        : "https://cdn.shopify.com/s/files/1/1338/0845/products/brain-freeze_a_800x1200.jpg?v=1502255076"
                    }
                    alt={item.name}
                    style={{ width: "200px", height: "200px" }}
                  />
                </a>
              </Link>
              <hr></hr>
              <div className="texts">
                <div>name : {item.name}</div>
                {/* <div>category : {item.category}</div> */}
                <div>brand : {item.brand}</div>
                <div className="price">price :$ {item.price}</div>
                {/* <div>id number : {item.id}</div> */}
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

export default itemList;
