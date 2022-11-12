import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';

const Ourteam = () => {
  return (
    <>
    <Navbar/>

    <div className="client">
        <img src="" alt="" />
        <div className="client-row">
          <h1>Our Team Members</h1>
        </div>
      </div>


      <div className="our-team">
        <div className="team-row">
          <div className="team-col">
            <img src="img/Fatema-Shahnawaz-kazi.jpeg" alt="" />
            <h3>Mrs Fatema Kazi Advocate </h3>
            <p>High Court & Family Court Matter’s.</p>
          </div>

          <div className="team-col">
          <img src="img/M-M-Mulla.jpeg" alt="" />
            <h3>Madar Mulla Advocate</h3>
            <p>Wakf Tribunal & wakf board matters</p>
          </div>

          <div className="team-col">
            <img src="img/Moinuddin-Nasiruddin-Shaikh.jpeg" alt="" />
              <h3>Moin Shaikh Advocate </h3>
              <p>for High Court matters </p>
            </div>
        </div>
          </div>

          <div className="our-team-1">
            <div className="team-row">
              <div className="team-col-1">
                <img src="img/A-M-Inamdar.jpeg" alt="" />
                <h3>Akram Inamdar Advocate </h3>
                <p className="team-col-1-p">Advocate for High Court, MRT, Commissioner office, Collector office, Revenue matters ,Wakf board etc.</p>
              </div>
    
              <div className="team-col-1">
              <img src="img/Sevakchand-Babulal-Bakariya.jpeg" alt="" />
                <h3>S B Bakhariya Advocate </h3>
                <p>Arbitration matters</p>
              </div>
    
              <div className="team-col-1">
                <img src="img/Mohammad-Abdul-Majeed.jpeg" alt="" />
                  <h3>Mohammad Abdul Majeed  </h3>
                  <p>(clerk )</p>
                </div>
            </div>
              </div>

  


    <Footer/>      
    </>
  )
}

export default Ourteam ;
