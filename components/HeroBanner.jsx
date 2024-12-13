import React from 'react' 
import {CgShoppingCart} from 'react-icons/cg' 
import Link from 'next/link';
import headerImg from '../src/assets/mainbg.jpg'

const HeroBanner = () => {
 
 
  return (
    <header className="header">
  
            {/* Background Layer */}
            <div className="background-layer"></div>
     
          {/* Background Layer */}
          <div
            className="background-layer1"
            style={{
              position: 'absolute', // Positioned absolutely to cover the full page
              marginTop: 0,
              left: '0px',
              width: '100%', // Full width
              height: '50vh', // Full height
              background: 'rgba(243,243,243,1)', // Set a background color
              zIndex: -1, // Ensures it stays behind the body content
            }}
          >  
            <Image
              src={mainbg}  // Path to the background image
              alt="Background"  // Image alt text for accessibility
              layout="fill"  // Ensures the image covers the container fully
              objectFit="cover"  // Maintains aspect ratio while filling the space
              objectPosition="center"  // Centers the image within the container
            />
          </div>
     
        <div className='header-left-side'>
            <div className='header-content'> 
                <h1>CitrixLab Philippines:</h1>
                <p>&nbsp;Your Trusted IT Solution Provider</p> 
                <p>&nbsp;</p> 
                <small>
                  At CitrixLab, we provide expert Citrix and NetScaler solutions through training, 
                  on-demand labs, and tailored IT support to optimize your IT infrastructure and drive 
                  business performance.
                </small> 
                <p>&nbsp;</p> 
                <Link href='/products'>
                     <button className='btn' type='button'><CgShoppingCart size={26} />  Learn More</button>
                </Link> 
                <p>&nbsp;</p> 
                <p>&nbsp;</p> 
            </div>

        </div>

        <div className='header-right-side'> 
        </div>

    </header>
    
  )
}

export default HeroBanner
