import React from "react";
import "./Footer.css";
import { assets } from '../../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <div className="footer" id="footer">
       
      <div className="footer-content">
        <div className="footer-content-left">
            <img src='/meamate.webp' alt="" />
            <p>Need help or have a question? Our support team is available 24/7. Reach us via the app<br/> — we're happy to help! </p>
            <div className="footer-social-icons flex">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
           
            <ul >
                 
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
               
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-9845147585</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 Mealmate.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;