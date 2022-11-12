import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
    <Navbar/>

    <div className="client-2">
        <img src="" alt="" />
        <div className="client-row">
          <h1>Contact Us</h1>
        </div>
      </div>


   <div className="contact">
     <div className="contact-row">
     <div className="contact-col-1">
     <div className="contact-col-3">
     <div className="contact-us">
      <i className="fa-solid fa-i fa-user-graduate"></i>
      <h3>Contact Us</h3>
      <h1>Need any Legal Help? Send us a Query
      </h1>
     </div>
        <div className="contact-no">
          <h3>Contact</h3>
          <p>Contact Number - 9890903544 </p>
          <p>Email id -  legalfighterk@gmail.com</p>
        </div>
        <div className="contact-time">
         <h3>Business Hours</h3>
         <p>Monday to Friday 9 to 10 Am & 
            8:30 to 10:30 Pm.</p>
          <p>  Sunday 10 am to 3 pm.</p>
           <p> Saturday closed.</p>
        </div>
    </div>
    </div>

    <div className="contact-col-wi-2">
      <div className="contact-col-2">
        <form>
          <div className="input-row">

            <div className="input-col">
              <div><label for="">YOUR NAME</label></div>
              <input type="text" />
            </div>

            <div className="input-col">
              <div><label for="">YOUR PHONE NO.</label></div>
              <input type="text" />
            </div>
          </div>

          <div className="input-row">
            <div className="input-col">
              <div><label for="">YOUR EMAIL</label></div>
              <input type="text" />
            </div>
            <div className="input-col">
              <div><label for="">YOUR SUBJECT</label></div>
              <input type="text" />
            </div>
          </div>

          <div className="input-col">
            <div><label for="">YOUR MESSAGE</label></div>
            <textarea rows="8"></textarea>
          </div>
          <div className="btn-send">
            <button>SEND MESSAGE</button>
          </div>
        </form>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
    
    </>
  )
}

export default Contact ;