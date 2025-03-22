import { Outlet } from "react-router-dom";

export default function layout() {
  return (
    <>
      <h1>레이아웃 헤더 임시</h1>
      <Outlet />
    </>
  );
}
