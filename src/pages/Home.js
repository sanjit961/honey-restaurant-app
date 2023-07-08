import React from "react";
import hero from "../img/hero.png";
function Home() {
  return (
    <section class="home" id="home">
      <div class="home-text">
        <h1>
          Meet, <span>Eat &</span> <br /> Enjoy The true <br /> taste
        </h1>
        <a href="#" class="btn">
          Explore Menu<i class="bx bxs-right-arrow"></i>
        </a>
        <a href="#" class="btn2">
          Order Now
        </a>
      </div>
      <div class="home-img">
        <img src={hero} />
      </div>
    </section>
  );
}

export default Home;
