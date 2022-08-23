import React, { useEffect, useState } from "react";
import SideBar from "../Components/SideBar";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const urlBiz = "https://test.wertkt.com/api/biz/";
  const urlResult = "https://test.wertkt.com/api/result/";

  useEffect(() => {
    fetch(urlBiz)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // useEffect(() => {
  //   fetch(urlResult)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className="dashboard">
      <SideBar />
      <div className="dashboard-container">
        <div className="dashboard-title">
          <h1>Welcome on TKT dashboard!</h1>
        </div>
        <div className="dashboard-select">
          <select name="sector" id="sector">
            <option value="Sector">Sector *</option>
            {}
          </select>
          <select name="company" id="company">
            <option value="company">Company *</option>
            {}
          </select>
        </div>
        <div className="dashboard-company">
          <div className="dashboard-company__title">
            <h3>COMPANY</h3>
            <h3>N° SIREN</h3>
            <h3>CATEGORY</h3>
          </div>
        </div>
        <div className="dashboard-company__table">
          {loading && (
            <div id="loading-container">
              <div id="loading"></div>
            </div>
          )}
          {data.map((item) => {
            return (
              <div className="dashboard-company__table-item">
                <h3>{item.name}</h3>
                <h3>{item.siren}</h3>
                <h3>{item.category}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
