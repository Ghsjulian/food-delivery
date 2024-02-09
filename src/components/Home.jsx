import React from "react";
import {Link} from "react-router-dom"
import AllFood from "./AllFood"
import Hero from "./Hero"
import scrollTop from "../layouts/ScrollTop";
const Home = () => {
  scrollTop()
  document.title="Food Delivery System | Welcome To Our Food Community Service"
    return (
      <>
      <Hero/>
      <AllFood/>
      </>
      )
};

export default Home;
