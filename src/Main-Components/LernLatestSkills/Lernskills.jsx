import React from 'react'
import './Lernskills.css'
import imageI from '../../../src/Media_assets/potrait/Srgw8jO5STiiuILpVB6Edg.jpg'

const Lernskills = () => {
  return (
    <div>
        <section class="py-lg-8 py-6 bg-gray-100 lernskill-background ">
                <div class="container my-lg-8 my-4">
                    <div class="row">
                        <div class="col-xl-10 offset-xl-1 col-md-12 col-12">
                            <div class="row align-items-center">
                                <div class="col-lg-5 col-md-12 col-12">
                                    <div class="mb-5 mb-lg-0">
                                        <h1 class=" fw-bold mb-3">
                                            Learn latest Skills; Advance&nbsp; 
                                            <u class="text-warning"> <span >your career</span></u>
                                        </h1>
                                        <p class="mb-5 lead text-secondary">Donec sit quam lacinia et sed et. Lectus in pellent esque sed a eget mauris. Tincidunt tincidunt sit quisque orci turpis nulla velit.</p>
                                        <a href="#!" class="btn btn-outline-secondary">Get Started</a>
                                    </div>
                                </div>
                                <div class="col-lg-6 offset-lg-1 col-md-12 col-12">
                                    <div class="d-flex justify-content-center align-items-center position-relative rounded border-gray-100 border border-4 rounded-3 bg-cover" style={{ height: "300px"}}>
                                        <img src={imageI} alt="image_alt" height={"300px"} />
                                        <a class=" play-edit icon-shape bi bi-play-circle-fill rounded-circle btn-play icon-xl" href="https://www.youtube.com/watch?v=Nfzi7034Kbg">
                                            <i class="fe fe-play"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="py-4  bg-gray-100 mt-4">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-10 offset-xl-1 col-md-12 col-12">
                            <div class="row">
                                <div class="col-xl-4 col-md-4 col-12">
                                    <div class="d-flex mb-4 mb-md-0">
                                        <div class="icon icon-shape rounded icon-md bg-gray-300 p-4 badge icon-one">
                                            <i class="bi bi-play-fill fs-4 text-gray-600"></i>
                                        </div>
                                        <div class="ms-3">
                                            <p class="mb-0 text-white fw-medium">Learn in- skills with over 24,000 video courses</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-4 col-12">
                                    <div class="d-flex mb-4 mb-md-0">
                                        <div class="icon icon-shape rounded icon-md bg-gray-300 p-4 text-white icon-two">
                                            <span className='text-white'>
                                            <i class="bi bi-star-fill"></i>
                                            </span>
                                        </div>
                                        <div class="ms-3">
                                            <p class="mb-0  fw-medium text-white">Choose courses taught by real-world experts</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-4 col-12">
                                    <div class="d-flex mb-4 mb-md-0">
                                        <div class="icon icon-shape rounded icon-md bg-gray-300 p-4 text-white icon-two">
                                            <span className='text-white'>
                                            <i class="bi bi-infinity bi-star-fill text-white fs-5 "></i>
                                            </span>
                                        </div>
                                        <div class="ms-3">
                                        <p class="mb-0  fw-medium text-white">Learn at your own pace, with lifetime access on mobile and desktop</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <div class="col-xl-4 col-md-4 col-12">
                                    <div class="d-flex mb-4 mb-md-0">
                                        <div class="icon icon-shape rounded icon-lg bg-gray-300 p-4">
                                        <span className='text-white'>
                                        <i class="bi bi-infinity bi-star-fill text-white icon-three"></i>
                                        </span>
                                        </div>
                                        <div class="ms-3">
                                            <p class="mb-0 text-dark fw-medium">Learn at your own pace, with lifetime access on mobile and desktop</p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>

            
            
    </div>
  )
}

export default Lernskills