import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center">
      <span className="loading loading-spinner loading-xl"></span>
    </div>
  );
};

export default Loader;
