import React from 'react'
import f1 from "../img/f1.png";
import f2 from "../img/f2.png";
function Contact() {
  return (
    <section class="contact" id="contact">
        <div class="contact-content">
            <div class="contact-img">
                <div class="c-one">
                    <img src={f1} alt=""/>
                </div>
                <div class="c-one">
                    <img src={f2} alt=""/>
                </div>
            </div>
            <div class="contact-text">
                <h2>Contact Us</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos non iure quam. Vel deserunt
                    nam dolorum blanditiis expedita distinctio fugiat id quas autem. Illum sed blanditiis tempora
                    temporibus maxime?
                </p>
                <div class="social">
                    <a href="#" class="clr"><i class="bx bxl-instagram-alt"></i></a>
                    <a href="#"><i class="bx bxl-facebook"></i></a>
                    <a href="#"><i class="bx bxl-twitter"></i></a>
                    <a href="#"><i class="bx bxl-github"></i></a>
                    <a href="#"><i class="bx bxl-google"></i></a>
                </div>
                <div class="details">
                    <div class="main-d">
                        <a href="#"><i class="bx bxs-location-plus"></i>Main Street 55, ny, ny</a>
                    </div>
                    <div class="main-d">
                        <a href="#"><i class="bx bxs-mobile"></i>+919789744454</a>
                    </div>
                    <div class="main-d">
                        <a href="#"><i class="bx bxl-youtube"></i>Sanjit Lungeli</a>
                    </div>
                    <div class="main-d">
                        <a href="#"><i class="bx bxs-bell"></i>Youtube</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
