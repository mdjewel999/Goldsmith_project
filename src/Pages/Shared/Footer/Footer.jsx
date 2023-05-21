// import React from 'react';
import logo from '../../../assets/logo.svg'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <footer className="footer p-10  text-base-content h-auto">
      <div>
       <img className='logo_img' src={logo} alt="" />
        <p className='text-white font-bold'>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 2023
        </p>
      </div>
      <div className='footer-text'>
        <span className="footer-title text-white font-bold">Services</span>
        <a className="link link-hover text-white font-bold">sports car</a>
        <a className="link link-hover text-white font-bold">Truck</a>
        <a className="link link-hover text-white font-bold"> Regular car</a>
        <a className="link link-hover text-white font-bold">Mini fire truck</a>
      </div>
      <div>
        <span className="footer-title text-white font-bold">Company</span>
        <a className="link link-hover text-white font-bold">AToyota</a>
        <a className="link link-hover text-white font-bold">Volkswagen</a>
        <a className="link link-hover text-white font-bold">Honda</a>
        <a className="link link-hover text-white font-bold">BMW</a>
      </div>
      <div>
        <span className="footer-title text-white font-bold">Legal</span>
        <a className="link link-hover text-white font-bold">Terms of use</a>
        <a className="link link-hover text-white font-bold">Privacy policy</a>
        <a className="link link-hover text-white font-bold">Cookie policy</a>
      </div>
    </footer>
    
    </div>
    <div className='footer_last'>
      <p className='text-center text-2xl'>Things for Cuties © 2022 / 2023 - Template by ssievert</p>
    </div>
    </div>
    
  );
};

export default Footer;
