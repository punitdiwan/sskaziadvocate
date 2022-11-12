import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';

const Revenue = () => {
  return (
    <>
    <Navbar/>
       <div class="pracice-head">
      <div class="pra-row">
        <h4>
            Revenue Litigation Lawyer</h4>
      </div>
      <img
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' overflow='visible' height='100%' viewBox='0 0 24 24' fill='black' stroke='none'%3E%3Cpath d='M24,8v12H0V8H24z M24,4v1H0V4H24z'/%3E%3C/svg%3E"
        alt=""
      />
    </div>

     
    <div class="civil">
        
        <div class="civil-row">
            <div class="civil-col civil-col-1">
                <p>Advocate S.S. KAZI & Associates being one of the top law firms provides a complete Legal Services and expert counselor for Land Revenue matters in Pune. We are Also knows as Revenue Litigation Lawyer in Mumbai.</p>
                <ul>
                    <li>Partition matters in Land revenue</li>
                    <li>Demarcation of land
                    </li>
                    <li>Matters pertaining to Agricultural Land</li>
                    <li>Litigation services for family lands dispute</li>
                    <li>Legal documentation </li>
                    <li>Due diligence to verify the land title, possession, land use</li>
                    <li>Due diligence for zonal plan verification, legal compliance verification</li>
                    <li>Matters pertaining to Town Planning Act</li>
                </ul>
            </div>
            <div class="civil-col civil-col-2" >
                <img src="https://advganeshraykar.com/wp-content/uploads/2022/01/revenue-litigation-Lawyer.jpeg" alt="" />
            </div>
        </div>
    </div>

    <Footer/>
    
    </>
  )
}

export default Revenue ;