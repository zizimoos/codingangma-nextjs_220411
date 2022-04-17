import { useRouter } from "next/router";
import React from "react";

function Error404(props) {
  const router = useRouter();
  return (
    <div>
      <h1>404 : 페이지를 찾을 수 없습니다.</h1>
      <button onClick={() => router.push("/")}>Home</button>
    </div>
  );
}

export default Error404;
