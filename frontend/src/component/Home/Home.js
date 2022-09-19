import React, { Fragment, useEffect } from "react";
import "./Home.css";
import MetaData from "../layout/MetaData";


const Home = () => {

  return (

    <Fragment>
      <MetaData title="ECOMMERCE & Dashboard" />
      {/* ------------------ Banner ---------------------- */}
      <div class="banner">

        <div class="container">

          <div class="slider-container has-scrollbar">

            <div class="slider-item">

              <img src="../../../images/banner1.png" alt="women's latest fashion sale" class="banner-img" />

              <div class="banner-content">

                <p class="banner-subtitle">New Products Every Week!</p>

                <h2 class="banner-title">Women's latest fashion</h2>

                <p class="banner-text">
                  at the best price
                </p>

                <a href="/products" class="banner-btn">Shop now</a>

              </div>

            </div>

            <div class="slider-item">

              <img src="../../../images/banner2.png" alt="modern sunglasses" class="banner-img" />

              <div class="banner-content">

                <p class="banner-subtitle">Trending accessories</p>

                <h2 class="banner-title">Vast Collection</h2>

                <p class="banner-text">
                  starting at just <b>30</b>/-
                </p>

                <a href="/products" class="banner-btn">Shop now</a>

              </div>

            </div>

            <div class="slider-item">

              <img src="../../../images/banner3.png" alt="new fashion summer sale" class="banner-img" />

              <div class="banner-content">

                <p class="banner-subtitle">Happy Customers</p>

                <h2 class="banner-title">Read what people have to say about us!</h2>

                <p class="banner-text">
                  Read here
                </p>

                <a href="/about" class="banner-btn">Testimoties</a>

              </div>

            </div>

          </div>

        </div>

        {/* ---------------- Category ------------------- */}

        <div class="category">

          <div class="container">

            <div class="category-item-container has-scrollbar">

              <div class="category-item">

                <div class="category-img-box">
                  <img src="../../../images/icons/dress.svg" alt="frock" width="30" />
                </div>

                <div class="category-content-box">

                  <div class="category-content-flex">
                    <h3 class="category-item-title">Dress & frock</h3>

                    {/* <p class="category-item-amount">(53)</p> */}
                  </div>

                  <a href="/products/frock" class="category-btn">Show all</a>

                </div>

              </div>

              <div class="category-item">

                <div class="category-img-box">
                  <img src="../../../images/icons/shorts.svg" alt="shorts & jeans" width="30" />
                </div>

                <div class="category-content-box">

                  <div class="category-content-flex">
                    <h3 class="category-item-title">Shorts & jeans</h3>

                    {/* <p class="category-item-amount">(84)</p> */}
                  </div>

                  <a href="/products/jeans" class="category-btn">Show all</a>

                </div>

              </div>

              <div class="category-item">

                <div class="category-img-box">
                  <img src="../../../images/icons/tee.svg" alt="t-shirts" width="30" />
                </div>

                <div class="category-content-box">

                  <div class="category-content-flex">
                    <h3 class="category-item-title">T-shirts</h3>

                    {/* <p class="category-item-amount">(35)</p> */}
                  </div>

                  <a href="/products/tshirt" class="category-btn">Show all</a>

                </div>

              </div>

              <div class="category-item">

                <div class="category-img-box">
                  {/* <a target="_blank" href="https://icons8.com/icon/Euh7KJO4xRh6/accesory">Accesory</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
                  <img src="../../../images/icons/accessories.png" alt="jacket" width="30" />
                </div>

                <div class="category-content-box">

                  <div class="category-content-flex">
                    <h3 class="category-item-title">Accessories</h3>

                    {/* <p class="category-item-amount">(16)</p> */}
                  </div>

                  <a href="/products/earrings" class="category-btn">Show all</a>

                </div>

              </div>

            </div>

          </div>

        </div>


      </div>

    </Fragment >
  );
};

export default Home;
