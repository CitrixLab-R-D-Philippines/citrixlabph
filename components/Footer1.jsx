import React from 'react'
import Image from 'next/image'
import logo from '../src/assets/Logo.png'
import {GrFacebookOption, GrTwitter, GrLinkedinOption} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className='logo'> 
          <Image src={logo} width={202} height={80} alt='logo' /> 

          <p>Empower your business with CitrixLab's Framework and Cloud-based 
            solutions through expert-led training and tailored IT support.</p>
            <p>&nbsp;</p> 
          
          <div className='icon-container'>
            <div>
              <a className="social-icon" href="https://x.com/SoojiDano" target="_blank" rel="noopener noreferrer">
                <GrTwitter size={20} />
              </a>
            </div>
            <div>
              <a className="social-icon" href="https://www.facebook.com/citrixlabph/" target="_blank" rel="noopener noreferrer">
                <GrFacebookOption size={20} />
              </a>
            </div>
            <div>
              <a className="social-icon" href="https://www.linkedin.com/in/jasondano/" target="_blank" rel="noopener noreferrer">
                <GrLinkedinOption size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className='footer-links'>
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>How it Works</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className='footer-links'>
          <h3>Support</h3>
          <ul>
            <li>Support Carrer</li>
            <li>24h Service</li>
            <li>Quick Chat</li>
          </ul>
        </div>

        <div className='footer-links'>
          <h3>Contact</h3>
          <ul>
            <li>Whatsapp</li>
            <li>Support 24h</li>
          </ul>
        </div>
      </div>

      <div className='copyright'>
        <p>Copyright © 2024 CitrixLab Philippines</p>
        <p>Design by. <span>Weird Design Studio</span></p>
        <p>Code by. <a href="https://www.facebook.com/citrixlabph/" target="_blank" rel="noopener noreferrer" class="bold-link">Citrixlab PH</a></p>
      </div>
    </footer>
  )
} 

export default Footer
