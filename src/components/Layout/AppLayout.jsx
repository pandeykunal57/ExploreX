import { Outlet } from "react-router-dom";
import { Footers } from "../UI/Footer";
import { Headers } from "../UI/Headers";

export const AppLayout = () => {
  return (
    <>
      <Headers />
      <Outlet />      //component to display page visited
      <Footers />
    </>
  );
};
