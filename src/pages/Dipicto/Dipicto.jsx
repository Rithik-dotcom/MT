import React from 'react'
import './Dipicto.css'
import heroImage from '../../Media_assets/potrait/9dZtnPulRnGJAu_Kfi1j3w.png'

const Dipicto = () => {

    //for date
    const birthday = new Date();
    const date1 = birthday.getDate();
    const Month1 = birthday.getMonth();
    const year1 = birthday.getFullYear();
    //for payment

    (function () {
        var d = document;
        var x = !d.getElementById('razorpay-embed-btn-js')
        if (x) {
            var s = d.createElement('script'); s.defer = !0; s.id = 'razorpay-embed-btn-js';
            s.src = 'https://cdn.razorpay.com/static/embed_btn/bundle.js';
            d.body.appendChild(s);
        }
        else {
            var rzp = window['__rzp__'];
            rzp && rzp.init && rzp.init()
        }
    })();
    return (
        <div className='Dipicto-main'>
            {/* Group Button */}

        

            {/* Group Button */}


            {/* Dipicto-section-one */}
            <div className='Dipicto-section-one'>
                <p className="h6 mb-2 mt-4 text-body-secondary trusted text-center">
                    <i className="bi bi-check-circle-fill text-success"></i>    Most trusted Expertise platform
                </p>

                <h3 className="display-5 fw-bold mb-3 ls-sm text-center ">
                    <span className="" style={{ color: "#754ffe" }}>ManavTech</span>, Modern
                    Learning Management.
                </h3>
                <p className="mb-6 lead pe-lg-6 pb-4 pt-4 para-color text-center text-secondary">
                    <strong><span className='text-warning'>Join Us </span></strong> Today and <strong><span className='text-warning'>Fast-Track</span></strong> Your Success
                </p>
            </div>
            {/* Dipicto-section-one */}

            {/* Dipicto-section-one-banner-division */}
            <div className='Dipicto-section-one-banner-division'>
                {/* banner */}
                <div className="offset-xl-1 col-xl-6 col-md-12  d-flex justify-content-end Dipicto-section-one-bannerMain">
                    <div  >
                        <a href="https://geeksui.codescandy.com/geeks/pages/landings/landing-education.html" target="_blank" title="Geeks Education Website Template">
                            <img src={heroImage} alt="Geeks UI Academy bootstrap 5 Templates" className="img-fluid rounded-3 smooth-shadow-md  image-shadow-main " />
                        </a>

                    </div>
                </div>
                {/* banner */}
                {/* payment */}
                <div className='join-options container   Dipicto-section-one-payment   '>
                    <div className='row bg-dark rounded-4  py-4 text-center'>
                        <p className='text-danger text-white bg-danger'>Live Webinar Bookings</p>
                        {/* <h3 className='text-white  rounded-3 '>Webinar Bookings</h3> */}

                        <p className='text-white'>{`Date : ${date1}- ${Month1}-${year1}`}</p>
                        <div className='bg-white mx-auto'>
                            <p className='text-dark mt-2  '>FullStack Ecommerce App<div className="razorpay-embed-btn " data-url="https://pages.razorpay.com/pl_O5jFJqIiE1v8Xg/view" data-text="Book Now 7:00PM" data-color="#528FF0" data-size="medium">

                            </div>
                            </p>
                            <p className='text-dark mt-2'>FullStack Fintech App<div className="razorpay-embed-btn" data-url="https://pages.razorpay.com/pl_O5jFJqIiE1v8Xg/view" data-text="Book Now 7:00PM" data-color="#528FF0" data-size="medium">

                            </div>
                            </p>
                        </div>
                    </div>

                </div>
                {/* payment */}
            </div>
            {/* Dipicto-section-one-banner-division */}


            {/* Section Two  */}
            <div className='Dipicto-section-two'>

                {/* portfolio section */}
                <div className="col-lg-8 mx-auto p-4 py-md-5 portfolio" id='portfolio'>
                    <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
                        <a href="/Dipicto" className="d-flex align-items-center text-body-emphasis  text-decoration-none">
                            <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                            <span className="fs-4 text-body-tertiary">Build a Strong Portfolio and Network</span>
                        </a>
                    </header>

                    <main>
                        <h1 className="text-body-emphasis">Crafting a Compelling Portfolio</h1>
                        <p className="fs-5 col-md-8">Share insights on how to curate a portfolio that effectively showcases your skills, expertise, and accomplishments. Provide tips on selecting the right projects to feature, presenting work in a visually appealing manner, and tailoring the portfolio to your target audience.</p>


                        <h1 className="text-body-emphasis">Showcasing Success Stories</h1>
                        <p className="fs-5 col-md-8">Highlight success stories of individuals who have used your program to enhance their portfolios and expand their professional networks. Case studies and testimonials can serve as powerful social proof and inspire potential customers to invest in your program.

                        </p>

                        <h1 className="text-body-emphasis">Networking Strategies</h1>
                        <p className="fs-5 col-md-8">Offer advice on effective networking techniques, both online and offline. Share tips on building meaningful connections, leveraging social media platforms for networking purposes, and attending industry events to expand one's professional circle.</p>


                        <h1 className="text-body-emphasis">Personal Branding</h1>
                        <p className="fs-5 col-md-8">Discuss the importance of personal branding in today's competitive job market. Provide guidance on defining a unique personal brand, creating a consistent online presence across various platforms, and positioning oneself as an expert in their field.</p>



                        <h1 className="text-body-emphasis">Building a Digital Presence</h1>
                        <p className="fs-5 col-md-8">Explore the role of digital platforms such as LinkedIn, GitHub, or Behance in building a professional brand and attracting opportunities. Share strategies for optimizing profiles, engaging with relevant communities, and creating shareable content to enhance visibility.</p>
                        <div className="mb-5">
                        </div>


                    </main>

                </div>
                {/* portfolio section */}



                {/* Time management */}
                <div className="col-lg-8 mx-auto p-4 py-md-5 time-management" id='time-management'>
                    <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
                        <a href="/" className="d-flex align-items-center text-body-emphasis text-decoration-none">
                            <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                            <span className="fs-4 text-body-tertiary">Time Management 101: Balancing Learning with Work and Life Demands</span>
                        </a>
                    </header>

                    <main>
                        <h1 className="text-body-emphasis">Setting Clear Goals and Priorities</h1>
                        <p className="fs-5 col-md-8">Teach the importance of setting clear and achievable goals, both short-term and long-term. Provide strategies for identifying priorities and allocating time accordingly to ensure that important tasks are completed efficiently.</p>

                        <div className="mb-5">
                        </div>

                        <hr className="col-3 col-md-2 mb-5" />

                        <div className="row g-5">
                            <div className="col-md-6">



                                <h2 className="text-body-emphasis">Learning Strategies for Busy Schedules</h2>
                                <p>Share tips and techniques for effective learning, even with a busy schedule. Discuss methods for optimizing learning efficiency, such as spaced repetition, active learning techniques, and setting specific learning goals.</p>



                                <h2 className="text-body-emphasis">Tracking Progress and Celebrating Success:</h2>
                                <p>Ready to go beyond the starter template? Check out these open source projects that you can quickly duplicate to a new GitHub repository.</p>






                                <ul className="list-unstyled ps-0">
                                    <li>
                                        <a className="icon-link mb-1" href="https://github.com/twbs/examples/tree/main/icons-font" rel="noopener" target="_blank">
                                            <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"></use></svg>
                                            Bootstrap npm starter
                                        </a>
                                    </li>
                                    <li>
                                        <a className="icon-link mb-1" href="https://github.com/twbs/examples/tree/main/parcel" rel="noopener" target="_blank">
                                            <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"></use></svg>
                                            Bootstrap Parcel starter
                                        </a>
                                    </li>
                                    <li>
                                        <a className="icon-link mb-1" href="https://github.com/twbs/examples/tree/main/vite" rel="noopener" target="_blank">
                                            <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"></use></svg>
                                            Bootstrap Vite starter
                                        </a>
                                    </li>

                                </ul>
                            </div>

                            <div className="col-md-6">
                                <h2 className="text-body-emphasis">Guides</h2>
                                <p>Read more detailed instructions and documentation on using or contributing to Bootstrap.</p>
                                <ul className="list-unstyled ps-0">
                                    <li>
                                        <a className="icon-link mb-1" href="/docs/5.3/getting-started/introduction/">
                                            <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"></use></svg>
                                            Bootstrap quick start guide
                                        </a>
                                    </li>
                                    <li>
                                        <a className="icon-link mb-1" href="/docs/5.3/getting-started/webpack/">
                                            <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"></use></svg>
                                            Bootstrap Webpack guide
                                        </a>
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </main>

                </div>
                {/* Time management */}


                {/* Future proof */}
                <div className="col-lg-8 mx-auto p-4 py-md-5 future-proof" id='future-proof'>
                    <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
                        <a href="/" className="d-flex align-items-center text-body-emphasis text-decoration-none">
                            <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                            <span className="fs-4 text-body-tertiary">Future-Proof Your Skills</span>
                        </a>
                    </header>

                    <main>
                        <h1 className="text-body-emphasis">Critical Thinking and Problem-Solving</h1>
                        <p className="fs-5 col-md-8">Emphasize the importance of critical thinking skills in analyzing complex problems, evaluating information, and making informed decisions. Provide examples of how critical thinking can be applied across various industries and job roles.</p>

                        <div className="mb-5">
                        </div>

                        <hr className="col-3 col-md-2 mb-5" />

                        <div className="row g-5">
                            <div className="col-md-6">
                                <h2 className="text-body-emphasis">Communication and Collaboration</h2>
                                <p>Stress the importance of effective communication and collaboration skills in building strong relationships, fostering teamwork, and driving project success. Offer tips for improving verbal and written communication, active listening, and conflict resolution.</p>
                                <ul className="list-unstyled ps-0">
                                    <li>
                                        <a className="icon-link mb-1" href="https://github.com/twbs/examples/tree/main/icons-font" rel="noopener" target="_blank">
                                            <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"></use></svg>
                                            Bootstrap npm starter
                                        </a>
                                    </li>
                                    <li>
                                        <a className="icon-link mb-1" href="https://github.com/twbs/examples/tree/main/parcel" rel="noopener" target="_blank">
                                            <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"></use></svg>
                                            Bootstrap Parcel starter
                                        </a>
                                    </li>
                                    <li>
                                        <a className="icon-link mb-1" href="https://github.com/twbs/examples/tree/main/vite" rel="noopener" target="_blank">
                                            <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"></use></svg>
                                            Bootstrap Vite starter
                                        </a>
                                    </li>
                                    <li>
                                        <a className="icon-link mb-1" href="https://github.com/twbs/examples/tree/main/webpack" rel="noopener" target="_blank">
                                            <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"></use></svg>
                                            Bootstrap Webpack starter
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-6">
                                <h2 className="text-body-emphasis">Guides</h2>
                                <p>Read more detailed instructions and documentation on using or contributing to Bootstrap.</p>
                                <ul className="list-unstyled ps-0">
                                    <li>
                                        <a className="icon-link mb-1" href="/docs/5.3/getting-started/introduction/">
                                            <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"></use></svg>
                                            Bootstrap quick start guide
                                        </a>
                                    </li>
                                    <li>
                                        <a className="icon-link mb-1" href="/docs/5.3/getting-started/webpack/">
                                            <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"></use></svg>
                                            Bootstrap Webpack guide
                                        </a>
                                    </li>
                                    <li>
                                        <a className="icon-link mb-1" href="/docs/5.3/getting-started/parcel/">
                                            <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"></use></svg>
                                            Bootstrap Parcel guide
                                        </a>
                                    </li>
                                    <li>
                                        <a className="icon-link mb-1" href="/docs/5.3/getting-started/vite/">
                                            <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"></use></svg>
                                            Bootstrap Vite guide
                                        </a>
                                    </li>
                                    <li>
                                        <a className="icon-link mb-1" href="/docs/5.3/getting-started/contribute/">
                                            <svg className="bi" width="16" height="16"><use xlinkHref="#arrow-right-circle"></use></svg>
                                            Contributing to Bootstrap
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </main>
                    <footer className="pt-5 my-5 text-body-secondary border-top">
                      <strong>  Created by the MVT Team · © 2024</strong>
                    </footer>
                </div>

                {/* Future proof */}

            </div>
            {/* Section Two  */}






        </div>
    )
}

export default Dipicto