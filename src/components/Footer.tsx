import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-base-200">
      <footer className="max-w-6xl mx-auto footer sm:flex sm:justify-between text-base-content p-10">
        {/* Footer Logo or Name */}
        <div className="mb-6 sm:mb-0">
          <h6 className="footer-title text-xl font-bold">HobbyHub</h6>
          <p className="text-sm text-gray-500">Connect. Create. Community.</p>
        </div>

        {/* Explore Section */}
        <div className="mb-6 sm:mb-0">
          <h6 className="footer-title">Explore</h6>
          <a href="#" className="link link-hover">
            Browse Hobbies
          </a>
          <a href="#" className="link link-hover">
            Find Local Groups
          </a>
          <a href="#" className="link link-hover">
            Create a Group
          </a>
        </div>

        {/* Resources Section */}
        <div className="mb-6 sm:mb-0">
          <h6 className="footer-title">Resources</h6>
          <a href="#" className="link link-hover">
            Blog
          </a>
          <a href="#" className="link link-hover">
            Help Center
          </a>
          <a href="#" className="link link-hover">
            Community Guidelines
          </a>
        </div>

        {/* Legal Section */}
        <div>
          <h6 className="footer-title">Legal</h6>
          <a href="#" className="link link-hover">
            Terms of Use
          </a>
          <a href="#" className="link link-hover">
            Privacy Policy
          </a>
          <a href="#" className="link link-hover">
            Cookie Policy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
