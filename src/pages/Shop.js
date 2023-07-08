import React from 'react'
import p1 from "../img/p1.png";
import p2 from "../img/p2.png";
import p3 from "../img/p3.png";
import p4 from "../img/p4.png";
function Shop() {
  return (
    <section class="shop" id="shop">
        <div class="middle-text">
            <h4>Our Shop</h4>
            <h2>Let's Check Popular Products</h2>
        </div>
        <div class="shop-content">
            <div class="row">
                <img src={p1} alt=""/>
                <h3>Blueberry Honey</h3>
                <p>It is a long established fact that a reader</p>
                <div class="in-text">
                    <div class="price">
                        <h6>$21.00</h6>
                    </div>
                    <div class="s-btnn">
                        <a href="#">Order Now</a>
                    </div>
                </div>
                <div class="top-icon">
                    <a href="#"><i class="bx bx-heart"></i></a>
                </div>
            </div>
            <div class="row">
                <img src={p2} alt=""/>
                <h3>Blueberry Honey</h3>
                <p>It is a long established fact that a reader</p>
                <div class="in-text">
                    <div class="price">
                        <h6>$21.00</h6>
                    </div>
                    <div class="s-btnn">
                        <a href="#">Order Now</a>
                    </div>
                </div>
                <div class="top-icon">
                    <a href="#"><i class="bx bx-heart"></i></a>
                </div>
            </div>
            <div class="row">
                <img src={p3} alt=""/>
                <h3>Blueberry Honey</h3>
                <p>It is a long established fact that a reader</p>
                <div class="in-text">
                    <div class="price">
                        <h6>$21.00</h6>
                    </div>
                    <div class="s-btnn">
                        <a href="#">Order Now</a>
                    </div>
                </div>
                <div class="top-icon">
                    <a href="#"><i class="bx bx-heart"></i></a>
                </div>
            </div>
            <div class="row">
                <img src={p4} alt=""/>
                <h3>Blueberry Honey</h3>
                <p>It is a long established fact that a reader</p>
                <div class="in-text">
                    <div class="price">
                        <h6>$21.00</h6>
                    </div>
                    <div class="s-btnn">
                        <a href="#">Order Now</a>
                    </div>
                </div>
                <div class="top-icon">
                    <a href="#"><i class="bx bx-heart"></i></a>
                </div>
            </div>
        </div>
        <div class="row-btn">
            <a href="#" class="btn">All Products<i class='bx bxs-right-arrow'></i></a>
        </div>
    </section>
  )
}

export default Shop
