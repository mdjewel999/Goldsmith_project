// import React from 'react';
import "./Qustion.css";
import { Link } from "react-router-dom";

const Qustion = () => {
  return (
    <>
      <div className="bg-base-200">
        <div>
          <h1 className="text-3xl font-bold">
            ********************User Authentication:*******************
          </h1>
          <p className="py-6">
            Implement a secure user authentication system that allows users to
            register and log in to your website. Users can register with their
            name, email, password, and optionally provide additional information
            like a profile picture, gender, phone number, and address. Provide
            password security measures such as password confirmation and the
            ability to hide/unhide the password.
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold">
            **********************Jewelry Catalog:********************
          </h1>
          <p className="py-6">
            Create a visually appealing catalog of jewelry items that users can
            browse. Display jewelry items with images, titles, prices, and brief
            descriptions. Implement categories and filters for easy jewelry
            navigation. Allow users to click on jewelry items to view detailed
            product information.
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold">
            ***********************User Profile:******************
          </h1>
          <p className="py-6">
            Provide registered users with a profile section where they can
            update their personal information, including name, photo, gender,
            phone number, and address. Users can view their purchase history or
            saved items if applicable. Display the users profile picture in the
            websits navbar.
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold">
            *****************************Blog Section:***********************
          </h1>
          <p className="py-6">
            Include a blog section where you can regularly publish articles
            related to jewelry, fashion, or related topics. Users can read and
            comment on blog posts. Implement a user-friendly interface for blog
            browsing and searching.
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold">
            *************************Responsive Design and
            Navigation:********************
          </h1>
          <p className="py-6">
            Ensure that your website has a responsive design that adapts to
            various screen sizes and devices. Implement a user-friendly
            navigation menu in the websites navbar with links to Home, All
            Jewelry, My Jewelry, Add Jewelry, Blogs, and the users profile.
            Keep the navbar and a stylish footer consistent across all pages
            except the 404 error page. Design the website with a visually
            appealing color scheme, proper alignment, and adequate spacing to
            enhance the user experience.
          </p>
        </div>
        <div className="text-center mt-4 mb-8">
          <Link to="/">
            <button className="btn btn-primary">Back to homepage</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Qustion;
