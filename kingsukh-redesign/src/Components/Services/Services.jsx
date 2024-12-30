import React from 'react'
import "./Services.css";
import service from "../../assets/service.jpg";

const Services = () => {
  return (
    <React.Fragment>
        <div id='services'>
        <img src={service} alt='image' />
        <div className='services-card'>
            <h3>Services</h3>
            <h1>Strive Only for the best</h1>
            <ul className='services-list'>
                <li> <i className='shield altenate icon'></i>High Class Security</li>
                <li> <i class="clock icon"></i>24 Hours Room Service</li>
                <li> <i className='utensils icon'></i>Restaurant</li>
                <li> <i className='street view icon'></i>Tourist Guide Support</li>
            </ul>
        </div>
    </div>
    <div className='rating'>
        <div>
            <h1>100+</h1>
            <p>Booking Completed</p>
        </div>
        <div>
            <h1>150+</h1>
            <p>Happy Customers</p>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Services