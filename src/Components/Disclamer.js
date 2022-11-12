import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';

const Disclamer = () => {
  return (
    <>
      <Navbar/>
  <div class="disclamer">
  <div class="disclamer-row">
   <img src="https://advganeshraykar.com/wp-content/uploads/2022/01/disclaimer.jpg" alt="" />
  <p>In accordance with the Bar Council of India regulations, law firms in India are not allowed to advertise or solicit work. By entering in the website, you expressly acknowledge having read, understood and accepted the Terms & Conditions enumerated below.</p>

  <ul>
    <li>There has been no advertisement, invitation, solicitation or inducement of any sort whatsoever by the firm or the advocates and staff who are a part of the firm.</li>
    <li>Access to our website is being provided only upon your specific request.</li>
    <li>Access to our website is being granted only for the limited purpose of gaining information regarding the firm including areas of practice, advocate profiles, contact information and office address.</li>
    <li>Acceptance of these terms and conditions by the user does not create any sort of binding professional relationship.</li>
    <li>The firm and or the advocates and staff who are a part of the firm are neither liable for any action taken by the user by relying on the material and information provided on this website nor are they responsible for any loss or liability arising in consequence thereof.</li>
    <li>User shall seek independent legal advice if any legal issue arises.</li>
    <li>This is not an Advertisement</li>
  </ul>
  </div>
  </div>
    <Footer/>
    </>
  )
}

export default Disclamer ;