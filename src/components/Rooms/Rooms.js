import React from "react";
import Hero from "../Dashboard/Hero";
import heroStyles from "../Dashboard/Hero.module.css";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "./RoomsContainer";

const Rooms = () => {
  return (
    <>
      <Hero hero={heroStyles.RoomsHero}>
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
