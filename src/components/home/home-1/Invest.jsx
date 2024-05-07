import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Invest = () => {
  return (
    <div className="pt-20 pb-16 bg-cover bg-center relative" style={{ backgroundImage: 'url(/images/google-map3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '400px' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-2xl font-semibold text-center">
          You can search about your property on the map
          <Link to="/Map">
            <button className="px-2 py-2 rounded-md btn-primary ml-3">
              <FiArrowRight />
            </button>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Invest;
