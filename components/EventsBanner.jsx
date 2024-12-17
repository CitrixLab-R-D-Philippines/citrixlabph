import React from 'react'
import Image from 'next/image'
import event1 from '../src/assets/event1.png' 
import event2 from '../src/assets/event2.png' 
import event3 from '../src/assets/event3.png' 

import DataGridDemo from '../pages/employee.js'; // Go up two levels if necessary
import Records from '../pages/records.js'; // Go up two levels if necessary

const EventsBanner = () => {
  return (
    <section className='event-container'>
      <div className='subtitle'>
        <span>PROMOTIONS</span>
        <h2>Our Ecommerce Promotional Website</h2>
      </div>

      <div className='event-banner'>
        <div className='event-banner-left'>
          <div className='event-card'>
            <div className='content'>
              <h3>GET UP TO <span>60%</span></h3>
              <p>For the summer season</p>
            </div>
            <Image src={event1} alt='event' />
          </div>

          <div className='event-card'>
            <h3>GET 30% Off</h3>
            <p>USE PROMO CODE</p>
            <button>DINEWEEKENDSALE</button>
          </div>
        </div>

        <div className='event-banner-right'>
          <div className='event-banner-right-1'>
            <div className='details'>
              <p>Flex Sweatshirt</p>
              <div className='price'>
                <span>$100.00</span>
                <span>$75.00</span>
              </div>
            </div>
            <Image src={event2} alt='event' />
          </div>

          <div className='event-banner-right-2'>
            <div className='details'>
              <p>Flex Push Button Bomber</p>
              <div className='price'>
                <span>$225.00</span>
                <span>$190.00</span>
              </div>
            </div>
            <Image src={event3} alt='event' />
          </div>
        </div>
      </div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <hr />
      <p>&nbsp;</p>
      <p>&nbsp;</p>
        <div className='subtitle'>
          <span>RECORD ADMINISTRATION SERVICE</span>
          <h2>Our SaaS Admin User Record Page - Promotional Website</h2>
        </div>
      <div className='event-banner'>
        <div className='event-banner-left'>
        {/* Call DataGridDemo here */}
        <DataGridDemo />
        </div>
        <div className='event-banner-right'>
        {/* Call DataGridDemo here 
        <DataGridDemo />
        */}
        </div>
      </div>
      {/* Call DataGridDemo here 
      <Records />
      */}
    </section>
  )
}

export default EventsBanner
