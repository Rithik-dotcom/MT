import React from 'react'
import './Sectionone.style.css'
import heroImage from '../../Media_assets/potrait/9dZtnPulRnGJAu_Kfi1j3w.png'



const Sectionone = () => {
  



    return (
        <div className='custom-spacing '>
          
            <section class="px-4 mt-4 mb-4 ">

                <div class="hero-img">
                    <div class="container px-4 px-lg-0 ">
                        {/* <!-- Hero Section --> */}
                        <div class="row align-items-center">
                            <div class=" col-xl-5 col-md-12 py-6 py-xl-0">
                                <p class="h6 mb-2 mt-4 text-body-secondary trusted">
                                    <i class="bi bi-check-circle-fill text-success"></i>    Most trusted Expertise platform
                                </p>
                                <div class="mb-4 text-center text-xl-start px-md-8 px-lg-19 px-xl-0">
                                    {/* <!-- Caption --> */}
                                    <h3 class="display-5 fw-bold mb-3 ls-sm ">
                                        <span class="" style={{ color: "#754ffe" }}>ManavTech</span>, Modern
                                        Learning Management.
                                    </h3>
                                    <p class="mb-6 lead pe-lg-6 pb-4 pt-4 para-color">
                                    Fast-Track Your Success: Master Coding Techniques in Record Time
                                    </p>
                                    {/* <!-- List --> */}
                                    <div className="ms-auto mt-2 mt-lg-0  pt-2">

                                         <a href="https://bit.ly/geeksui" className="btn btn-primary btn-prime  join-free "> Join Webinar ₹9.00 Only</a>
                                        <a href="/user/dashboard"
                                            class=" ms-3 btn  watch-demo  align-self-center btn-prime  ">
                                            <i class="bi bi-play-circle   "></i>
                                            &nbsp;
                                            Watch Demo
                                        </a>
                                        
                                    </div>
                                    <div class="">
                                        <p>
                                        </p><div class="badge bg-light text-dark me-2"><i class="bi bi-star-fill text-warning me-1"></i>5.0</div>Over <span class="text-dark fw-bold">600+</span> developers used ManavTechnology.
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div class="offset-xl-1 col-xl-6 col-md-12  d-flex justify-content-end">
                                <div  >
                                    <a href="https://geeksui.codescandy.com/geeks/pages/landings/landing-education.html" target="_blank" title="Geeks Education Website Template">
                                        <img src={heroImage} alt="Geeks UI Academy bootstrap 5 Templates" class="img-fluid rounded-3 smooth-shadow-md  image-shadow-main " />
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-lg-12 py-6 mt-4">
                <div class="container">Fast-Track Your Success: Master Coding Techniques in Record Time
                    <div class="row">
                        <div class="col-lg-4 col-12 p-4 mt-4">
                        <a href="/Dipicto" className='p'>   <div class="d-flex">
                               <div class="icon-shape icon-sm bg-light-primary p-4 rounded-3 text-primary icon-design">
                               <i class="bi bi-person-square fs-3 inner-icon"></i>
                                  
                                </div>
                                
                                <div class="mb-4 ms-4 text-center">
                                    <h3 class="mb-2 h4 fw-semibold text-secondary">Build a Strong Portfolio &amp; Network</h3>
                                    <p class="mb-0 text-dark">Develop a portfolio showcasing your projects, coding skills, and expertise in relevant programming languages and technologies. Include personal projects, open-source contributions, or freelance work to demonstrate your abilities to potential employers.</p>
                                </div>
                            </div>
                            </a>
                        </div>

                        <div class="col-lg-4 col-12 p-4 mt-4">
                           <a href="" className='p'> <div class="d-flex">
                                <div class="icon-shape icon-sm bg-light-primary p-4 rounded-3 text-primary icon-design">
                                <i class="bi bi-clock fs-3 inner-icon"></i>
                                </div>
                                <div class="mb-4 ms-4 text-center">
                                    <h3 class="mb-2 h4 fw-semibold text-secondary">Time Management 101: Balancing Learning with Work and Life Demands</h3>
                                    <p class="mb-0 p text-dark">Learn to juggle multiple responsibilities effortlessly with Time Management 101. Discover effective strategies for harmonizing your learning pursuits with work and personal commitments, ensuring productivity, balance, and success in all aspects of life.</p>
                                </div>
                            </div>
                            </a>
                        </div>

                        <div class="col-lg-4 col-12 p-4 mt-4">
                         <a href="" className='p'>   <div class="d-flex">
                                <div class="icon-shape icon-sm bg-light-primary p-4 rounded-3 text-primary icon-design">
                                   
                                    <i class="bi bi-laptop fs-3 inner-icon " ></i>
                                </div>
                                <div class="mb-4 ms-4 text-center">
                                    <h3 class="mb-2 h4 fw-semibold text-secondary">Future-Proof Your Skills</h3>
                                    <p class="mb-0 p text-dark">Stay ahead of industry shifts by embracing continuous learning, honing adaptable skill sets, and embracing emerging technologies to remain relevant in a rapidly evolving job market.</p>
                                </div>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

 
        </div>
    )
}

export default Sectionone