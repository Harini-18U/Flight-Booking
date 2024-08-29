import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="newsletter">
          <h5>Subscribe to our newsletter for regular updates about Offers, Coupons & more</h5>
          <div className="subscribe">
            <input type="email" placeholder="Your Email Address" className="email-input" />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
        <div className="social-media">
          <h5>Follow Us</h5>
          <div className="social-icons">
            <img src="/icons/fb.png" alt="Facebook" />
            <img src="/icons/twtr.png" alt="Twitter" />
            <img src="/icons/insta.png" alt="Instagram" />
            <img src="/icons/yt.png" alt="YouTube" />
            <img src="/icons/ln.png" alt="LinkedIn" />
          </div>
        </div>
      </div>
      <div className="footer-columns">
        <div className="footer-column">
          <h5>Company</h5>
          <a href="#about">About</a>
          <a href="#careers">Careers</a>
          <a href="#partnerships">Partnerships</a>
          <a href="#blog">Blog</a>
          <a href="#advertising">Advertising</a>
          <a href="#how-we-work">How we work</a>
        </div>
        <div className="footer-column">
          <h5>Policies</h5>
          <a href="#privacy">Privacy</a>
          <a href="#terms-of-use">Terms of Use</a>
          <a href="#accessibility">Accessibility</a>
          <a href="#cookies">Cookies</a>
        </div>
        <div className="footer-column">
          <h5>Help</h5>
          <a href="#support">Support</a>
          <a href="#cancel-booking">Cancel your booking</a>
          <a href="#refund-policies">Refund policies</a>
          <a href="#use-coupon">Use a coupon</a>
          <a href="#travel-documents">Travel documents</a>
        </div>
        <div className="footer-column">
          <h5>More</h5>
          <a href="#airline-fees">Airline fees</a>
          <a href="#airlines">Airlines</a>
          <a href="#low-fare-trips">Low fare trips</a>
          <a href="#badges-certificates">Badges & Certificates</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
