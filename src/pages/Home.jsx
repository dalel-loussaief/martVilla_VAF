// import Navbar2 from "../components/common/Navbar2";
import Navbar from "../components/common/Navbar";
import {
  // Brands,
  Counter,
  Featured,
  Projects,
  Services,
  Testimonial,
  WhatWeDo ,
} from "../components/common/page-componets";
import {
  Feeds,
  Filters,
  Invest,
  Speciality,
} from "../components/home/home-1";
import Search from "../components/home/home-2/Search";
import {
  Hero
} from "../components/home/home-2";

const Home = () => {
  return (
    <div className="pt-16 px-[3%] md:px-[6%]">
      <Hero/>
      <Filters />
      <br/>
      <Search/>
      {/* <Invest /> */}
      <Speciality />
      <Services />
      <Featured />
      <Counter />
      <Projects />
      <Testimonial />
      {/* <Brands /> */}
      <Feeds />
    </div>
  );
};

export default Home;
