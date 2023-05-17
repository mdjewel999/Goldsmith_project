// import React from 'react';
import logo from '../../../assets/logo.svg'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <footer className="footer p-10  text-base-content h-auto">
      <div>
       <img className='logo_img' src={logo} alt="" />
        <p className='text-white font-bold'>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </div>
      <div>
        <span className="footer-title text-white font-bold">Services</span>
        <a className="link link-hover text-white font-bold">Branding</a>
        <a className="link link-hover text-white font-bold">Design</a>
        <a className="link link-hover text-white font-bold">Marketing</a>
        <a className="link link-hover text-white font-bold">Advertisement</a>
      </div>
      <div>
        <span className="footer-title text-white font-bold">Company</span>
        <a className="link link-hover text-white font-bold">About us</a>
        <a className="link link-hover text-white font-bold">Contact</a>
        <a className="link link-hover text-white font-bold">Jobs</a>
        <a className="link link-hover text-white font-bold">Press kit</a>
      </div>
      <div>
        <span className="footer-title text-white font-bold">Legal</span>
        <a className="link link-hover text-white font-bold">Terms of use</a>
        <a className="link link-hover text-white font-bold">Privacy policy</a>
        <a className="link link-hover text-white font-bold">Cookie policy</a>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
