import React, { useState } from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  const[show,setShow] = useState(false);
  const[down,setDown] = useState(false);
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
              <i class="fa-solid fa-city"></i>
              </span>
              <span>Advocate S S Kazi @ legalfighter</span>
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

       {/* <!-- ----------Navbar-2------------- --> */}

       <div className="navbar-law mobile-sc">
        <div className="navbar-row">
          <div className="navbar-col-l">
            <a href="/">
              <img src="img/adv.sskazi-logo.jpeg" alt="" />
            </a>
          </div>     
          
          <button onClick={()=>setShow(!show)} className="menu-icon"> {show ? <i className="fa-solid fa-times"></i> : <i className="menu-icon fa-solid fa-bars"></i>}
          </button>
          <div className={show ? "navbar-col-mobile" : "navbar-col-r"}>  
            <ul  >
              <li onClick={()=>setShow(!show)}>
                <Link to="/">HOME</Link>
              </li>
              <li onClick={()=>setDown(!down)}>
          
                <Link to="">
                  OUR SERVICES <button className="drop-icon" onClick={()=>setDown(!down)}
                 >{down ? <i class=" drop-icon fa-solid fa-minus"></i> :<i class=" drop-icon fa-solid fa-plus"></i>}</button>
                </Link>
               {
                down? ( <div className="dropdown-navbar" >
               <div className="drop-row">
                  <div className="drop-col-1">
                    <ul onClick={()=>setShow(!show)} >
                  <li>
                    <Link to="/constitutional">CONSTITUTIONAL MATTERS LAWYER</Link>
                  </li>
                  <li>
                    <Link to="/civilmatters">
                    CIVIL MATTERS LAWYER
                    </Link>
                  </li>
                  <li>
                    <Link to="/criminal">CRIMINAL MATTERS LAWYER</Link>
                  </li>
                  <li>
                    <Link to="/legaldraft">ALL KIND OF LEGAL DRAFT LAWYER</Link>
                  </li>
                 
                  <li>
                    <Link to="/revenue">REVENUE MATTERS LAWYER</Link>
                  </li>
                </ul></div>
                <div className="drop-col-2">
                  <ul onClick={()=>setShow(!show)} >
                  <li>
                    <Link to="/arbitration">ARBITRATION MATTERS LAWYER</Link>
                  </li>
                  <li>
                    <Link to="/landlaw">
                     LAND LAW MATTERS LAWYER
                    </Link>
                  </li>
                  <li>
                    <Link to="/services">
                    SERVICE MATTER LAWYER
                    </Link>
                  </li>
                 
                  <li>
                    <Link to="/publictrust">
                    PUBLIC TRUST MATTER LAWYER
                    </Link>
                  </li>
                  <li>
                    <Link to="/moreservices">MORE SERVICES...</Link>
                  </li>
                </ul></div>
                </div>
              </div>) : ""
               }
              </li>
              <li   onClick={()=>setDown(!down)}>
                <Link to="/ourteam">OUR TEAM</Link>
              </li>
              <li   onClick={()=>setDown(!down)}>
                <Link to="/disclamer">DISCLAIMER</Link>
              </li>
              <li   onClick={()=>setDown(!down)}>
                <Link to="/contact">CONTACT</Link>
              </li>
              <li className="consult-bg"  onClick={()=>setDown(!down)}>
                <Link to="/contact">Consult now</Link>
              </li>
            </ul>
          </div>
          
        </div>
      </div>




      <div className="navbar-law pc-sc" >
        <div className="navbar-row">
          <div className="navbar-col-l">
            <a href="/">
              <img src="img/adv.sskazi-logo.jpeg" alt="" />
            </a>
          </div>     
        
          <div className= "navbar-col-r">  
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li onClick={()=>setDown(!down)}>
                <Link to="">
                  OUR SERVICES<button className="drop-icon-pc" onClick={()=>setDown(!down)}
                 >{down ? <i class=" drop-icon fa-solid fa-minus"></i> :<i class=" drop-icon fa-solid fa-plus"></i>}</button>
                </Link>
               {
                down? ( <div className="dropdown-navbar" >
                <div className="drop-row">
                  <div className="drop-col-1"><ul >
                  <li>
                    <Link to="/constitutional">CONSTITUTIONAL MATTERS LAWYER</Link>
                  </li>
                  <li>
                    <Link to="/civilmatters">
                    CIVIL MATTERS LAWYER
                    </Link>
                  </li>
                  <li>
                    <Link to="/criminal">CRIMINAL MATTERS LAWYER</Link>
                  </li>
                  <li>
                    <Link to="/legaldraft">ALL KIND OF LEGAL DRAFT LAWYER</Link>
                  </li>
                 
                  <li>
                    <Link to="/revenue">REVENUE MATTERS LAWYER</Link>
                  </li>
                </ul></div>
                <div className="drop-col-2"><ul >
                  <li>
                    <Link to="/arbitration">ARBITRATION MATTERS LAWYER</Link>
                  </li>
                  <li>
                    <Link to="/landlaw">
                     LAND LAW MATTERS LAWYER
                    </Link>
                  </li>
                  <li>
                    <Link to="/services">
                    SERVICE MATTER LAWYER
                    </Link>
                  </li>
                 
                  <li>
                    <Link to="/publictrust">
                    PUBLIC TRUST MATTER LAWYER
                    </Link>
                  </li>
                  <li>
                    <Link to="/moreservices">MORE SERVICES...</Link>
                  </li>
                </ul></div>
                </div>
              </div>) : ""
               }
              </li>
              <li>
                <Link to="/ourteam">OUR TEAM</Link>
              </li>
              <li>
                <Link to="/disclamer">DISCLAIMER</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
              <li className="consult-bg m-top-main">
                <Link to="/contact">Consult now</Link>
              </li>
            </ul>
          </div>
          
        </div>
      </div>


    </>
  );
};

export default Navbar;
