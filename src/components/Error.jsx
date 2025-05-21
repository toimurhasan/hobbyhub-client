import React from "react";

const Error = () => {
  return (
    <div className="h-[calc(100vh-(65px+220px))] flex flex-col justify-center items-center text-gray-600 italic">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );
};

export default Error;
