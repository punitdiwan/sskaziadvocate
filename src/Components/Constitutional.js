import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Constitutional = () => {
  return (
    <>
      <Navbar />
      <div class="real-estate">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' overflow='visible' height='100%' viewBox='0 0 24 24' fill='black' stroke='none'%3E%3Cpath d='M24,8v12H0V8H24z M24,4v1H0V4H24z'/%3E%3C/svg%3E"
          alt=""
          class="bor-img"
        />
        <div class="real-estate-col">
          <h4>Constitutional Matters Lawyer</h4>
          <p>
            Advocate S.S. KAZI & Associates is a Constitutional Matters Lawyers
            law firm in Aurangabad, with a focus on Matter’s under constitution of
            India, with a young and well-qualified team of lawyers who have
            acquired expertise in various areas of law. We are Constitutional
            Matters lawyers in Aurangabad, Maharashtra. 
          </p>

          <img
            src="https://thelawexpress.com/wp-content/uploads/2021/06/CONSTITUTION-LAW.jpeg"
            alt=""
          />
        </div>

        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' overflow='visible' height='100%' viewBox='0 0 24 24' fill='black' stroke='none'%3E%3Cpath d='M24,8v12H0V8H24z M24,4v1H0V4H24z'/%3E%3C/svg%3E"
          alt=""
          class="bor-img"
        />
      </div>

      <div class="land-law">
        <div class="land-row">
          <div class="land-col">
            <img
              src="./img/advo.jpeg"
              alt=""
            />
          </div>
          <div class="land-col">
            <p>
              Matter’s under constitution of India and procedural services for:
            </p>
            <ul>
              <li>Writ petition for fundamental rights.</li>
              <li>Service matters.</li>
              <li>Educational institutions matters.</li>
              <li>Minority education’s matters.</li>
              <li>Breach of fundamental rights matters.</li>
              <li>
                Writ petitions against interlocutory orders passed by courts.
              </li>
              <li>First Appeals, second Appeals. </li>
              <li>
                Motor Accident claims Appeals,enhancement of compensation in
                Land acquisition matters.
              </li>
              <li>Civil matters relating to property. </li>
              <li>
                Possession,Partitions,Declaration,removal of
                enchantment,property dispute etc.
              </li>
            </ul>
          </div>
        </div>
      </div>

    <Footer />
    </>
  );
};

export default Constitutional;
