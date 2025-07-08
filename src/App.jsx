import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ribbion from '../src/assets/types-wrap.png';
import cancertype from '../src/assets/about2.jpg';
import bannerImg from '../src/assets/logo.png';
import sliderImg from '../src/assets/shape-6.png';
import rightarrow from '../src/assets/right-arrow.png';
import doctor3 from '../src/assets/doctor3.jpg';
import cta_img_1 from '../src/assets/cta_img_1.jpg';
import howwework from '../src/assets/medical_solution_4.png';

import MapSection from './MapSection';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>




      {/* Hero Section  */}

      <div className='position_rel'>
        <section className="hero">
          {/* Navbar  */}
          <nav className="navbar navbar-expand-lg fixed-top shadow-sm">
            <div className="container">
              <a className="logo_navbar" href="#">
                {/* <img  src={bannerImg} alt="" className='logo_width' /> */}
                <h2>ONCOBRIDGE</h2>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item"><a className="nav-link" href="#">HOME</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">ABOUT US</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">career </a></li>
                  <li className="nav-item"><a className="nav-link" href="#">terms </a></li>
                   <li className="nav-item"><a className="nav-link" href="#">disclaimers </a></li>
                  <li className="nav-item"><a className="nav-link" href="#">CONTACT US</a></li>

                </ul>
              </div>
            </div>
          </nav>
          <div className="container">
            <div className="general-hospital-slider-content">
              <div className="content">
                <h1 className="title">
                  <b>Transforming Lives,</b> Restoring Your Health
                </h1>

                <p>Embrace a world of comprehensive healthcare where your well-being takes center stage. At Hospa, we're
                  dedicated to providing you with personalized medical services.</p>
                <div className="slider-btn">
                  <a href="https://themes.hibootstrap.com/hospa/about-overview/" className="btn btn-primary btn_brand">
                    <i className="ti ti-circle-arrow-right-filled"></i>
                    Book a Consultation </a>
                </div>
              </div>
              <div className="general-hospital-shape">
                <img src={sliderImg} alt="shape" />

                <ul className="general-hospital-slider-button">
                  <li>
                    <div className="general-hospital-button-prev" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-10fe988cf7de4ac42">
                      <i className="fas fa-arrow-left"></i>
                    </div>
                  </li>
                  <li>
                    <div className="general-hospital-button-next" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-10fe988cf7de4ac42">
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* why choose  */}
      <section id="whychoose" className="py-5">
        <div className="container text-center cancer-types-content">
          <h3 className='whychoose_title'>WHY CHOOSE US?</h3>
          <div className="row justify-content-center mb-4">
            <div className="col-lg-3 col-md-12">
              <div className="shape">
                <img src={ribbion} alt="Shape" />
              </div>
            </div>
            <div className="col-lg-9 col-md-12 ">
              <h2><strong>We provide expert care</strong> for various cancers with personalized treatment plans tailored to each patient is needs.</h2>
            </div>
          </div>
          <div className="row  mt-3">
            <div className="col-lg-6 col-md-12 about-style-image">
              <img src={cancertype} alt="Shape" />
              <div className="counter-wrap">
                <div className="item">
                  <div className="d-flex align-items-center justify-content-center">
                    <h3 className="counter">5</h3>
                    <h3 className="sub">K+</h3>
                  </div>
                  <p>PATIENT'S <span>REVIEWS</span></p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 typescancer_p">
              <p className='mt-3'>
                Proactively envisioned multimedia based expertise and cross-media growth strategies.
                Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.
              </p>
              <ul className='types_cancer_list'>
                <li>
                  <span>Breast Cancer</span>
                </li>
                <li>
                  <span>Lung Cancer</span>
                </li>
                <li>
                  <span>Blood Cancer (Leukemia/Lymphoma)</span>
                </li>
                <li>
                  <span>Prostate Cancer</span>
                </li>
                <li>
                  <span>Skin Cancer (Melanoma)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <section id="services" className="py-5">
        <div className="container text-center">
          <h3 className="mb-4 whychoose_title">OUR SERVICES</h3>
          <div className="row justify-content-center mb-4">
            <div className="col-lg-12 col-md-12 ">
              <h2><strong>We provide expert care</strong> for various cancers with personalized treatment plans tailored to each patient is needs.</h2>
            </div>
          </div>
          <div className="row g-4 mt-3 mb-3">
            <div className="col-md-3 ">
              <div className="card h-100 d-flex flex-column border-none">
                <div className="card-body border_radius flex-grow-1 colur_card1 ">
                  <div className="badge-number">
                    <a href="">
                      <i className="fa-solid fa-arrow-right card_arrow"></i>
                    </a>
                  </div>
                  <div className="service-icon mb-2">🧬</div>
                  <h5>24/7 service</h5>
                  <p>Precision cancer treatment using advanced radiation technologies.</p>

                  {/* <div className=" ">
                    <div className="service-icon mb-2">🧬</div>
                    <h5>24/7 service</h5>
                    <p>Precision cancer treatment using advanced radiation technologies.</p>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="card h-100 d-flex flex-column border-none">
                <div className="card-body border_radius flex-grow-1 colur_card1 ">
                  <div className="badge-number">
                    <a href="">
                      <i className="fa-solid fa-arrow-right card_arrow"></i>
                    </a>
                  </div>
                  <div className="service-icon mb-2">🧬</div>
                  <h5>Radiation Therapy</h5>
                  <p>Precision cancer treatment using advanced radiation technologies.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="card h-100 d-flex flex-column border-none">
                <div className="card-body border_radius flex-grow-1 colur_card1 ">
                  <div className="badge-number">
                    <a href="">
                      <i className="fa-solid fa-arrow-right card_arrow"></i>
                    </a>
                  </div>
                  <div className="service-icon mb-2">💉</div>
                  <h5>Chemotherapy</h5>
                  <p>Targeted drug treatments to destroy cancer cells effectively.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="card h-100 d-flex flex-column border-none">
                <div className="card-body border_radius flex-grow-1 colur_card1 ">
                  <div className="badge-number">
                    <a href="">
                      <i className="fa-solid fa-arrow-right card_arrow"></i>
                    </a>
                  </div>
                  <div className="service-icon mb-2">🔬</div>
                  <h5>Clinical Trials</h5>
                  <p>Access to cutting-edge research and experimental treatments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-5">
        <div className="container text-center">
          <h3 className="mb-4 whychoose_title">MEET OUR EXPERTS</h3>
          <h2><strong>We provide expert care</strong> for various cancers with personalized treatment plans tailored to each patient is needs.</h2>

          <div className="row g-4 mt-3 mb-3">
            <div className="col-md-6 col-sm-2 col-lg-3">
              <div className="doctor-card">
                <div className="doctor-image">
                  <a href="">
                    <img decoding="async" src={doctor3} alt="" />
                  </a>
                  <div className="doctor-btn">
                    <a href="https://themes.hibootstrap.com/hospa/book-an-appointment/" className="default-btn">
                      <i className="fa-solid fa-arrow-right"></i>
                      Book An Appointment  </a>
                  </div>
                </div>
                <div className="doctor-content">
                  <h3>
                    <a href="https://themes.hibootstrap.com/hospa/doctors-post/dr-walter-white/">Dr. Walter White</a>
                  </h3>
                  <span>Head of Cardiology Department</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-2 col-lg-3">
              <div className="doctor-card">
                <div className="doctor-image">
                  <a href="">
                    <img decoding="async" src={doctor3} alt="" />
                  </a>
                  <div className="doctor-btn">
                    <a href="https://themes.hibootstrap.com/hospa/book-an-appointment/" className="default-btn">
                      <i className="fa-solid fa-arrow-right"></i>
                      Book An Appointment  </a>
                  </div>
                </div>
                <div className="doctor-content">
                  <h3>
                    <a href="https://themes.hibootstrap.com/hospa/doctors-post/dr-walter-white/">Dr. Walter White</a>
                  </h3>
                  <span>Head of Cardiology Department</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-2 col-lg-3">
              <div className="doctor-card">
                <div className="doctor-image">
                  <a href="">
                    <img decoding="async" src={doctor3} alt="" />
                  </a>
                  <div className="doctor-btn">
                    <a href="https://themes.hibootstrap.com/hospa/book-an-appointment/" className="default-btn">
                      <i className="fa-solid fa-arrow-right"></i>
                      Book An Appointment  </a>
                  </div>
                </div>
                <div className="doctor-content">
                  <h3>
                    <a href="https://themes.hibootstrap.com/hospa/doctors-post/dr-walter-white/">Dr. Walter White</a>
                  </h3>
                  <span>Head of Cardiology Department</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-2 col-lg-3">
              <div className="doctor-card">
                <div className="doctor-image">
                  <a href="">
                    <img decoding="async" src={doctor3} alt="" />
                  </a>
                  <div className="doctor-btn">
                    <a href="https://themes.hibootstrap.com/hospa/book-an-appointment/" className="default-btn">
                      <i className="fa-solid fa-arrow-right"></i>
                      Book An Appointment  </a>
                  </div>
                </div>
                <div className="doctor-content">
                  <h3>
                    <a href="https://themes.hibootstrap.com/hospa/doctors-post/dr-walter-white/">Dr. Walter White</a>
                  </h3>
                  <span>Head of Cardiology Department</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* booking  */}

      <section className="team-banner d-flex align-items-center py-4">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-2">
              <img src={cta_img_1} alt="Doctor" className="img-fluid booking_img" />
            </div>



            <div className="col-md-7 text-wrapper px-4">
              <h4 className="fw-bold">Meet The Team Support Medical Service.</h4>
              <p className="mb-0">For us, there are no minor aspects, because a quality</p>
            </div>

            <div className="col-md-3 text-end pe-5 booking_btn_block">
              <a href="#" className="btn btn-light text-primary shadow-sm">Booking Now &nbsp;&rarr;</a>
            </div>
          </div>
        </div>
        <div className="rings-container">
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>
        </div>
      </section>
      {/* download app */}
      <section id="downloadapp" className="py-5">
        <div className="container">

          <div className="row justify-content-center align-items-center">
            <div className="col-xl-7 col-md-12  col-sm-6">
              <div className="mobile-app-image">
                <img decoding="async" src="https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/04/mobile-app.jpg" alt="image" />
              </div>
            </div>

            <div className="col-xl-5 col-md-12 col-sm-6">
              <div className="mobile-app-content">
                <span className="sub">
                  DOWNLOAD APP                                    </span>
                <h2>Download Our Mobile App For The <b>Best Experience</b></h2>

                <div className="info">
                  <img decoding="async" src="https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/04/user.png" alt="user" />

                  <div className="title">
                    <h5>500+ DOCTORS</h5>
                    <span>are available in the app</span>
                  </div>
                </div>

                <ul className="app-btn">
                  <li>
                    <a href="#" target="_blank">
                      <div className="icon">
                        <i className="fa-brands fa-google-play"></i>
                      </div>
                    </a>

                    <div className="title">
                      <a href="#" target="_blank">
                        <span>GET IT ON</span>
                        <h5>Google Play</h5>
                      </a>
                    </div>
                  </li>

                  <li>
                    <a href="#" target="_blank">
                      <div className="icon">
                        <i className="fa-brands fa-apple"></i>
                      </div>
                    </a>

                    <div className="title">
                      <a href="#" target="_blank">
                        <span>GET IT ON</span>
                        <h5>Apple Store</h5>
                      </a>
                    </div>

                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container">
          <h2 className="text-center mb-4">Contact Us</h2>
          <form className="row g-3">
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Full Name" required />
            </div>
            <div className="col-md-6">
              <input type="email" className="form-control" placeholder="Email Address" required />
            </div>
            <div className="col-12">
              <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-primary px-4">Send Message</button>
            </div>
          </form>
        </div> */}
      </section>
      {/* how we work  */}
<section className="py-5">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6">
        <h3 class="mb-4 whychoose_title">HOW WE WORK</h3>
        <p className="mb-4">
          We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, software, and brands, feel safe and comfortable in establishing.
        </p>

        <div className="feature-item">
          <div className="feature-icon">
            <i className="fa-solid fa-pills"></i>
          </div>
          <h6 className="mb-0">Teblet This Medical Dental Care</h6>
        </div>

        <div className="feature-item">
          <div className="feature-icon">
            <i className="fa-solid fa-shield-virus"></i>
          </div>
          <h6 className="mb-0">Expert This Medical Dental Care</h6>
        </div>

        <div className="feature-item">
          <div className="feature-icon">
            <i className="fa-solid fa-shield-halved"></i>
          </div>
          <h6 className="mb-0">Infection Prevention Medical Dental</h6>
        </div>

        <div className="feature-item">
          <div className="feature-icon">
            <i className="fa-solid fa-file-medical"></i>
          </div>
          <h6 className="mb-0">Preventive Care Medical Dental</h6>
        </div>
      </div>

      <div className="col-md-6 mt-4 mt-md-0">
        <div className="feature-image-container">
          <img src={howwework} className="img-main" alt="Main" />
        </div>
      </div>
    </div>
  </div>
</section>
      {/* testimonial  */}
      <section className="testimonial-wrapper">

        <img src="https://randomuser.me/api/portraits/women/44.jpg" className="floating-img floating-img-1" alt="" />
        <img src="https://randomuser.me/api/portraits/men/32.jpg" className="floating-img floating-img-2" alt="" />
        <img src="https://randomuser.me/api/portraits/women/48.jpg" className="floating-img floating-img-3" alt="" />
        <img src="https://randomuser.me/api/portraits/men/35.jpg" className="floating-img floating-img-4" alt="" />

        <div className="container">
          <h2 className="fw-bold mb-4">Patients who love their <span className="text-brand">Smiles</span></h2>


          <div className="d-flex justify-content-center mb-3 position-relative">
            <div>
              <img src="https://randomuser.me/api/portraits/men/45.jpg" className="testimonial-center-avatar" alt="Main Reviewer" />
              {/* <span className="rating-badge">99</span> */}
            </div>
          </div>
          <blockquote className="blockquote fs-5 fw-light mb-3">
            "Hospa Dental Clinic exceeded all my expectations! The staff is incredibly kind and professional, and they made me feel at ease throughout my treatment. I couldn't be happier with my new smile—it's truly life-changing!"
          </blockquote>
          <footer className="blockquote-footer mt-2">
            <strong>Willie Fuentes</strong><br />
            <small className="text-muted">Co Founder</small>
          </footer>


          <div className="d-flex justify-content-center gap-4 mt-4">
            <div className="rounded-circle border testi_arrow" >
              &#8592;
            </div>
            <div className="rounded-circle border testi_arrow" >
              &#8594;
            </div>
          </div>
        </div>
      </section>

      {/* contact form  */}
      <section className="contact-section text-white">
        <div className="container py-5">
          <h2 className="mb-4 text-center">
            <span className="text-brand">We'd love to hear from you</span><br />
            <strong className="text-brand">Contact Us</strong>
          </h2>

          <div className="row justify-content-center">
            <div className="col-md-8">
              <form className="bg-white p-4 rounded shadow text-dark">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" placeholder="Your name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Your email" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="4" placeholder="Type your message"></textarea>
                </div>
                <button type="submit" className="btn btn-brand px-4">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* map  */}
      <section>
        <div className="container-fluid p-0">
          {/* <!-- Top Section: Map + Info --> */}
          <div className="row g-0">


            {/* <!-- Right Panel (Map) --> */}
            <div className="col-lg-12 position-relative">
              {/* <!-- Left Panel --> */}
              <div className="col-lg-4 bg-white p-4 map_section">
                <h1>ONCOBRIDGE</h1>

                <div className="mb-4">
                  <strong>MON – WED</strong><br /> 9AM – 7PM<br />
                  <strong>THU</strong><br /> 8AM – 5PM<br />
                  <strong>FRI</strong><br /> 8AM – 5PM<br />
                  <strong>SAT – SUN</strong><br /> Closed
                </div>

                <div className="mb-4">
                  <h6><i className="bi bi-phone"></i> CALL US ANYTIME</h6>
                  <p>0-800-2336-7820</p>
                </div>

                <div className="mb-4">
                  <h6><i className="bi bi-geo-alt"></i> VISIT US ANYTIME</h6>
                  <p>27th Avenue<br />New York, W2 3XE, US</p>
                </div>
              </div>
              <MapSection />
            </div>
          </div>

          {/* <!-- Footer --> */}
          <footer className="bg-brand text-black mt-0 py-4">
            <div className="container">
              <div className="row">
                {/* <!-- Footer Links --> */}
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-3"><h6>About us</h6><ul className="list-unstyled"><li>Information</li><li>Team</li><li>Doctors profile</li></ul></div>
                    <div className="col-md-3"><h6>Pages</h6><ul className="list-unstyled"><li>Services</li><li>Departments</li><li>Location</li></ul></div>
                    <div className="col-md-3"><h6>Latest News</h6><ul className="list-unstyled"><li>Blog tiles</li><li>Classic</li><li>Columns view</li></ul></div>
                    <div className="col-md-3"><h6>Shop</h6><ul className="list-unstyled"><li>Products</li><li>Cart</li><li>Checkout</li></ul></div>
                  </div>
                </div>

                {/* <!-- Contact & Social --> */}
                <div className="col-md-4 text-end">
                  <div className="mb-2">
                    <p>Visit us on social networks:</p>
                    <a href="#" className=''>
                      <i className="fa-brands fa-facebook text-black me-2"></i>
                    </a>
                    <a href="#" className=''>
                      <i className="fa-brands fa-twitter text-black me-2"></i>
                    </a>
                    <a href="#" className=''>
                      <i className="fa-brands fa-linkedin text-black"></i>
                    </a>

                  </div>
                  <h4 className="text-brand fw-bold">0-800-777-2331</h4>
                  <p className="small">Call us now if you are in a medical emergency need, we will reply swiftly and provide you with a medical aid.</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </section>
      {/* Footer  */}
      <footer className="footer mt-3 text-center">
        <div className="container">
          <p>&copy; 2025 ONCOBRIDGE. All rights reserved.</p>
        </div>
      </footer>

    </>
  )
}

export default App
