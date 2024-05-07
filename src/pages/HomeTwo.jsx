import {
  Featured,
  Feeds,
  Projects,
  WhatWeDo,
} from "../components/common/page-componets";
import { Filters, Hero, LatestForSale } from "../components/home/home-2";
import Search from "../components/home/home-2/Search";
import {Testimonial}from "../components/home/home-3";

const HomeTwo = () => {
  return (
    <div className="pt-16 px-[3%] md:px-[6%]">
      <Hero />
      <Filters />
      <Projects />
      <WhatWeDo />
      <Featured />
      <LatestForSale />
      <Search />
      <Testimonial />
      <Feeds />
    </div>
  );
};

export default HomeTwo;
