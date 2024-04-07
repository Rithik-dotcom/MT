import React from 'react'
import './Sectionone.style.css'
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
                            <i class="bi bi-check-circle-fill text-success"></i>    Most trusted education platform
                                </p>
                                <div class="mb-4 text-center text-xl-start px-md-8 px-lg-19 px-xl-0">
                                    {/* <!-- Caption --> */}
                                    <h3 class="display-5 fw-bold mb-3 ls-sm ">
                                        <span class="" style={{ color: "#754ffe" }}>ManavTech</span>, Modern
                                        Learning Management.
                                    </h3>
                                    <p class="mb-6 lead pe-lg-6 pb-4 pt-4 para-color">
                                        Suitable for Educational Web, LMS, Training Center,
                                        Courses Hub, Online Course, College, Academy,
                                        University, School.
                                    </p>
                                    {/* <!-- List --> */}
                                    <div className="ms-auto mt-2 mt-lg-0  pt-2">

                                        <a href="https://bit.ly/geeksui" className="btn btn-primary btn-prime  join-free "> Join Free Now</a>
                                        <a href="https://www.youtube.com/watch?v=Nfzi7034Kbg" 
                                        class=" ms-3 btn  watch-demo  align-self-center btn-prime  ">
                                        <i class="bi bi-play-circle   "></i>
                                        &nbsp;
                                    Watch Demo
                                </a>
                                    </div>
                                    <div class="">
                                        <p>
                                        </p><div class="badge bg-light text-dark me-2"><i class="bi bi-star-fill text-warning me-1"></i>5.0</div>Over <span class="text-dark fw-bold">600+</span> developers used GeeksUI.
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div class="offset-xl-1 col-xl-6 col-md-12  d-flex justify-content-end">
                                <div  >
                                    <a href="https://geeksui.codescandy.com/geeks/pages/landings/landing-education.html" target="_blank" title="Geeks Education Website Template">
                                        <img src="https://geeksui.codescandy.com/assets/images/geeks-hero-section.jpg" alt="Geeks UI Academy bootstrap 5 Templates" class="img-fluid rounded-3 smooth-shadow-md  image-shadow-main " />
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-lg-12 py-6 mt-4">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-12 p-4 mt-4">
                            <div class="d-flex">
                                <div class="icon-shape icon-sm bg-light-primary p-4 rounded-3 text-primary icon-design">
                                    <i class="bi bi-grid-1x2 fs-3 inner-icon"></i>
                                </div>
                                <div class="mb-4 ms-4">
                                    <h3 class="mb-2 h4 fw-semibold">6+ Landings &amp; Dashboard</h3>
                                    <p class="mb-0">Hundreds of component examples for all your website needs that meet
                                        accessibility criteria.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-12 p-4 mt-4">
                            <div class="d-flex">
                                <div class="icon-shape icon-sm bg-light-primary p-4 rounded-3 text-primary icon-design">
                                    <i class="bi bi-phone-flip fs-3 inner-icon"></i>
                                </div>
                                <div class="mb-4 ms-4">
                                    <h3 class="mb-2 h4 fw-semibold">Responsive HTML</h3>
                                    <p class="mb-0">Supports all shapes and mobile sizes ergonomically built with the
                                        responsive object syntax.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-12 p-4 mt-4">
                            <div class="d-flex">
                                <div class="icon-shape icon-sm bg-light-primary p-4 rounded-3 text-primary icon-design">
                                    <i class="bi bi-moon-stars fs-3 inner-icon"></i>
                                </div>
                                <div class="mb-4 ms-4">
                                    <h3 class="mb-2 h4 fw-semibold">Light/ Dark Mode</h3>
                                    <p class="mb-0">All components include a dark variant that lets you style your site
                                        differently when dark mode is enabled.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr />
        </div>
    )
}

export default Sectionone