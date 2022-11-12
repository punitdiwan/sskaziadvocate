import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';

const Property = () => {
  return (
    <>
    <Navbar/>

    <div class="propert">
        <img src="https://advganeshraykar.com/wp-content/uploads/elementor/thumbs/execution-of-up-rera-order_qcLUzPE-phxvraa90bxqxx3mnmxhrfazu5wx0wmnh8j7s5bqfc.jpeg" alt="" />
        <img
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' overflow='visible' height='100%' viewBox='0 0 24 24' fill='black' stroke='none'%3E%3Cpath d='M24,8v12H0V8H24z M24,4v1H0V4H24z'/%3E%3C/svg%3E"
        alt="" class="prop-img" />
    </div>


    <div class="legal-adv">
        <div class="legal-row">
            <div class="legal-col">
                <h4>Adv. S.S. KAZI and Associates are Property Lawyer in mumbai
                </h4>
                <ul>
                    <li>Conduct the matters in District and Session Court, Family Court, Co-operative Court, Consumer Court, Competent Authority, Civil Judge
                    Senior Division and Junior Division, J.M.F.C. and Revenue Authorities independently and in association with various Advocates.</li>
                    <li>Conduct the matters of Arbitration Proceedings. Drafting of Legal Notices, Civil Suits, Written Statements, Legal Opinions etc.</li>
                    <li>Drafting of various types of agreements such as Leave and License agreement, Sale Deed, Mortgage Deed, Partnership Deed, Development
                    Agreement, Power of Attorney, Release Deed, Will, Deed of Partition and all various types of conveyancing documents etc.</li>
                </ul>
            </div>
            <div class="legal-col">
                <img src="https://advganeshraykar.com/wp-content/uploads/2021/12/real-estate2-640w.jpg" alt="" />
            </div>
        </div>
    </div>

    <Footer/>
    
    </>
  )
}

export default Property ;