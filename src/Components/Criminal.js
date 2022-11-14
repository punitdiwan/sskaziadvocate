import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Criminal = () => {
  return (
    <>
        <Navbar/>
    <div class="pracice-head">
      <div class="pra-row">
        <h4>Criminal Matters  Lawyer</h4>
       </div>
      <img
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' overflow='visible' height='100%' viewBox='0 0 24 24' fill='black' stroke='none'%3E%3Cpath d='M24,8v12H0V8H24z M24,4v1H0V4H24z'/%3E%3C/svg%3E"
        alt=""
      />
    </div>

    
    <div class="civil">
        <p>Advocate S.S. KAZI & Associates is a Criminal Matters Lawyers law firm in mumbai,with a focus on Criminal matters with a young and well-qualified team of lawyers who have acquired expertise in various areas of law. We are Criminal Matters lawyers in mumbai</p>
        <div class="civil-row">
            <div class="civil-col">
                <p>We provide Criminal Matters  services for:</p>
                <ul>
                    <li>Quashing of FIR, Charge Sheet,& proceeding.</li>
                    <li>Anticipatory bail,</li>
                    <li>Regular bail </li>
                    <li>Appeal against conviction & acquittal.</li>
                    <li>All kind of criminal writ petitions, Revisions ,Public interest litigation, contempt petition , Domestic violence, Maintenance etc.</li>
                    
                </ul>
            </div>
            <div class="civil-col civil-col-3">
                <img src="https://jotwani.com/wp-content/uploads/2021/06/General-Criminal-Law-1.png" alt="" />
            </div>
        </div>
    </div>

    <Footer/>
      
    </>
  )
}

export default Criminal
