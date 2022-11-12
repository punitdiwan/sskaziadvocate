import React, { useState } from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  const[show,setShow] = useState(true)
  const[down,setDown] = useState(true)
  return (
    <>
      {/* <!-- -----------address-bar------------- --> */}

      <div className="address">
        <div className="address-row">
          <div className="address-col-left">
            <div className="col-left">
              <a href="">
                <span>
                  <i className="fa-solid fa-phone-flip"></i>
                </span>
                <span>+91 98909-03544</span>
              </a>
            </div>
            <div className="col-left">
              <a href="">
                <span>
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <span>legalfighterk@gmail.com</span>
              </a>
            </div>
            <div className="col-left">
              <span>
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <span>Sinhagad Road,Dhayari,Maharashtra</span>
            </div>
          </div>
          <div className="address-col-right">
            <a href="https://www.facebook.com/shahu.kazi.3">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://twitter.com/advsskazi2/status/1591317421931266051?s=48&t=9AH-0kOh-XOvdb6Jrc2Gmg">
            <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com/watch?v=9TzmxdIU5fE">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* <!-- ---------------Navbar------------------- --> */}

      <div className="navbar-law">
        <div className="navbar-row">
          <div className="navbar-col-l">
            <a href="/">
              <img src="img/adv.sskazi-logo.jpeg" alt="" />
            </a>
          </div>
          <i class=" menu-icon fa-solid fa-bars" onClick={()=>setShow(!show)}></i>
          {
            show ? (<div className="navbar-col-r">
          
            <ul>
              <li className="m-top-main">
                <Link to="/">HOME</Link>
              </li>
              <li className="m-top-main">
                <Link to="">
                  OUR SERVICES<i class=" drop-icon fa-solid fa-plus" onClick={()=>setDown(!down)}></i>
                </Link>
               {
                down? ( <div className="dropdown-navbar" >
                <ul >
                  <li>
                    <Link to="/civillitigation">CIVIL MATTERS LAWYER</Link>
                  </li>
                  <li>
                    <Link to="/realestate">
                      REAL ESTATE ACQUISITION LAWYER
                    </Link>
                  </li>
                  <li>
                    <Link to="/property">PROPERTY LAWYER</Link>
                  </li>
                  <li>
                    <Link to="/registration">
                      REGISTRATION & CONVEYANCE LAWYER
                    </Link>
                  </li>
                  <li>
                    <Link to="/revenue">REVENUE LITIGATTION LAWYER</Link>
                  </li>
                </ul>
              </div>) : ""
               }
              </li>
              <li className="m-top-main">
                <Link to="/ourteam">OUR TEAM</Link>
              </li>
              <li className="m-top-main">
                <Link to="/disclamer">DISCLAIMER</Link>
              </li>
              <li className="m-top-main">
                <Link to="/contact">CONTACT</Link>
              </li>
              <li className="consult-bg m-top-main">
                <Link to="/contact">Consult now</Link>
              </li>
            </ul>
          </div>) : ''
          }
        </div>
      </div>


    </>
  );
};

export default Navbar;