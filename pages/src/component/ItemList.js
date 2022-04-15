import Link from "next/link";
import React from "react";

function itemList({ list }) {
  return (
    <div>
      {list.slice(0, 10).map((item, index) => {
        return (
          <div key={index} className="container">
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
              <div className="texts">
                <div>name : {item.name}</div>
                <div>category : {item.category}</div>
                <div>brand : {item.brand}</div>
                <div>price : {item.price}</div>
                <div>id number : {item.id}</div>
              </div>
            </div>
          </div>
        );
      })}
      <style jsx>{`
        .container {
          width: 900px;
          height: 100%;
          display: grid;
          grid-template-columns: 200px 200px 200px;
        }
        .texts {
          margin-left: 20px;
        }
      `}</style>
    </div>
  );
}

export default itemList;
