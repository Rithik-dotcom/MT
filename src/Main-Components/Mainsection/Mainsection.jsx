import React from 'react'
import './mainsection.css'
import amazon_logo from '../../Media_assets/Webinar_poster/CSPD7hUBRnOuG8QriHovUA.png';
import healthCare_logo from '../../Media_assets/Webinar_poster/healthCare.jpeg';
import banking from '../../Media_assets/Webinar_poster/banking.png';
import booking from '../../Media_assets/Webinar_poster/booking.png';




const Mainsection = () => {

    return (
        <div className='main-background border-manage' style={{ backgroundColor: "rgba(11, 19, 36, var(--opacity,1))" }}>
            <div class="container mb-lg-8 main-background">
                <div class="row">
                    {/* {/* col -->*/}
                    <div class="col-12">
                        <div class="mb-6 pt-4">
                            <h2 class="mb-1 h1 text-white pt-4">Explore the Most Popular Webinars</h2>
                            <p className='text-white'>In-Demand Learning: Top Webinars Worldwide in 2022</p>
                        </div>
                    </div>
                </div>
                <div class="row ">
                    <div class="col-md-12">
                        {/* {/* Nav tab -->*/}
                        <ul class="nav nav-lb-tab mb-6 bg-gray-200 px-5 rounded-3" id="pills-tab" role="tablist">
                            {/* {/* nav item -->*/}
                            <li class="nav-item ms-0" role="presentation">
                                <a class="nav-link active" id="pills-development-tab" data-bs-toggle="pill" href="#pills-development" role="tab" aria-controls="pills-development" aria-selected="true">
                                    Development
                                </a>
                            </li>
                            {/* {/* nav item -->*/}
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="pills-design-tab" data-bs-toggle="pill" href="#pills-design" role="tab" aria-controls="pills-design" aria-selected="false" tabindex="-1">Data Science</a>
                            </li>
                            {/* {/* nav item -->*/}
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="pills-marketing-tab" data-bs-toggle="pill" href="#pills-marketing" role="tab" aria-controls="pills-marketing" aria-selected="false" tabindex="-1">
                                    Cloud
                                </a>
                            </li>
                            {/* {/* nav item -->*/}
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="pills-business-tab" data-bs-toggle="pill" href="#pills-business" role="tab" aria-controls="pills-business" aria-selected="false" tabindex="-1">
                                    SoftSkills
                                </a>
                            </li>
                            {/* {/* nav item -->*/}
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="pills-health-tab" data-bs-toggle="pill" href="#pills-health" role="tab" aria-controls="pills-health" aria-selected="false" tabindex="-1">
                                     Programming
                                     </a>
                            </li>
                        </ul>
                        {/* {/* Tab content -->*/}
                        <div class="tab-content" id="pills-tabContent">
                            {/* {/* tab content -->*/}
                            <div class="tab-pane fade show active" id="pills-development" role="tabpanel" aria-labelledby="pills-development-tab">
                                {/* {/* row -->*/}

                                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src={amazon_logo} alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-info-soft">Intermediate</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2 "><a href="../course-single.html" class="text-inherit card-anchor text-dark ">Crafting Amazon-like Applications</a></h4>
                                                <small>By: Claire Evans</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(9,300)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">₹9.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src={healthCare_logo} alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-danger-soft">Beginner</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2">
                                                    <a href="../course-single.html" class="text-inherit card-anchor text-dark">Crafting Telemedicine Applications</a>
                                                </h4>

                                                <small>By: Carolyn Welborn</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(8,890)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">₹9.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src={booking} alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-info-soft">Intermediate</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2"><a href="../course-single.html" class="text-inherit card-anchor text-dark"> Booking and Reservation Platforms</a></h4>

                                                <small>By: Floyd Amall</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(13,245)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">₹9.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src={banking} alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-danger-soft">Advance</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2">
                                                    <a href="../course-single.html" class="text-inherit card-anchor text-dark"> Secure Online Banking Applications</a>
                                                </h4>

                                                <small>By: Victor Elliott</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(9,300)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">₹9.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="https://geeksui.codescandy.com/geeks/assets/images/course/course-react.jpg" alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-info-soft">Intermediate</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2"><a href="../course-single.html" class="text-inherit card-anchor text-dark">Crafting Streaming Media Platforms</a></h4>
                                                {/* {/* List -->*/}
                                                <small>By: Morris Mccoy</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(7,700)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">₹9.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="https://geeksui.codescandy.com/geeks/assets/images/course/course-graphql.jpg" alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-success-soft">Beginner</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2"><a href="../course-single.html" class="text-inherit card-anchor text-dark"> Real Estate Marketplace Solutions</a></h4>
                                                <small>By: Michael Cundiff</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(9,300)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">₹9.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="https://geeksui.codescandy.com/geeks/assets/images/course/course-angular.jpg" alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-danger-soft">Advance</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2"><a href="../course-single.html" class="text-inherit card-anchor">Angular - the complete guide for beginner</a></h4>

                                                <small>By: Jeffrey McCoy</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(8,890)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">₹9.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="https://geeksui.codescandy.com/geeks/assets/images/course/course-python.jpg" alt="card" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-success-soft">Beginner</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2"><a href="../course-single.html" class="text-inherit card-anchor">The Python Course: build web application</a></h4>

                                                <small>By: Douglas Howell</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(13,245)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">₹9.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* {/* tab content -->*/}
                            <div class="tab-pane fade" id="pills-design" role="tabpanel" aria-labelledby="pills-design-tab">
                                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-graphql.jpg" alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-success-soft">Beginner</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2"><a href="../course-single.html" class="text-inherit">GraphQL: introduction to graphQL for beginners</a></h4>

                                                <small>By: Michael Cundiff</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(9,300)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">₹9.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-angular.jpg" alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-danger-soft">Advance</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2"><a href="../course-single.html" class="text-inherit">Angular - the complete guide for beginner</a></h4>

                                                <small>By: Jeffrey McCoy</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(8,890)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">$49.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-python.jpg" alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-success-soft">Beginner</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2"><a href="../course-single.html" class="text-inherit">The Python Course: build web application</a></h4>

                                                <small>By: Douglas Howell</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(13,245)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">$19.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-javascript.jpg" alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-info-soft">Intermediate</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2"><a href="../course-single.html" class="text-inherit">How to easily create a website with JavaScript</a></h4>

                                                <small>By: Claire Evans</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(9,300)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">$39.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-css.jpg" alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-danger-soft">Beginner</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2">
                                                    <a href="../course-single.html" class="text-inherit">CSS: ultimate CSS course from beginner to advanced</a>
                                                </h4>

                                                <small>By: Carolyn Welborn</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(8,890)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">$30.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-gatsby.jpg" alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-info-soft">Intermediate</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2"><a href="../course-single.html" class="text-inherit">The Gatsby Course: build web application</a></h4>

                                                <small>By: Floyd Amall</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(13,245)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">$34.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-wordpress.jpg" alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-danger-soft">Advance</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2">
                                                    <a href="../course-single.html" class="text-inherit">WordPress: introduction to wordpress for beginners</a>
                                                </h4>

                                                <small>By: Victor Elliott</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(9,300)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">$39.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-react.jpg" alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-info-soft">Intermediate</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2"><a href="../course-single.html" class="text-inherit">How to easily create a website with React</a></h4>
                                                {/* {/* List -->*/}
                                                <small>By: Morris Mccoy</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(7,700)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">$29.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* {/* Tab Pane -->*/}
                            <div class="tab-pane fade" id="pills-marketing" role="tabpanel" aria-labelledby="pills-marketing-tab">
                                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-react.jpg" alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-info-soft">Intermediate</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2"><a href="../course-single.html" class="text-inherit">How to easily create a website with React</a></h4>
                                                {/* {/* List -->*/}
                                                <small>By: Morris Mccoy</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(7,700)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">$29.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-graphql.jpg" alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-success-soft">Beginner</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2"><a href="../course-single.html" class="text-inherit">GraphQL: introduction to graphQL for beginners</a></h4>

                                                <small>By: Michael Cundiff</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(9,300)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">Free</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-angular.jpg" alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-danger-soft">Advance</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2"><a href="../course-single.html" class="text-inherit">Angular - the complete guide for beginner</a></h4>

                                                <small>By: Jeffrey McCoy</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(8,890)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">$49.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-css.jpg" alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-danger-soft">Beginner</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2">
                                                    <a href="../course-single.html" class="text-inherit">CSS: ultimate CSS course from beginner to advanced</a>
                                                </h4>

                                                <small>By: Carolyn Welborn</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(8,890)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">$30.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-gatsby.jpg" alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-info-soft">Intermediate</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2"><a href="../course-single.html" class="text-inherit">The Gatsby Course: build web application</a></h4>

                                                <small>By: Floyd Amall</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(13,245)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">$34.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-javascript.jpg" alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-info-soft">Intermediate</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2"><a href="../course-single.html" class="text-inherit">How to easily create a website with JavaScript</a></h4>

                                                <small>By: Claire Evans</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(9,300)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">$39.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-wordpress.jpg" alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-danger-soft">Advance</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2">
                                                    <a href="../course-single.html" class="text-inherit">WordPress: introduction to wordpress for beginners</a>
                                                </h4>

                                                <small>By: Victor Elliott</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(9,300)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">$39.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-python.jpg" alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-success-soft">Beginner</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2"><a href="../course-single.html" class="text-inherit">The Python Course: build web application</a></h4>

                                                <small>By: Douglas Howell</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(13,245)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">$19.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-business" role="tabpanel" aria-labelledby="pills-business-tab">
                                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-wordpress.jpg" alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-danger-soft">Advance</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2">
                                                    <a href="../course-single.html" class="text-inherit">WordPress: introduction to wordpress for beginners</a>
                                                </h4>

                                                <small>By: Victor Elliott</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(9,300)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">$39.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-python.jpg" alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-success-soft">Beginner</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2"><a href="../course-single.html" class="text-inherit">The Python Course: build web application</a></h4>

                                                <small>By: Douglas Howell</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(13,245)</span>
                                                </div>
                                            </div>
                                            {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">$19.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-react.jpg" alt="course" class="card-img-top" /></a>
                                            {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-info-soft">Intermediate</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2"><a href="../course-single.html" class="text-inherit">How to easily create a website with React</a></h4>
                                                {/* List -->*/}
                                                <small>By: Morris Mccoy</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(7,700)</span>
                                                </div>
                                            </div>
                                            {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">$29.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-graphql.jpg" alt="course" class="card-img-top" /></a>
                                            {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-success-soft">Beginner</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2"><a href="../course-single.html" class="text-inherit">GraphQL: introduction to graphQL for beginners</a></h4>

                                                <small>By: Michael Cundiff</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(9,300)</span>
                                                </div>
                                            </div>
                                            {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">Free</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-angular.jpg" alt="course" class="card-img-top" /></a>
                                            {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-danger-soft">Advance</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2"><a href="../course-single.html" class="text-inherit">Angular - the complete guide for beginner</a></h4>

                                                <small>By: Jeffrey McCoy</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(8,890)</span>
                                                </div>
                                            </div>
                                            {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">$49.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-javascript.jpg" alt="course" class="card-img-top" /></a>
                                            {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-info-soft">Intermediate</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2"><a href="../course-single.html" class="text-inherit">How to easily create a website with JavaScript</a></h4>

                                                <small>By: Claire Evans</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(9,300)</span>
                                                </div>
                                            </div>
                                            {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">$39.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-css.jpg" alt="course" class="card-img-top" /></a>
                                            {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-danger-soft">Beginner</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2">
                                                    <a href="../course-single.html" class="text-inherit">CSS: ultimate CSS course from beginner to advanced</a>
                                                </h4>

                                                <small>By: Carolyn Welborn</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(8,890)</span>
                                                </div>
                                            </div>
                                            {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">$30.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-gatsby.jpg" alt="course" class="card-img-top" /></a>
                                            {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-info-soft">Intermediate</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2"><a href="../course-single.html" class="text-inherit">The Gatsby Course: build web application</a></h4>

                                                <small>By: Floyd Amall</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(13,245)</span>
                                                </div>
                                            </div>
                                            {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">$34.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-health" role="tabpanel" aria-labelledby="pills-health-tab">
                                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                                    <div class="col">
                                        {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-python.jpg" alt="course" class="card-img-top" /></a>
                                            {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-success-soft">Beginner</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2"><a href="../course-single.html" class="text-inherit">The Python Course: build web application</a></h4>

                                                <small>By: Douglas Howell</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(13,245)</span>
                                                </div>
                                            </div>
                                            {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">$19.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-wordpress.jpg" alt="course" class="card-img-top" /></a>
                                            {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-danger-soft">Advance</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2">
                                                    <a href="../course-single.html" class="text-inherit">WordPress: introduction to wordpress for beginners</a>
                                                </h4>

                                                <small>By: Victor Elliott</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">5</span>
                                                    <span class="fs-6">(9,300)</span>
                                                </div>
                                            </div>
                                            {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">$39.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-react.jpg" alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-info-soft">Intermediate</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2"><a href="../course-single.html" class="text-inherit">How to easily create a website with React</a></h4>
                                                {/* {/* List -->*/}
                                                <small>By: Morris Mccoy</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">3.5</span>
                                                    <span class="fs-6">(7,700)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">$29.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-graphql.jpg" alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-success-soft">Beginner</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2"><a href="../course-single.html" class="text-inherit">GraphQL: introduction to graphQL for beginners</a></h4>

                                                <small>By: Michael Cundiff</small>
                                                <div class="d-flex align-text-top mt-3">
                                                    <span class="fs-6">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                        </svg>
                                                    </span>

                                                    <span class="text-warning">4</span>
                                                    <span class="fs-6">(9,300)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">Free</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-javascript.jpg" alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-info-soft">Intermediate</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2"><a href="../course-single.html" class="text-inherit">How to easily create a website with JavaScript</a></h4>

                                                <small>By: Claire Evans</small>
                                                <div class="d-flex align-text-top mt-3">
                                                    <span class="fs-6">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                        </svg>
                                                    </span>
                                                    <span class="text-warning">3.5</span>
                                                    <span class="fs-6">(9,300)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">$39.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-css.jpg" alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-danger-soft">Beginner</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2">
                                                    <a href="../course-single.html" class="text-inherit">CSS: ultimate CSS course from beginner to advanced</a>
                                                </h4>

                                                <small>By: Carolyn Welborn</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">5</span>
                                                    <span class="fs-6">(8,890)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">$30.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-gatsby.jpg" alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-info-soft">Intermediate</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2"><a href="../course-single.html" class="text-inherit">The Gatsby Course: build web application</a></h4>

                                                <small>By: Floyd Amall</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(13,245)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">$34.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        {/* {/* Card -->*/}
                                        <div class="card card-hover">
                                            <a href="../course-single.html"><img src="../../assets/images/course/course-angular.jpg" alt="course" class="card-img-top" /></a>
                                            {/* {/* Card Body -->*/}
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <span class="badge bg-danger-soft">Advance</span>
                                                    <a href="#" class="fs-5"><i class="fe fe-heart align-middle"></i></a>
                                                </div>
                                                <h4 class="mb-2 text-truncate-line-2"><a href="../course-single.html" class="text-inherit">Angular - the complete guide for beginner</a></h4>

                                                <small>By: Jeffrey McCoy</small>
                                                <div class="lh-1 mt-3">
                                                    <span class="align-text-top">
                                                        <span class="fs-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="text-warning">4.5</span>
                                                    <span class="fs-6">(8,890)</span>
                                                </div>
                                            </div>
                                            {/* {/* Card Footer -->*/}
                                            <div class="card-footer">
                                                <div class="row align-items-center g-0">
                                                    <div class="col">
                                                        <h5 class="mb-0">$49.00</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="text-inherit btn btn-primary">
                                                            <i class="fe fe-shopping-cart text-primary align-middle me-2"></i>
                                                            Get Enrolled
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mainsection