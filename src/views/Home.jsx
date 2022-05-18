import React from "react";
import Hero from "../components/homepage/Hero";
import Header from "../components/homepage/Header";
import Faq from "../components/homepage/Faq";
import Team from "../components/homepage/Team";
import AboutUs from "../components/homepage/AboutUs";
import OurStory from "../components/homepage/OurStory";
import Footer from "../components/homepage/Footer";
import Roadmap from "../components/homepage/Roadmap";

const Home = () => {
  return (
    <div>
      <Header />
      {/* <Hero /> */}
      <OurStory />
      <AboutUs />
      <Roadmap />
      <Team />
      <Faq />
      <Footer />
    </div>
  );
};
export default Home;
