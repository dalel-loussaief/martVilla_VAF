import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import CountUp from 'react-countup';

const Hero = () => {
  return (
    <div
      className="relative flex-wrap min-h-screen gap-2 md:-mt-10 flex-center-center"
      style={{
        background: "url('/images/hero-bg-pattern.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="absolute top-0 right-0 rounded-full bg-[#04a7ff]/30 dark:bg-[#04a7ff]/50 w-72 h-72 -z-10 blur-[120px]"></div>
      <div className="flex-1 basis-[30rem]">
        <h1 className="text-4xl font-bold capitalize md:text-5xl">
          find your dream <br /> home right away
        </h1>
        <div className="pl-3 mt-5 border-l-4 border-primary">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nulla
            unde exercitationem! Recusandae error quaerat sapiente quibusdam
            culpa magni eius?
          </p>
        </div>
        <div className="mt-6 flex-align-center gap-x-3">
          <Link to="/property-6">
            <button className="btn btn-primary">find property</button>
          </Link>          <button className="px-2 py-2 rounded-md btn-secondary">
            <FiArrowRight />
          </button>
        </div>
        <div className="mt-6 overflow-hidden rounded-lg  flex-align-center ">
          <div className="mt-6 text-center flex-align-center gap-x-6">
            <div>
              <h1 className="text-2xl font-bold">
                <CountUp start={0} end={12} duration={10}></CountUp>k <span className="text-sm text-primary">+</span>
              </h1>
              <p>Requested Projects</p>
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                <CountUp start={0} end={15} duration={10}></CountUp>k <span className="text-sm text-primary">+</span>
              </h1>
              <p>Projects Completed</p>
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                <CountUp start={0} end={100} duration={10}></CountUp> <span className="text-sm text-primary">+</span>
              </h1>
              <p>Served Clients</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 basis-[20rem] h-full">
        <img
          src="/images/hero-5.jpeg"
          alt=""
          className="w-full h-fit  md:h-[80vh] rounded-xl object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
