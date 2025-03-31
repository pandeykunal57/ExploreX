import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Country } from "../../pages/Country";

export const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
          Journey Through the World, One Country at a Time.
          </h1>
          <p className="paragraph">
          Uncover the history, culture, and beauty of every nation. Easily sort, search, and filter countries to find the information you need.
          </p>
            <NavLink to="Country">
            <button className="btn btn-darken btn-inline bg-white-box">
              Start Exploring <FaLongArrowAltRight />
            </button>
            </NavLink>
        </div>
        <div className="hero-image">
          <img
            src="/images/world.png"
            alt="world is beauty"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
};
