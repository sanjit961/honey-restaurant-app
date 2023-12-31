import React from "react";

function Header() {
  return (
    <header>
      <a href="#" class="logo">
        <i class="bx bxs-home"></i>Honey
      </a>
      <ul class="navlist">
        <li>
          <a href="#home" class="active">
            Home
          </a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#shop">Our Shop</a>
        </li>
        <li>
          <a href="#review">Our Customer</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
      <div class="nav-icons">
        <a href="#">
          <i class="bx bx-search"></i>
        </a>
        <a href="#">
          <i class="bx bx-cart"></i>
        </a>
        <div class="bx bx-menu" id="menu-icon"></div>
      </div>
    </header>
  );
}

export default Header;
