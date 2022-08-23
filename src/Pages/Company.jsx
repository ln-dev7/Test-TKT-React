import React from "react";
import { useParams } from "react-router-dom";
import SideBar from "../Components/SideBar";

export default function Company() {
  const {id} = useParams();
  return (
    <div className="compnay">
      <SideBar />
      <div className="compnay-container">
        
      </div>
    </div>
  );
}
