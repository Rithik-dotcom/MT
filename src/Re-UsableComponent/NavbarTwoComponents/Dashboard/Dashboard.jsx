import React from 'react';
import imageI from '../../../../src/Media_assets/potrait/Srgw8jO5STiiuILpVB6Edg.jpg';
import './Dashboard.css';

import join_the_webinar_today from '../../../Media_assets/Webinar_poster/ZS-CVGI7RUu2ftTgsf6WZA.png';
import b from '../../../Media_assets/Webinar_poster/banking.png';
import ReactPlayer from 'react-player'


const dashboard = () => {
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
    <div className='main '>
      {/* Section One */}
      <div className='section-one d-flex '>
        <div className='circle-main '>
          <img className='h-75  rounded-5  w-100 px-4 py-4' src={b} alt="circle_image" />
          // Render a YouTube video player
<ReactPlayer muted={true} url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
 


        </div>
        <div className='join-options container      '>
          <div className='row bg-dark rounded-4  py-4 text-center'>
            <h3 className='text-white  rounded-3 '>Webinar Bookings</h3>

            <p className='text-white'>{`${date1}- ${Month1}-${year1}`}</p>
            <div className='bg-white mx-auto'>
              <h5 className='text-dark mt-2'>FullStack Ecommerce App<div className="razorpay-embed-btn" data-url="https://pages.razorpay.com/pl_O5jFJqIiE1v8Xg/view" data-text="Book Now 7:00PM" data-color="#528FF0" data-size="medium">

              </div>
              </h5>
              <h5 className='text-dark mt-2'>FullStack Fintech App<div className="razorpay-embed-btn" data-url="https://pages.razorpay.com/pl_O5jFJqIiE1v8Xg/view" data-text="Book Now 7:00PM" data-color="#528FF0" data-size="medium">

              </div>
              </h5>
            </div>
          </div>

        </div>

        
      </div>


      {/* Section Two */}
      <div className='section-two d-flex '>
        {/* Left section */}
        <left>
          <div className="container left-container ">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-6 my-3">
                <div className="video-card w-100 rounded shadow " style={{ backgroundImage: `url("https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?cs=srgb&dl=pexels-jmendezrf-1536619.jpg&fm=jpg")`, backgroundSize: 'cover', backgroundPosition: 'center bottom', backgroundRepeat: 'no-repeat', height: "20vh" }}>
                  <div className="video-title  text-white p-3 p-xl-4">
                    <div className="font-weight-bold pb-2">
                      The Omnia CRM
                    </div>

                    <div className="font-weight-bold small pt-2 ">
                      Click to Watch the Tutorial&nbsp;&nbsp;&nbsp;<i className="bi bi-play-circle small"></i>
                    </div>
                  </div>
                  {/* <div className="hover text-white">
                  <i className="bi bi-play-circle small"></i>
                </div> */}
                </div>
              </div>
              {/* Repeat the above structure for other video cards */}
            </div>
          </div>

          <div className="container ">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-6 my-3">
                <div className="video-card w-100 rounded shadow " style={{ backgroundImage: `url(${join_the_webinar_today})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: "80vh" }}>
                  <div className="video-title  text-white p-3 p-xl-4">


                    <div className="font-weight-bold small pt-2">
                      Click to Watch the Tutorial&nbsp;&nbsp;&nbsp;<i className="bi bi-play-circle small"></i>
                    </div>
                  </div>
                  {/* <div className="hover text-white">
                  <i className="bi bi-play-circle small"></i>
                </div> */}
                </div>
              </div>
              {/* Repeat the above structure for other video cards */}
            </div>
          </div>
        </left>



      </div>

      {/* section-Two */}


    </div>
  )
}

export default dashboard