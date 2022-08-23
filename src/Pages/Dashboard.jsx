import React from 'react'
import SideBar from '../Components/SideBar'

export default function Dashboard() {
  return (
    <div className='dashboard'>
        <SideBar />
        <div className='dashboard-container' >
            <div className="dashboard-title">
              <h1>Welcome on TKT dashboard!</h1>
            </div>
            <div className="dashboard-select">

            </div>
            <div className="dashboard-company">
              <div className="dashboard-company__title">
                <h3>COMPANY</h3>
                <h3>N° SIREN</h3>
                <h3>CATEGORY</h3>
              </div>
            </div>
            <div className="dashboard-company__table">

            </div>
        </div>
    </div>
  )
}
