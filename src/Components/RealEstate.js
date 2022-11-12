import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';

const RealEstate = () => {
  return (
    <>
    <Navbar/>
    
    <div class="real-estate">
    <img
    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' overflow='visible' height='100%' viewBox='0 0 24 24' fill='black' stroke='none'%3E%3Cpath d='M24,8v12H0V8H24z M24,4v1H0V4H24z'/%3E%3C/svg%3E"
    alt="" class="bor-img"
  />
  <div class="real-estate-col">
    <h4>Real Estate Acquisition Lawyer</h4>
    <p>Adv S.S. KAZI and Associates is a law firm with a focus on Property Dispute litigation with a young and well-qualified team of lawyers who have acquired expertise in various areas of law.</p>
    <p>We are well known Real Estate Acquisition Lawyers in mumbai 
    </p>

    <img src="https://advganeshraykar.com/wp-content/uploads/elementor/thumbs/REAL-ESTATE-LAWYER-phxtwf1ktmef0k8a48dxvsriidhwg262m9spqigz2g.jpg" alt="" />
  </div>

  <img
  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' overflow='visible' height='100%' viewBox='0 0 24 24' fill='black' stroke='none'%3E%3Cpath d='M24,8v12H0V8H24z M24,4v1H0V4H24z'/%3E%3C/svg%3E"
  alt="" class="bor-img" />
  </div>

<div class="land-law">
  <div class="land-row">
    <div class="land-col">
      <img src="https://advganeshraykar.com/wp-content/uploads/2021/12/Court.png" alt="" />
    </div>
    <div class="land-col">
      <p>We provide Advisory, Regulatory Compliance and Registration services for:</p>
      <ul>
        <li>Land Laws & RERA advisory</li>
        <li>Acquisition of land for industrial projects</li>
        <li>Society Redevelopment projects
        </li>
        <li>Acquiring of MIDC & Government lands
        </li>
        <li>Apartment & Integrated township projects
        </li>
        <li>Title Investigations & updating of Revenue records</li>
        <li>Acquiring NA permissions</li>
        
      </ul>
    </div>
  </div>
</div>

<Footer/>
    
    </>
  )
}

export default RealEstate ;