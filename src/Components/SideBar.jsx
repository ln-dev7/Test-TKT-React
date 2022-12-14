import React from "react";
import { NavLink } from "react-router-dom";

export function SideBar() {
  const handleOpen = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("show");
  }
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <svg
        className="sidebar-top__logo"
          width="80"
          height="40"
          viewBox="0 0 80 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 0H9.9813V40C4.46878 40 0 35.5294 0 30.0145V0Z"
            fill="#4E59FF"
          />
          <path
            d="M19.9627 30.0145H9.98145V40H19.9627V30.0145Z"
            fill="#4E59FF"
          />
          <path
            d="M19.9627 10.2957H9.98145V20.2811H19.9627V10.2957Z"
            fill="#4E59FF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M59.8831 0H69.8643V40C64.3518 40 59.8831 35.5294 59.8831 30.0145V0Z"
            fill="#4E59FF"
          />
          <path
            d="M79.8456 30.0145H69.8643V40H79.8456V30.0145Z"
            fill="#4E59FF"
          />
          <path
            d="M79.8456 10.2957H69.8643V20.2811H79.8456V10.2957Z"
            fill="#4E59FF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.9534 0H34.9347V40C29.4222 40 24.9534 35.5294 24.9534 30.0145V0Z"
            fill="#4E59FF"
          />
          <path d="M44.911 20H34.9297V29.9855H44.911V20Z" fill="#4E59FF" />
          <path
            d="M54.8924 29.9855H44.9111V39.9709H54.8924V29.9855Z"
            fill="#4E59FF"
          />
          <path
            d="M54.8924 10.0145H44.9111V20H54.8924V10.0145Z"
            fill="#4E59FF"
          />
        </svg>

        <svg onClick={handleOpen} className="sidebar-top__close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-11.414L9.172 7.757 7.757 9.172 10.586 12l-2.829 2.828 1.415 1.415L12 13.414l2.828 2.829 1.415-1.415L13.414 12l2.829-2.828-1.415-1.415L12 10.586z" fill="rgba(78,89,255,1)"/></svg>
      </div>
      <div className="sidebar-links">
        <NavLink to="/">
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.75 13.3149C3.75 8.75859 7.44365 5.06494 12 5.06494C16.5563 5.06494 20.25 8.75859 20.25 13.3149C20.25 15.5933 19.3274 17.6548 17.8336 19.1486C17.5407 19.4415 17.5407 19.9163 17.8336 20.2092C18.1265 20.5021 18.6014 20.5021 18.8943 20.2092C20.6579 18.4457 21.75 16.0071 21.75 13.3149C21.75 7.93016 17.3848 3.56494 12 3.56494C6.61522 3.56494 2.25 7.93016 2.25 13.3149C2.25 16.0105 3.34488 18.4518 5.11237 20.2159C5.40554 20.5085 5.88042 20.508 6.17303 20.2149C6.46564 19.9217 6.46519 19.4468 6.17201 19.1542C4.67491 17.66 3.75 15.5962 3.75 13.3149ZM16.5303 8.78461C16.8232 9.0775 16.8232 9.55238 16.5303 9.84527L14.4015 11.9741C14.6235 12.3708 14.75 12.8281 14.75 13.3149C14.75 14.8337 13.5188 16.0649 12 16.0649C10.4812 16.0649 9.25 14.8337 9.25 13.3149C9.25 11.7962 10.4812 10.5649 12 10.5649C12.4869 10.5649 12.9442 10.6915 13.3409 10.9134L15.4697 8.78461C15.7626 8.49172 16.2374 8.49172 16.5303 8.78461ZM12 12.0649C11.3096 12.0649 10.75 12.6246 10.75 13.3149C10.75 14.0053 11.3096 14.5649 12 14.5649C12.6904 14.5649 13.25 14.0053 13.25 13.3149C13.25 12.6246 12.6904 12.0649 12 12.0649Z"
                fill="black"
              />
            </svg>
            <span>Dashboard</span>
          </li>
        </NavLink>
        <NavLink to="/notifications">
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.0001 1.25C10.1937 1.25 8.47184 2.01587 7.21026 3.36156C5.95021 4.70561 5.25005 6.51876 5.25005 8.4C5.25005 12.0306 4.52142 14.3109 3.8323 15.6585C3.48701 16.3338 3.14835 16.7814 2.90804 17.052C2.7877 17.1875 2.69148 17.2792 2.63069 17.3332C2.60028 17.3602 2.57869 17.3779 2.56735 17.3869L2.55863 17.3937C2.29755 17.5837 2.18718 17.9199 2.28559 18.2281C2.38485 18.539 2.67373 18.75 3.00005 18.75H21.0001C21.3264 18.75 21.6153 18.539 21.7145 18.2281C21.8129 17.9199 21.7026 17.5837 21.4415 17.3937L21.4328 17.3869C21.4214 17.3779 21.3998 17.3602 21.3694 17.3332C21.3086 17.2792 21.2124 17.1875 21.0921 17.052C20.8518 16.7814 20.5131 16.3338 20.1678 15.6585C19.4787 14.3109 18.7501 12.0306 18.7501 8.4C18.7501 6.51876 18.0499 4.70561 16.7898 3.36156C15.5283 2.01587 13.8065 1.25 12.0001 1.25ZM18.8323 16.3415C19.01 16.689 19.189 16.9905 19.3612 17.25H4.63891C4.81108 16.9905 4.99009 16.689 5.16781 16.3415C5.97869 14.7558 6.75005 12.2361 6.75005 8.4C6.75005 6.88647 7.31417 5.44389 8.30457 4.38747C9.29342 3.33269 10.6239 2.75 12.0001 2.75C13.3762 2.75 14.7067 3.33269 15.6955 4.38747C16.6859 5.44389 17.2501 6.88647 17.2501 8.4C17.2501 12.2361 18.0214 14.7558 18.8323 16.3415ZM10.9186 20.6237C10.7108 20.2654 10.2519 20.1434 9.89357 20.3513C9.53528 20.5591 9.41331 21.018 9.62115 21.3763C9.86289 21.7931 10.2099 22.139 10.6273 22.3794C11.0448 22.6199 11.5181 22.7465 11.9999 22.7465C12.4817 22.7465 12.955 22.6199 13.3725 22.3794C13.7899 22.139 14.1369 21.7931 14.3786 21.3763C14.5865 21.018 14.4645 20.5591 14.1062 20.3513C13.7479 20.1434 13.289 20.2654 13.0811 20.6237C12.9713 20.8131 12.8135 20.9703 12.6238 21.0796C12.434 21.1889 12.2189 21.2465 11.9999 21.2465C11.7809 21.2465 11.5658 21.1889 11.376 21.0796C11.1862 20.9703 11.0285 20.8131 10.9186 20.6237Z"
                fill="black"
              />
            </svg>
            <span>Notifications</span>
          </li>
        </NavLink>
        <NavLink to="/messages">
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C10.3139 21.25 8.73533 20.7996 7.37554 20.013C7.2206 19.9233 7.0387 19.8921 6.86272 19.9248L3.43742 20.5626L4.07515 17.1373C4.10792 16.9613 4.07666 16.7794 3.98703 16.6245C3.20043 15.2647 2.75 13.6861 2.75 12ZM12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 13.8563 1.72113 15.6046 2.55076 17.1298L1.76267 21.3627C1.71742 21.6058 1.79485 21.8555 1.96967 22.0303C2.14449 22.2051 2.39423 22.2826 2.63728 22.2373L6.87016 21.4492C8.39536 22.2789 10.1437 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM10.3446 7.60313C10.0001 7.89541 9.75 8.34102 9.75 9.00001C9.75 9.41422 9.41421 9.75001 9 9.75001C8.58579 9.75001 8.25 9.41422 8.25 9.00001C8.25 7.90898 8.68736 7.04209 9.37414 6.45937C10.0446 5.89048 10.9119 5.625 11.75 5.625C12.5882 5.625 13.4554 5.89049 14.1259 6.45938C14.8126 7.0421 15.25 7.90899 15.25 9.00001C15.25 9.76589 15.0538 10.3495 14.7334 10.8301C14.4642 11.234 14.1143 11.5462 13.839 11.7919L13.839 11.7919L13.8385 11.7923L13.8366 11.794C13.8074 11.8201 13.779 11.8454 13.7517 11.87C13.4445 12.1464 13.213 12.3743 13.0433 12.6741C12.881 12.9609 12.75 13.3616 12.75 13.9999C12.75 14.4142 12.4142 14.7499 12 14.7499C11.5858 14.7499 11.25 14.4142 11.25 13.9999C11.25 13.1383 11.4315 12.4765 11.7379 11.9352C12.037 11.4069 12.4305 11.041 12.7483 10.755L12.8205 10.6901C13.1207 10.4204 13.3276 10.2347 13.4853 9.99803C13.6337 9.77553 13.75 9.48414 13.75 9.00001C13.75 8.34103 13.4999 7.89542 13.1554 7.60314C12.7946 7.29702 12.2868 7.125 11.75 7.125C11.2131 7.125 10.7054 7.29702 10.3446 7.60313ZM12.5117 17.4414C12.8196 17.7185 12.8446 18.1927 12.5675 18.5006L12.5575 18.5117C12.2804 18.8196 11.8062 18.8446 11.4983 18.5675C11.1904 18.2904 11.1654 17.8162 11.4425 17.5083L11.4525 17.4972C11.7296 17.1893 12.2038 17.1643 12.5117 17.4414Z"
                fill="black"
              />
            </svg>
            <span>Messages</span>
          </li>
        </NavLink>
      </div>
      <div className="sidebar-profile">
        <div className="sidebar-profile__avatar">
          <img src="assets/avatar.jpg" alt="avatr" />
        </div>
        <div className="sidebar-profile__infos">
          <h2>Sophie L</h2>
          <h3>sophie.l@gmail.com</h3>
        </div>
      </div>
    </div>
  );
}

export function SideBarMobile() {
  const handleClose = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("show");
  }
  return (
    <div className="sidebarM">
      <div className="sidebarM-logo">
        <svg
          width="40"
          height="22"
          viewBox="0 0 40 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1682_6429)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 0.969788H5.00573V21.0302C2.24114 21.0302 0 18.7881 0 16.0224V0.969788Z"
              fill="#4E59FF"
            />
            <path
              d="M10.0115 16.0224H5.00574V21.0302H10.0115V16.0224Z"
              fill="#4E59FF"
            />
            <path
              d="M10.0115 6.13318H5.00574V11.141H10.0115V6.13318Z"
              fill="#4E59FF"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.0319 0.969788H35.0376V21.0302C32.2731 21.0302 30.0319 18.7881 30.0319 16.0224V0.969788Z"
              fill="#4E59FF"
            />
            <path
              d="M40.0434 16.0224H35.0377V21.0302H40.0434V16.0224Z"
              fill="#4E59FF"
            />
            <path
              d="M40.0434 6.13318H35.0377V11.141H40.0434V6.13318Z"
              fill="#4E59FF"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.5143 0.969788H17.5201V21.0302C14.7555 21.0302 12.5143 18.7881 12.5143 16.0224V0.969788Z"
              fill="#4E59FF"
            />
            <path d="M22.5233 11H17.5176V16.0078H22.5233V11Z" fill="#4E59FF" />
            <path
              d="M27.5291 16.0078H22.5234V21.0156H27.5291V16.0078Z"
              fill="#4E59FF"
            />
            <path
              d="M27.5291 5.99219H22.5234V11H27.5291V5.99219Z"
              fill="#4E59FF"
            />
          </g>
          <defs>
            <clipPath id="clip0_1682_6429">
              <rect
                width="40"
                height="20.0604"
                fill="white"
                transform="translate(0 0.969788)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="sidebarM-menu" onClick={handleClose}>
        <svg
          width="82"
          height="82"
          viewBox="0 0 82 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1682_6441)">
            <rect
              x="20"
              y="14"
              width="42"
              height="42"
              rx="21"
              fill="url(#paint0_linear_1682_6441)"
              shape-rendering="crispEdges"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M31.25 28C31.25 27.5858 31.5858 27.25 32 27.25H40C40.4142 27.25 40.75 27.5858 40.75 28C40.75 28.4142 40.4142 28.75 40 28.75H32C31.5858 28.75 31.25 28.4142 31.25 28ZM31.25 35C31.25 34.5858 31.5858 34.25 32 34.25H45C45.4142 34.25 45.75 34.5858 45.75 35C45.75 35.4142 45.4142 35.75 45 35.75H32C31.5858 35.75 31.25 35.4142 31.25 35ZM32 41.25C31.5858 41.25 31.25 41.5858 31.25 42C31.25 42.4142 31.5858 42.75 32 42.75H50C50.4142 42.75 50.75 42.4142 50.75 42C50.75 41.5858 50.4142 41.25 50 41.25H32Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1682_6441"
              x="0"
              y="0"
              width="82"
              height="82"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="6" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0196078 0 0 0 0 0.215686 0 0 0 0 0.611765 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1682_6441"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1682_6441"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1682_6441"
              x1="41.2734"
              y1="2.12767"
              x2="61.5719"
              y2="61.1184"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#01F2CF" />
              <stop offset="0.0001" stop-color="#99ACFF" />
              <stop offset="1" stop-color="#4E6EFC" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
