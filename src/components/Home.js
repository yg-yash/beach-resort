import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Dashboard/Hero";
import heroStyles from "./Dashboard/Hero.module.css";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import FeaturedRooms from "./Rooms/FeaturedRooms";

export default function Home() {
  return (
    <>
      <Hero hero={heroStyles.DefaultHero}>
        <Banner title="Luxurious Rooms" subTitle="deluxe room starting at $299">
          <Link to="/rooms" className="btn-primary">
            Our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}
