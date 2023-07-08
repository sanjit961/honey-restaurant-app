import React from 'react'
import r1 from "../img/r1.jpg";
import r2 from "../img/r2.jpg";
import r3 from "../img/r3.jpg";
function Reviews() {
  return (
    <section class="review" id="review">
    <div class="middle-text">
        <h4>Our Customer</h4>
        <h2>Clients Review About Our Food</h2>
    </div>
    <div class="review-content">
        <div class="box">
            <p>The taste is still in my mouth and I can feel the depth of the taste of the every ingredients used in
                the food. I really love fafo.
            </p>
            <div class="in-box">
                <div class="box-img">
                    <img src={r1} alt=""/>
                </div>
                <div class="bxx-text">
                    <h4>John Karter</h4>
                    <h5>Food Vlogger</h5>
                    <div class="ratings">
                        <a href="#"><i class="bx bxs-star"></i></a>
                        <a href="#"><i class="bx bxs-star"></i></a>
                        <a href="#"><i class="bx bxs-star"></i></a>
                        <a href="#"><i class="bx bxs-star"></i></a>
                        <a href="#"><i class="bx bxs-star"></i></a>
                    </div>
                </div>

            </div>
        </div>
        <div class="box">
            <p>The taste is still in my mouth and I can feel the depth of the taste of the every ingredients used in
                the food. I really love fafo.
            </p>
            <div class="in-box">
                <div class="box-img">
                    <img src={r2} alt=""/>
                </div>
                <div class="bxx-text">
                    <h4>John Karter</h4>
                    <h5>Food Vlogger</h5>
                    <div class="ratings">
                        <a href="#"><i class="bx bxs-star"></i></a>
                        <a href="#"><i class="bx bxs-star"></i></a>
                        <a href="#"><i class="bx bxs-star"></i></a>
                        <a href="#"><i class="bx bxs-star"></i></a>
                        <a href="#"><i class="bx bxs-star"></i></a>
                    </div>
                </div>

            </div>
        </div>
        <div class="box">
            <p>The taste is still in my mouth and I can feel the depth of the taste of the every ingredients used in
                the food. I really love fafo.
            </p>
            <div class="in-box">
                <div class="box-img">
                    <img src={r3} alt=""/>
                </div>
                <div class="bxx-text">
                    <h4>John Karter</h4>
                    <h5>Food Vlogger</h5>
                    <div class="ratings">
                        <a href="#"><i class="bx bxs-star"></i></a>
                        <a href="#"><i class="bx bxs-star"></i></a>
                        <a href="#"><i class="bx bxs-star"></i></a>
                        <a href="#"><i class="bx bxs-star"></i></a>
                        <a href="#"><i class="bx bxs-star"></i></a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
  )
}

export default Reviews
