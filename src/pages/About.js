import React from "react";
import about from "../img/about.png"
function About() {
  return (
    <section class="about" id="about">
      <div class="about-img">
        <img src={about} alt="" />
      </div>
      <div class="about-text">
        <h2>
          Living well begins <br /> with eating well.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe labore
          dolores, ea natus ipsum eveniet impedit consequuntur commodi delectus
          ipsam reiciendis eius molestias iure laboriosam id facere corporis a
          fugiat possimus praesentium in. Temporibus adipisci tenetur, <br />{" "}
          <br /> repellendus ad porro repudiandae? Minima, cumque? Neque porro
          veritatis iste quis, maiores sunt illum.
        </p>
        <a href="#" class="btn">
          Explore Story<i class="bx bxs-right-arrow"></i>
        </a>
      </div>
    </section>
  );
}

export default About;
