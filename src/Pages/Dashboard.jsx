import React, { useEffect, useState } from "react";
import {SideBar, SideBarMobile} from "../Components/SideBar";

export default function Dashboard() {
  const [data, setData] = useState([]);

  const [filterData, setFilterData] = useState([]);

  const [loading, setLoading] = useState(true);

  const urlBiz = "https://test.wertkt.com/api/biz/";
  const urlResult = "https://test.wertkt.com/api/result/";

  useEffect(() => {
    fetch(urlBiz)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilterData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filterBySector = (sector) => {
    if (sector === "") {
      setFilterData(data);
    } else {
      const filterBySectorData = filterData.filter((item) => {
        return item.sector === sector;
      });
      setFilterData(filterBySectorData);
    }
  };

  const filterByName = (name) => {
    if (name === "") {
      setFilterData(data);
    } else {
      const filterByNameData = filterData.filter((item) => {
        return item.name === name;
      });
      setFilterData(filterByNameData);
    }
  };

  return (
    <div className="dashboard">
      <SideBar />
      <SideBarMobile />
      <div className="dashboard-container">
        <div className="dashboard-title">
          <h1>Welcome on TKT dashboard!</h1>
        </div>
        <div className="dashboard-select">
          <select
            name="sector"
            id="sector"
            onChange={(e) => filterBySector(e.target.value)}
          >
            <option value="">Sector *</option>
            {data.map((item, index) => {
              return (
                <option key={index} value={item.sector}>
                  {item.sector}
                </option>
              );
            })}
          </select>
          <select
            name="company"
            id="company"
            onChange={(e) => filterByName(e.target.value)}
          >
            <option value="">Company *</option>
            {data.map((item, index) => {
              return (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              );
            })}
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
          {filterData.map((item) => {
            return (
              <div className="dashboard-company__table-item">
                <h3>{item.name}</h3>
                <h3>{item.siren}</h3>
                <button>{item.sector}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
