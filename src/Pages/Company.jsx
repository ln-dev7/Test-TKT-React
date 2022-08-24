import React from "react";
import { useParams } from "react-router-dom";
import {SideBar, SideBarMobile} from "../Components/SideBar";

export default function Company() {
  const {id} = useParams();
  return (
    <div className="compnay">
      <SideBar />
      <SideBarMobile />
      <div className="compnay-container">

      </div>
    </div>
  );
}
