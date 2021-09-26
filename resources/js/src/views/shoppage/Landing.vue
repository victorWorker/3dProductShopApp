<template>
  <div class="w-full">
    <div class="vx-row">
      <div class="vx-col w-full landingContent">
        <swiper :options="swiperOption" dir="ltr">
          <swiper-slide>
            <parallax :speed-factor="0.5" direction="up" :parallax="true">
              <img src="@assets/images/padHolder/restaurant.jpg" alt=""> 
            </parallax>
            <div class="pallaxTextContent">
              <div class="pallaxTextBody xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5">
                <span class="pallaxSpan text-white">Is There Such a Things Too many Tablelets?</span>
                <br>
                <vs-button color="White" size="large" type="border" class="mt-3">Shop Now</vs-button>

              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <parallax :speed-factor="0.5" direction="up" :parallax="true">
              <img src="@assets/images/padHolder/padImg.jpg" alt=""> 
            </parallax>
            <div class="pallaxTextContent">
              <div class="pallaxTextBody xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5">
                <span class="pallaxSpan text-white">My Test Tablelet Holders</span>
                <br>
                <vs-button color="White" size="large" type="border" class="mt-3">Shop Now</vs-button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <parallax :speed-factor="0.5" direction="up" :parallax="true">
              <img src="@assets/images/padHolder/medical.jpg" alt=""> 
            </parallax>
            <div class="pallaxTextContent">
              <div class="pallaxTextBody xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5">
                <span class="pallaxSpan text-dark">It is work with Medical</span>
                <br>
                <vs-button color="dark" size="large" type="border" class="mt-3">Shop Now</vs-button>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <!-- New Products -->
      <div class="vx-col w-full newProducts">
        <div class="vx-row">
          <div class="vx-col xl:w-1/2 lg:w-1/2 md:w-1/2 w-1/2">
            <span class="newProdTitle">
              New Products
            </span>
          </div> 
          <div class="vx-col xl:w-1/2 lg:w-1/2 md:w-1/2 w-1/2 flex items-end justify-end">
              <a class="viewShop" href="#">All Products</a>
          </div>
        </div>
        <div class="vx-row mt-3">
          <div class="vx-col xl:w-1/4 lg:w-1/4 md:w-1/2 w-10/12">
            <vx-card class="productCard">
              <div class="padScreen">
                <div class="productImage">
                  <img src="@assets/images/padHolder/productTest.jpg" width="340" height="200" alt="">
                </div>
              </div>
              <div class="sticker">
                <div>i</div>
              </div>
              <div class="series">
                <span class="price">$ 33</span>
                <span class="cartBtn">Add to Cart</span>
              </div>
            </vx-card>
          </div>
          <div class="vx-col xl:w-1/4 lg:w-1/4 md:w-1/2 w-10/12">
            <vx-card class="productCard">
              <div class="padScreen">
                <div class="productImage">
                  <img src="@assets/images/padHolder/productTest.jpg" width="340" height="200" alt="">
                </div>
              </div>
              <div class="sticker">
                <div>i</div>
              </div>
              <div class="series">
                <span class="price">$ 33</span>
                <span class="cartBtn">Add to Cart</span>
              </div>
            </vx-card>
          </div>
          <div class="vx-col xl:w-1/4 lg:w-1/4 md:w-1/2 w-10/12">
            <vx-card class="productCard">
              <div class="padScreen">
                <div class="productImage">
                  <img src="@assets/images/padHolder/productTest.jpg" width="340" height="200" alt="">
                </div>
              </div>
              <div class="sticker">
                <div>i</div>
              </div>
              <div class="series">
                <span class="price">$ 33</span>
                <span class="cartBtn">Add to Cart</span>
              </div>
            </vx-card>
          </div>
          <div class="vx-col xl:w-1/4 lg:w-1/4 md:w-1/2 w-10/12">
            <vx-card class="productCard">
              <div class="padScreen">
                <div class="productImage">
                  <img src="@assets/images/padHolder/productTest.jpg" width="340" height="200" alt="">
                </div>
              </div>
              <div class="sticker">
                <div>i</div>
              </div>
              <div class="series">
                <span class="price">$ 33</span>
                <span class="cartBtn">Add to Cart</span>
              </div>
            </vx-card>
          </div>
        </div>
      </div>
      <!-- Title Logo -->
      <div class="vx-col w-full logoTitle">
        <div class="text-cover">
          <span class="logoTitleText">Let`s make Something new</span>
        </div>
      </div>
      <div class="vx-col w-full categories">
        <div class="vx-row">
          <div class="vx-col xl:w-2/3 lg:w-2/3 md:w-2/3 w-2/3">
            <img class="category_Img" src="@assets/images/padHolder/mount.png" alt="">
          </div>
          <div class="vx-col xl:w-1/3 lg:w-1/3 md:w-1/3 w-1/3">
            <div class="vx-col xl:w-1/2 lg:w-1/2 md:w-1/2 w-1/2">
              <img class="category_Img" src="@assets/images/padHolder/holder.jpg" alt="">
            </div>
            <div class="vx-col xl:w-1/2 lg:w-1/2 md:w-1/2 w-1/2">
              <img class="category_Img" src="@assets/images/padHolder/stand.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Parallax from "vue-parallaxy";
export default {
  components: {
    Parallax,
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        spaceBetween: 0,
        centeredSlides: true,
        effect: 'fade',
        autoplay: {
            delay: 7000,
            disableOnInteraction: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
      }
    }
  }
}
</script>

<style scoped>
.landingContent{
  height: 100vh;
}
.pallaxTextContent{
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  padding-top: 220px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.pallaxTextBody{
  position: relative;
  z-index: 5000 !important;
  padding: 25px 100px;
  margin-top: -100px;
  text-align: center;
  display: block;
}
.pallaxSpan{
    font: normal normal normal 90px/1.4em forum, serif;
    /* font-size: 40px !important; */
    font-weight: 600;
    text-shadow: 1px 2px 15px #797979;
}
.newProducts{
  padding: 50px 50px;
}
.newProdTitle {
  font-size: 30px;
  font-weight: bold;
}
.viewShop {
  font-size: 15px;
  text-decoration: underline;
}
.logoTitle{
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px;
}
.logoTitleText{
  font-size: 150px;
  font-family: forum;
  color: white;
  outline: 1;
}
.category_Img{
  width: 100%;
}
</style>