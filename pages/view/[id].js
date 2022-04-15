import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function id(props) {
  const [list, setList] = React.useState([]);
  const router = useRouter();
  const { id } = router.query;

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  const getData = () => {
    axios.get(API_URL).then((res) => {
      setList(res.data);
    });
  };

  useEffect(() => {
    if (id && id > 0) getData();
  }, [id]);
  return (
    <>
      <div>상세페이지 : {id}</div>
      <img
        src={
          list.image_link
            ? list.image_link
            : "https://cdn.shopify.com/s/files/1/1338/0845/products/brain-freeze_a_800x1200.jpg?v=1502255076"
        }
        alt={list.name}
      />
      <div>{list.description}</div>
    </>
  );
}

export default id;
