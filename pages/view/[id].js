import { useRouter } from "next/router";
import React from "react";

function id(props) {
  const router = useRouter();
  const { id } = router.query;
  console.log(router);

  return <div>id : {id}</div>;
}

export default id;
