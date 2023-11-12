import React from 'react';
import './Footer.css'
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
const Footer = () => {
    return (

        <div className="footer-container">
        <div className="footer">
            <div className='footer-left' >
               <div className='footer-left-1'>
                    <h1>Company</h1>
                    <ul>
                        <li>Home</li>
                        <li>Feature</li>
                        <li>Pricing</li>
                        <li>FQs</li>
                        <li>About</li>
                    </ul>
               </div>
               <div className='footer-left-2'>
                    <h1>Company</h1>
                    <ul>
                        <li>Home</li>
                        <li>Feature</li>
                        <li>Pricing</li>
                        <li>FQs</li>
                        <li>About</li>
                    </ul>
               </div>
               <div className='footer-left-3'>
                    <h1>Company</h1>
                    <ul>
                        <li>Home</li>
                        <li>Feature</li>
                        <li>Pricing</li>
                        <li>FQs</li>
                        <li>About</li>
                    </ul>
               </div>
            </div>

            <div className='footer-right'>
                   <h1>Subscribe to our newsletter</h1>
                   <p>Monthly digest of what's new and exciting from us.</p>
                   <div>
                     <input type='email' placeholder='Email address'/>
                     <button>Subscribe</button>
                   </div>
            </div>
        </div>

        
        <div className='footer-bottom'>
             <div className='footer-bottom-left'>
                <p>© 2023 Company, Inc. All rights reserved.</p>
             </div>
             <div className='footer-bottom-right'>
                 <BsFacebook className='icon'/>
                 <AiFillGoogleCircle className='icon'/>
                 <AiFillTwitterCircle className='icon'/>
                 <AiFillInstagram className='icon'/>
             </div>
        </div>
        </div>
        
    );
};

export default Footer;