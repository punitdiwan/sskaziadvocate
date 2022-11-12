import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const CivilLitigation  = () => {
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
        <p>Advocate S.S. KAZI & Associates is a Civil matters Lawyers law firm in mumbai,with a focus on civil and corporate matters with a young and well-qualified team of lawyers who have acquired expertise in various areas of law. We are Civil lawyers in mumbai</p>
        <div class="civil-row">
            <div class="civil-col">
                <p>We provide comprehensive drafting, filing and procedural services for:</p>
                <ul>
                    <li>Stay, Declaration & Injunctions</li>
                    <li>Specific Performance suits
                    </li>
                    <li>Probate, Partition suits</li>
                    <li>Sec 138 & Recovery suits</li>
                    <li>Landlord & Tenant disputes</li>
                    <li>Succession & Heir-ship applications </li>
                </ul>
            </div>
            <div class="civil-col">
                <img src="https://advganeshraykar.com/wp-content/uploads/2022/01/civil-litigation.jpg" alt="" />
            </div>
        </div>
    </div>

    <Footer/>
    </>
  )
}

export default CivilLitigation ;