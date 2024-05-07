import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const Search = () => {
  return (
    <div
      className="p-20 flex-align-center flex-wrap gap-10 !bg-cover !bg-no-repeat"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/bgmap.png')",
      }}
    >
      <div className="flex-1 basis-[16rem] bg-white dark:bg-dark-light p-6">
        <h1 className="text-xl font-semibold text-center">
          Search Property Smarter & Quicker On Map 
        </h1>
        <div className="icon-box !opacity-100 mx-auto mt-4 !bg-primary text-white relative before:absolute before:w-full before:h-full before:rounded-full before:top-0 before:bottom-0 before:bg-primary ">
        <Link to="/home2">
          <FaMapMarkerAlt />
        </Link>
        </div>
        <h1 className="mt-3 text-center uppercase text-primary">Click on </h1>
      </div>
      <div className="flex-1 basis-[16rem]">
        <h1 className="font-mono text-3xl font-thin text-slate-100">
          we've been enhancing homes and commercial places.
        </h1>
      </div>
    </div>
  );
};

export default Search;
