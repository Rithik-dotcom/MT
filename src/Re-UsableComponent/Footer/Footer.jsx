import React from 'react'
import './footer.css'
import logo from '../../../src/Media_assets/logo/logo2.png'
const Footer = () => {
    return (
        <div>
{/* image_alt */}
{/* <section class="pb-lg-8">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-10 offset-xl-1 col-md-12 col-12">
                            <div class="bg-primary py-6 px-6 px-xl-0 rounded-4">
                                <div class="row align-items-center">
                                    <div class="offset-xl-1 col-xl-5 col-md-6 col-12">
                                        <div>
                                            <h2 class="h1 text-white mb-3">Let's find the right course for you!</h2>
                                            <p class="text-white-50 fs-4">…and achieve their learning goals. With our expert tutors, your goals are closer than ever!</p>
                                            <button class="btn btn-dark">Start learning</button>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-md-6 col-12">
                                        <div class="text-center d-none d-md-block">
                                            <img src="../../assets/images/education/course.png" alt="learning" class="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
{/* image_alt */}
            <hr class="my-0 bg-transparent text-white"></hr>
            <footer class="pt-lg-8 pt-5 footer bg-background">
                <div class="container mt-lg-2">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-12">
                            {/* <!-- about company --> */}
                            <div class="mb-4">
                            <a className="" href="./index.html"><img className='logo-adjust' src={logo} width="70vb" height="50vh" alt="geeks UI logo" /></a> <p className='text-white'>Manav Technology</p>
                                <div class="mt-4">
                                    <p className='text-footer-gray'>Geek is feature-rich components and beautifully Bootstrap UIKit for developers, built with bootstrap responsive framework.</p>
                                    {/* <!-- social media --> */}
                                    <div class="fs-4 mt-4">
                                        {/* <!--Facebook--> */}
                                        <a href="#" class="me-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook footer-svg" viewBox="0 0 16 16">
                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                                            </svg>
                                        </a>
                                        {/* <!--Twitter--> */}
                                        <a href="#" class="me-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter footer-svg" viewBox="0 0 16 16">
                                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                                            </svg>
                                        </a>

                                        {/* <!--GitHub--> */}
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github footer-svg" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="offset-lg-1 col-lg-2 col-md-3 col-6">
                            <div class="mb-4">
                                {/* <!-- list --> */}
                                <h3 class="fw-bold mb-3 text-white ">Company</h3>
                                <ul class="list-unstyled nav nav-footer flex-column nav-x-0">
                                    <li><a href="#" class="nav-link text-footer-gray footer-anchor">About</a></li>
                                    <li><a href="#" class="nav-link text-footer-gray footer-anchor">Pricing</a></li>
                                    <li><a href="#" class="nav-link text-footer-gray footer-anchor">Blog</a></li>
                                    <li><a href="#" class="nav-link text-footer-gray footer-anchor">Careers</a></li>
                                    <li><a href="#" class="nav-link text-footer-gray footer-anchor">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-6">
                            <div class="mb-4">
                                {/* <!-- list --> */}
                                <h3 class="fw-bold mb-3 text-white">Support</h3>
                                <ul class="list-unstyled nav nav-footer flex-column nav-x-0">
                                    <li><a href="#" class="nav-link text-footer-gray footer-anchor" >Help and Support</a></li>
                                    <li><a href="#" class="nav-link text-footer-gray footer-anchor">Become Instructor</a></li>
                                    <li><a href="#" class="nav-link text-footer-gray footer-anchor">Get the app</a></li>
                                    <li><a href="#" class="nav-link text-footer-gray footer-anchor">FAQ's</a></li>
                                    <li><a href="#" class="nav-link text-footer-gray footer-anchor">Tutorial</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-12">
                            {/* <!-- contact info --> */}
                            <div class="mb-4">
                                <h3 class="fw-bold mb-3 text-white">Get in touch</h3>
                                <p className='text-footer-gray footer-anchor'>339 McDermott Points Hettingerhaven, NV 15283</p>
                                <p class="mb-1 text-footer-gray footer-anchor">
                                    Email:
                                    <a href="#" className='mail-anchor'>support@geeksui.com</a>
                                </p>
                                <p className='text-footer-gray footer-anchor'>
                                    Phone:
                                    <span class=" fw-semibold text-footer-gray">(000) 123 456 789</span>
                                </p>
                               
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center g-0 border-top py-2 mt-6">
                        {/* <!-- Desc --> */}
                        <div class="col-md-10 col-12">
                            <div class="d-lg-flex align-items-center">
                                <div class="me-4">
                                    <span className='text-footer-gray footer-anchor'>
                                        ©
                                        <span id="copyright5">
                                            <script>
                                                document.getElementById("copyright5").appendChild(document.createTextNode(new Date().getFullYear()));
                                            </script>2024
                                        </span>
                                        _GSK-PVT LTD
                                    </span>
                                </div>
                                <div>
                                    <nav class="nav nav-footer">
                                        <a class="nav-link ps-0 text-footer-gray " href="#">Privacy Policy</a>
                                        <a class="nav-link px-2 px-md-3 text-footer-gray " href="#">Cookie Notice</a>
                                        <a class="nav-link d-none d-lg-block text-footer-gray " href="#">Do Not Sell My Personal Information</a>
                                        <a class="nav-link text-footer-gray " href="#">Terms of Use</a>
                                    </nav>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Links --> */}
                        <div class=" fixed-bottom arrow">
                            <div >
                              <a href="#">
                              <i class="bi bi-arrow-up-circle-fill text-warning fs-2"></i>
                              </a>
                                {/* <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            <span class="me-2">
                                                <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_5543_19736)">
                                                        <path d="M0 0.5H16V12.5H0V0.5Z" fill="#012169"></path>
                                                        <path d="M1.875 0.5L7.975 5.025L14.05 0.5H16V2.05L10 6.525L16 10.975V12.5H14L8 8.025L2.025 12.5H0V11L5.975 6.55L0 2.1V0.5H1.875Z" fill="white"></path>
                                                        <path d="M10.6 7.525L16 11.5V12.5L9.225 7.525H10.6ZM6 8.025L6.15 8.9L1.35 12.5H0L6 8.025ZM16 0.5V0.575L9.775 5.275L9.825 4.175L14.75 0.5H16ZM0 0.5L5.975 4.9H4.475L0 1.55V0.5Z" fill="#C8102E"></path>
                                                        <path d="M6.025 0.5V12.5H10.025V0.5H6.025ZM0 4.5V8.5H16V4.5H0Z" fill="white"></path>
                                                        <path d="M0 5.325V7.725H16V5.325H0ZM6.825 0.5V12.5H9.225V0.5H6.825Z" fill="#C8102E"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_5543_19736">
                                                            <rect width="16" height="12" fill="white" transform="translate(0 0.5)"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>
                                            English
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            <span class="me-2">
                                                <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_5543_19744)">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5H16V12.5H0V0.5Z" fill="white"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5H5.3325V12.5H0V0.5Z" fill="#002654"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.668 0.5H16.0005V12.5H10.668V0.5Z" fill="#CE1126"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_5543_19744">
                                                            <rect width="16" height="12" fill="white" transform="translate(0 0.5)"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>
                                            Français
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            <span class="me-2">
                                                <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_5543_19751)">
                                                        <path d="M0 8.5H16V12.5H0V8.5Z" fill="#FFCE00"></path>
                                                        <path d="M0 0.5H16V4.5H0V0.5Z" fill="black"></path>
                                                        <path d="M0 4.5H16V8.5H0V4.5Z" fill="#DD0000"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_5543_19751">
                                                            <rect width="16" height="12" fill="white" transform="translate(0 0.5)"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>
                                            Deutsch
                                        </a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer