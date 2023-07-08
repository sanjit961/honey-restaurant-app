import React from "react";
import c1 from "../img/c1.png";
import c2 from "../img/c2.png";
import c3 from "../img/c2.png";
function Info() {
  return (
    <section class="container">
      <div class="container-box">
        <img src={c1} alt="" />
        <h3>11:00 A.M. - 8:00 P.M.</h3>
        <a href="#">Working Hours</a>
      </div>
      <div class="container-box">
        <img src={c2} alt="" />
        <h3>Honey Springs 555</h3>
        <a href="#">Get Directions</a>
      </div>
      <div class="container-box">
        <img src={c3} alt="" />
        <h3>(555)-111234567</h3>
        <a href="#">Call Us Now</a>
      </div>
    </section>
  );
}

export default Info;
