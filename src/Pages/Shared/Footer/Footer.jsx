
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
    <aside>
      <img className="footer-img" src="https://i.ibb.co/7SYmYHG/logo.png" alt="" />
      <p>hello@demogoldsmith.com</p>
      <div className="card-actions justify-start">
        <div className="flex gap-6">
          <Link
            className="flex justify-center items-center mt-2 w-[30px] h-[30px] text-gray-700 hover:text-gray-900 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400  dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
            target="_blank"
            to="https://www.facebook.com/"
          >
            {" "}
            <FaFacebook />
          </Link>
          <Link
            className="flex justify-center items-center mt-2 w-[30px] h-[30px] text-gray-700 hover:text-gray-900  rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400  dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
            target="_blank"
            to="https://github.com/mdjewel999"
          >
            <FaGithub />
          </Link>
          <Link
            className="flex justify-center items-center mt-2 w-[30px] h-[30px] text-gray-700 hover:text-gray-900  rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400  dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
            target="_blank"
            to="https://www.linkedin.com/in/md-jewel-954986250/"
          >
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </aside>
    <nav>
      <header className="footer-title">About Wooma</header>
      <a className="link link-hover">Wooma Inside</a>
      <a className="link link-hover">About Us</a>
      <a className="link link-hover">Company</a>
      <a className="link link-hover">Careers</a>
      <a className="link link-hover">Brands</a>
    </nav>
    <nav>
      <header className="footer-title">Categories</header>
      <a className="link link-hover">Rings</a>
      <a className="link link-hover">Accessories</a>
      <a className="link link-hover">Earrings</a>
      <a className="link link-hover">Gold Buckle</a>
      <a className="link link-hover">Bracelets</a>
    </nav>
    <nav>
      <header className="footer-title">Campaigns</header>
      <a className="link link-hover">Winter Shoes</a>
      <a className="link link-hover">%50 Sales</a>
      <a className="link link-hover">Outlet</a>
      <a className="link link-hover">Pre-Sale</a>
    </nav>
    <nav>
      <header className="footer-title">Help</header>
      <a className="link link-hover">Order Tracking</a>
      <a className="link link-hover">Terms & Conditions</a>
      <a className="link link-hover">Privacy Policy</a>
      <a className="link link-hover">Tutorials</a>
      <a className="link link-hover">FAQ</a>
    </nav>
  </footer>
    
  );
};

export default Footer;
