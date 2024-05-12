//instagram page
import React from 'react'
import './Calander.css'
import Firstpay from '../../../Forms/paymentFormOne/Firstpay'
const Calander = () => {
    return (
        <div>
            {/* <!-- fontawesome--> */}
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            {/* <!-- fontawesome --> */}
            <div id="content">
                {/* <!-- holder --> */}
                <h1>upcomming gigs</h1>
                {/* <!-- title --> */}
                <div id="cartes">
                    {/* <!-- carte container --> */}
                    <div class="carte">
                        {/* <!-- carte one --> */}
                        <div class="time">
                            {/* <!-- left date --> */}
                            <p><span class="date-day">23</span> FEb</p>
                        </div>
                        <div class="info">
                            <p>dj music event
                                <br /> <span class="main_title">live in sydney</span></p>
                            <p class="calander">wednesday 28 december 2014
                                <br />08:55 PM TO 12:00 AM</p>
                            <p class="place">nexen square for people
                                <br /> australia, sydney</p>
                            <button>tickets</button>
                            {/* <!-- button --> */}
                        </div>
                    </div>
                    {/* <!-- /carte one --> */}
                    <div class="carte">
                        {/* <!-- carte two --> */}
                        <div class="time">
                            <p><span class="date-day">23</span> FEb</p>
                        </div>
                        <div class="info">
                            <p>live performence
                                <br /> <span class="main_title">corner obsest program</span></p>
                            <p class="calander">wednesday 28 december 2014
                                <br />08:55 PM TO 12:00 AM</p>
                            <p class="place">nexen square for people
                                <br /> australia, sydney</p>
                            <button>tickets</button>
                        </div>
                    </div>
                    {/* <!-- /carte two --> */}
                    <div class="carte">
                        {/* <!-- carte three --> */}
                        <div class="time">
                            <p><span class="date-day">23</span> FEb</p>
                        </div>
                        <div class="info">
                            <p>dj music event
                                <br /> <span class="main_title">music kaboom festivel</span></p>
                            <p class="calander">wednesday 28 december 2014
                                <br />08:55 PM TO 12:00 AM</p>
                            <p class="place">nexen square for people
                                <br /> australia, sydney</p>
                            <button id="blue-button">booked</button>
                        </div>
                    </div>
                    {/* <!-- /carte three --> */}
                    <div class="carte">
                        {/* <!-- carte four --> */}
                        <div class="time">
                            <p><span class="date-day">23</span> FEb</p>
                        </div>
                        <div class="info">
                            <p>dj music event
                                <br /> <span class="main_title last_title">hello dubai festivel</span></p>
                            <p class="calander">wednesday 28 december 2014
                                <br />08:55 PM TO 12:00 AM</p>
                            <p class="place">nexen square for people
                                <br /> australia, sydney</p>
                            <button id="red-button">cancel</button>
                        </div>
                    </div>
                    {/* <!-- /carte four --> */}
                </div>
                {/* <!-- /carte container  --> */}
            </div>


            <Firstpay/>
        </div>
    )
}

export default Calander