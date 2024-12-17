"use client";

import { Footer } from "flowbite-react";
import logo from '../src/assets/Logo.png'
import latestnews1 from '../src/assets/latestnews1.webp'

import Link from 'next/link'; 
import Image from 'next/image'
import {GrFacebookOption, GrTwitter, GrLinkedinOption} from 'react-icons/gr'

export function Component() {
  return (
    <Footer container className="bg-gray-900 text-white py-10" style={{ marginTop: '-40px'}}>
      
      <div className='footer'>
        {/* Brand Section */}
        <div className="flex justify-center sm:justify-between items-center space-y-4 sm:space-y-0"> 
          <Link href='/'>
            <Image src={logo} width={164} height={65}  alt='logo' /> 
            <div className='logo'>  
              <p><small>Empower your business with CitrixLab's Framework and Cloud-based 
              solutions through expert-led training and tailored IT support.</small></p>
            </div>
          </Link> 
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
        
        {/* Link Group */}
        <div className="space-x-6 text-lg font-medium">
        <h3>Latest News</h3>
        <p><small>&nbsp;</small></p> 
          <div class="block-21 mb-4 d-flex"> 
            <Image src={latestnews1} width={65} height={65}  alt='image' /> 
            <div class="text">
                <h3 class="heading"><a href="#"><small>IT infrastructure and drive business performance</small></a></h3>
                <div class="meta">
                  <div><a href="#"><span class="icon-calendar"></span> Oct. 16, 2019</a></div>
                  <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                  <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                </div>
              </div>
            </div> 
        </div> 

        {/* Link Group */}
        <div class="col-md-6 col-lg-3 mb-4 mb-md-0">
          <div class="block-21 mb-4 d-flex"> 
          <h3>Company</h3>
            <Footer.Link href="#" className="hover:text-indigo-400 transition duration-300">About</Footer.Link>
            <Footer.Link href="#" className="hover:text-indigo-400 transition duration-300">Privacy Policy</Footer.Link>
            <Footer.Link href="#" className="hover:text-indigo-400 transition duration-300">Licensing</Footer.Link>
            <Footer.Link href="#" className="hover:text-indigo-400 transition duration-300">Contact</Footer.Link>
          </div> 
        </div>

        {/* Link Group */}
        <div className="space-x-6 text-lg font-medium">
                    <div class="col-md-6 col-lg-3 mb-4 mb-md-0">
                        <h3>Have a Questions?</h3>
                        <div class="block-23 mb-3">
                            <ul>
                                <li>
                                    <span class="icon ion-ios-pin"></span>
                                    <span class="text">Manila 1016, PH</span>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="icon ion-ios-call"></span>
                                        <span class="text">(+63) 939 5248 426</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="icon ion-ios-send"></span>
                                        <span class="text">
                                            <span class="__cf_email__">citrixlabph@gmail.com</span>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
        </div> 

      </div>
       
        <div className="footer-links" style={{ textAlign: 'center', height: '90px' }}>
        {/* Divider */}
        <Footer.Divider className="border-gray-700" /> 
        <p>&nbsp;</p>
          {/* Copyright */}
          <small><Footer.Copyright 
            href="#" 
            by=" CitrixLab Philippines. All Rights Reserve." 
            year={2024}
            className="text-sm text-gray-400"
          /></small>
        </div>
        
    </Footer>
  );
}

export default Component;
