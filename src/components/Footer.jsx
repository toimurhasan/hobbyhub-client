import React from "react";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <footer className="justify-between max-w-6xl mx-auto footer sm:footer-horizontal  text-base-content p-10">
        <nav>
          <h6 className="footer-title">Explore</h6>
          <a className="link link-hover">Browse Hobbies</a>
          <a className="link link-hover">Find Local Groups</a>
          <a className="link link-hover">Create a Group</a>
          <a className="link link-hover">Upcoming Events</a>
        </nav>
        <nav>
          <h6 className="footer-title">About Us</h6>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Community Guidelines</a>
          <a className="link link-hover">Report a Group</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
