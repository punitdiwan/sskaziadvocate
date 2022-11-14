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
        Revenue Matters Lawyer</h4>
      </div>
      <img
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' overflow='visible' height='100%' viewBox='0 0 24 24' fill='black' stroke='none'%3E%3Cpath d='M24,8v12H0V8H24z M24,4v1H0V4H24z'/%3E%3C/svg%3E"
        alt=""
      />
    </div>
 
    <div class="civil">  
        <div class="civil-row">
            <div class="civil-col civil-col-1">
                <p>Advocate S.S. KAZI & Associates being one of the top law firms provides a complete Legal Services and expert counselor for Revenue matters in Mumbai. We are the best Revenue Matters Lawyers in mumbai</p>
                <ul>
                <li>Revenue Matters is squarely focused on growing asset value for client properties through an "Integrated Revenue Strategy.
                    </li>
                    <li>Partition matters in Land revenue</li>
                    <li>All matters relating to levy and collection of Indirect Taxes. </li>
                    <li>Investigation into economic offences and enforcement of economic laws.</li>
                    <li>Legal documentation.</li>
                    <li>Non-payment of land revenue.</li>
                    <li>Land ceilings, tenancy laws.</li>
                    <li>Agriculturists and peasants disputes.</li>
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