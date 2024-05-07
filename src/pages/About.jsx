import Navbar from "../components/common/Navbar";
import {
  AboutUs,
  Team,
  Testimonial,
} from "../components/common/page-componets";
// import {
//   Brands,
//   Feeds,
// } from "../components/common/page-componets";
const About = () => {
  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <AboutUs />
      <Team />
      <Testimonial />
      {/* <Brands /> */}
      {/* <Feeds /> */}
    </div>
  );
};

export default About;
