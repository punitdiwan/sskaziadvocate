import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Navbar/>      


{/* <!-- -----------image-slider------------- --> */}

<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active slide-4" data-bs-interval="4000">
    <img
        src="img/slide-1.jpeg"
        className="d-block w-100"
        alt="..."
      />
   
      <div className="img-slide-content">
        <h1>We Are Largest Law Firm Since 1999 at Aurangabad</h1>
        <p>Expert in Criminal matters | Civil matters | Constitutional matters | Arbitration matters | Service Matters </p>
        <Link to="/contact">Contact With Us</Link>
      </div>
    </div>
    <div class="carousel-item slide-4" data-bs-interval="4000">
    <img
        src="img/slide-2.jpeg"
        className="d-block w-100"
        alt="..."
      />
   
      <div className="img-slide-content">
        <h1>Committed Helping Our Clients Succeed</h1>
        <p>WE Are Expert Lawyers in Aurangabad,Maharashtra </p>
        <Link to="/contact">Contact With Us</Link>
      </div>
    </div>
    <div class="carousel-item slide-4"  data-bs-interval="3000">
    <img
        src="img/slide-3.jpeg"
        className="d-block w-100"
        alt="..."
      />
    </div>
    <div class="carousel-item slide-4" data-bs-interval="3000">
    <img
        src="img/slide-4.jpeg"
        className="d-block w-100 "
        alt="..."
      />
    </div>
    <div class="carousel-item slide-4" data-bs-interval="3000">
    <img
        src="img/slide-5.jpeg"
        className="d-block w-100 "
        alt="..."
      />
    </div>
    <div class="carousel-item slide-4" data-bs-interval="3000">
    <img
        src="img/slide-6.jpeg"
        className="d-block w-100 "
        alt="..."
      />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


{/* <!-- -----------court-performance------------ --> */}

<div className="court">
  <div className="court-row">
    <div className="court-col">
      <div><i className="fa-solid fa-user-tie"></i></div>
      <div>
        <h2>Expert Attorneys</h2>
        <p>With extensive high skill</p>
      </div>
    </div>
    <div className="court-col">
      <div><i className="fa-solid fa-gavel"></i></div>
      <div>
        <h2>Case Solved</h2>
        <p>with in few Days</p>
      </div>
    </div>
    <div className="court-col">
      <div><i className="fa-solid fa-scale-unbalanced-flip"></i></div>
      <div>
        <h2>Court Performance</h2>
        <p>Are High then others</p>
      </div>
    </div>
  </div>
</div>



{/* <!-- ---------- Advocate-biodat ------------- --> */}

<div className="advocate">
  <div className="advocate-row">
    <div className="advocate-col">
    <img src="img/mr-kazi.jpeg" alt="" />
    <div className="img-content">
        <h4>Advocate S. S. Kazi</h4>
        <p>B.A. LL.B.</p>
      </div>
      <div className="year-exp">
        <h1>23</h1>
        <p>Years of Experience</p>
      </div>
      
    </div>
    <div className="advocate-col advocate-col-2">
      <h3>About Adv. S. S. Kazi</h3>
      <h1>We Always Fight For Your Justice To Win Case.</h1>
      <p>
      S S Kazi Advocate is the pioneer who established the firm in 1999. 
      He completed SSC from Saint Francis High School at Aurangabad, then completed graduation in Arts from Government Arts & Science college Aurangabad.Then he stood third in order of Merit from Dr Babasaheb Ambedkar Marathwada university Aurangabad LLB in the final year December 1998.
      </p>
      <p>
      He then joined the Chamber/Office of renowned Advocate K. G.Khader and started to appear in the High Court at Aurangabad.
      </p>
      <p>
      Over this year’s he had developed the work throughout the state of Maharashtra at Bombay High Court, Nagpur bench and Aurangabad bench of Bombay High Court.
      </p>
      <p>With the devotion towards work now he is appearing regularly in Supreme Court of India and is  a member of the Supreme Court bar association also.</p>

      <div className="oursupport">
        <div className="support-row">
          <div className="support-col">
            <div>
              <i className="fa-solid fa-check"></i>
              <p>Practical Trade Solution</p>
            </div>
            <div>
              <i className="fa-solid fa-check"></i>
              <p>Learn From Our Customer</p>
            </div>
            <div>
              <i className="fa-solid fa-check"></i>
              <p>Professional case study</p>
            </div>
          </div>
          <div className="support-col support-col-2">
            <div>
              <i className="fa-solid fa-check"></i>
              <p>Serving 23 Years</p>
            </div>
            <div>
              <i className="fa-solid fa-check"></i>
              <p>The Largest Law Firm</p>
            </div>
            <div>
              <i className="fa-solid fa-check"></i>
              <p>24X7 Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* <!-- -------------Area of practice---------- --> */}


<section className="area">
  <div className="area-practice">
    <div className="area-content">
      <h3>Our Area of Practice</h3>
      <h2>We are providing best services for the clients for Supreme Court in all types of matters.The matters in Supreme Court are conducted by Advocate S S Kazi in person and has affiliation with senior counsel for appearing in the matter if required.</h2>
      <h2>Basically we are providing all services to the clients specifically in High Court Matter’s at Aurangabad, Nagpur & Bombay.</h2>
    </div>
    <div className="area-row">
      <div className="area-col">
        <img
          src="./img/build.png"
          alt="not load..."
        />
        <h3>Civil Matters  Lawyer</h3>
        <p>
          We are Civil lawyers in Aurangabad. with a focus on civil and corporate litigation. young and well-qualified team of lawyers, expertise in various areas of law.
        </p>
      </div>

      <div className="area-col area-col-1">
        <img
          src="./img/book.png"
          alt="not load..."
        />
        <h3>Constitutional Matters Lawyer</h3>
        <p>
        Advocate S.S. KAZI Focus on Constitutional Matters with a young and well-qualified team of lawyers who have acquired expertise in various areas of law.
        </p>
        <br />
      </div>
      <div className="area-col">
        <img
          src="./img/build.png"
          alt="not load..."
        />
        <h3>Criminal Matters Lawyer</h3>
        <p>
        Advocate S.S. KAZI Focus on Criminal matters with a young and well-qualified team of lawyers who have acquired expertise in various areas of law.
        </p>
      </div>
    </div>
    
    <div className="area-row">
    <div className="area-col">
        <img
          src="./img/build.png"
          alt="not load..."
        />
        <h3>Arbitration Matters Lawyer</h3>
        <p>
          We had an Arbitrator appointed by Chief justice of Bombay High Court and We are the best Arbitration Matters  Lawyers in Aurangabad.
        </p>
      </div>

      <div className="area-col area-col-1">
        <img
          src="./img/book.png"
          alt="not load..."
        />
        <h3>Wakf Property Matters Lawyer</h3>
        <p>
        Advocate S.S. KAZI law firms provides a complete Legal Services and expert counselor for Wakf Property matters in Aurangabad.
        </p>
        <br />
      </div>
      
      <div className="area-col">
        <img
          src="./img/build.png"
          alt="not load..."
        />
        <h3>Services Matters Lawyer</h3>
        <p>
        Advocate S.S. KAZI & Associatesis is a Service Matters  Lawyers law firm in Aurangabad, All matter relating to the conditions of his Service. 
        </p>
      </div>
    </div>
  </div>
</section>

{/* <!-- -------submit call back request----------- --> */}

<div className="protect-right">
  <div className="protect-row">
    <h1>We are Here to Protect your Rights</h1>
    <Link to="/contact">Submit Call Back Request</Link>
  </div>
</div>

{/* <!-- ----------working-process---------- --> */}

<div className="working">
  <div className="working-row">
    <div className="working-col">
      <img
        src="./img/advo.jpeg"
        alt=""
      />
    </div>
    <div className="working-col">
      <div className="wrok-content">
        <h3>Our Basic Working Process</h3>
        <h1>Provide a Great Solutions on your cases</h1>
      </div>
      <div className="reserch-row">
        <div><h1>01.</h1></div>
        <div>
          <h2>We Research whole Case</h2>
          <p>
            We listen to your issues and study in details point to point
          </p>
        </div>
      </div>
      <div className="reserch-row">
        <div><h1>02.</h1></div>
        <div>
          <h2>We Build Beneficial Strategies</h2>
          <p>
            After getting detailed information we work on great Strategies &
            Plan
          </p>
        </div>
      </div>
      <div className="reserch-row">
        <div><h1>03.</h1></div>
        <div>
          <h2>We provide the Positive Result</h2>
          <p>We Provide our client Perfect and Practical Solutions</p>
        </div>
      </div>
    </div>
  </div>
</div>

{/* <!-- ------Our testimonial ---------- --> */}

<div className="client">
  <img src="" alt="" />
  <div className="client-row">
    <h3>Our Testimonials</h3>
    <h1>What our Clients Say</h1>
  </div>
</div>



<div
  id="carouselExampleCaptions"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <section className="testimonials">
        <div className="row">
          <div className="testimonials-col">
            {/* <img src="img/user1.jpg" alt="" /> */}
            <div>
              <p>
              A very Good Lawyer, who is a good listener, explains everthing to our Satisfaction level, Very Professional, Sound Indepth knowledge proves 360 degree Legal Aspects. 	
              </p>
              <h3>Mr. Sameer Shaikh</h3>
            </div>
          </div>
          <div className="testimonials-col">
            {/* <img src="img/user2.jpg" alt="" /> */}
            <div>
              <p>
              He is always prepared to answer your questions, promptly return your calls and keep you updated on the status of your case. Great Experience with  Adv  S.S. KAZI. 
              </p>
              <h3>Mr. Faizyab khan</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className="carousel-item">
      <section className="testimonials">
        <div className="row">
          <div className="testimonials-col">
            {/* <img src="img/user1.jpg" alt="" /> */}
            <div>
              <p>
               
		        The most trust worthy legal adviser n professionally clear vision This office has a group of 3 or 4 lawyers specialist in their fields. They are abreast with the latest trends in court. 		
              </p>
              <h3>Mr. ARK Rehman</h3>
            </div>
          </div>
          <div className="testimonials-col">
            {/* <img src="img/user2.jpg" alt="" /> */}
            <div>
              <p>
                
	       	 If you want to close your case in minimum days, then go to him.
           Timely n clear work.
           Explains all doubts with experienced, need of every one in all civil matters.
           I will always refer him.	
              </p>
              <h3>Mr. Adnan Shaikh</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className="carousel-item">
      <section className="testimonials">
        <div className="row">
          <div className="testimonials-col">
            {/* <img src="img/user1.jpg" alt="" /> */}
            <div>
              <p>
                
		       Adv S.S. KAZI and his team did a great job representing me in property related matter. He is best lawyer for property purchase.One of the best advocate in aurangabad
           Well qualified I highly Recommended Adv S.S. KAZI .
              </p>
              <h3>Mr. Hussain Pathan</h3>
            </div>
          </div>
          <div className="testimonials-col">
            {/* <img src="img/user2.jpg" alt="" /> */}
            <div>
              <p>
                
		            When you seek for legal advice and guidance, Adv S.S. KAZI Sir carefully explain the law as it relates to your case, the legal support available to you and the best course of action to resolve your problem and meet your objective.	 
              </p>
              <h3>Mr. Syed Zahed Ali</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


{/* <!---------------- Contact-us page------------ --> */}

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
          <p>Contact Number : +91 98909-03544 </p>
          <p>Contact Number : +91 72497-77553</p>
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


 {/* <!-- ---------------Footer-----------------> */}
 
<Footer/>

</>
  )
}

export default Home ;