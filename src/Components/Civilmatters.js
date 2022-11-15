import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

const Civilmatters = () => {
  return (
    <> 
    <Navbar/>
    <div class="pracice-head">
      <div class="pra-row">
        <h4>Civil matters Lawyer</h4>
      </div>
      <img
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' overflow='visible' height='100%' viewBox='0 0 24 24' fill='black' stroke='none'%3E%3Cpath d='M24,8v12H0V8H24z M24,4v1H0V4H24z'/%3E%3C/svg%3E"
        alt=""
      />
    </div>

     
    <div class="civil">
        <p>Advocate S.S. KAZI & Associates is a Civil Matters Lawyers law firm in Aurangabad,with a focus on civil and corporate matters with a young and well-qualified team of lawyers who have acquired expertise in various areas of law. We are Civil Matters lawyers in Aurangabad,Maharashtra.</p>
        <div class="civil-row">
            <div class="civil-col">
                <p>Civil matters seeking injunctive relief will be scheduled on a priority basis, consistent with Civil Rule 65, and as soon as practicable whether or not a temporary restraining order has issued.</p>
                <ul>
                    <li>personal injury. </li>
                    <li>medical malpractice, torts.
                    </li>
                    <li>Probate, Partition suits</li>
                    <li>traffic court, bankruptcy, adoption.</li>
                    <li>family court, business issues, and many others.</li>
                    <li>Landlord & Tenant disputes</li>
                </ul>
            </div>
            <div class="civil-col civil-col-3">
                <img src="https://blog.ipleaders.in/wp-content/uploads/2022/06/Civil-law-1.jpg" alt="" />
            </div>
        </div>
    </div>

    <Footer/>
    </>
  )
}

export default Civilmatters;