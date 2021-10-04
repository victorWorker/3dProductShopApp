<template>
  <div class="w-full">
    <div class="vx-row">
      <div class="vx-col w-full landingContent">
        <swiper :options="swiperOption" dir="ltr">
          <swiper-slide>
            <parallax :speed-factor="0.15" direction="up" :fixed="true" :parallax="true">
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
            <parallax :speed-factor="0" direction="up" :parallax="true">
              <img src="@assets/images/padHolder/padImg.jpg" alt="" style="height: 100vh"> 
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
            <parallax :speed-factor="0" direction="up" :parallax="true">
              <img src="@assets/images/padHolder/medical.jpg" alt="" style="height: 100vh"> 
            </parallax>
            <div class="pallaxTextContent">
              <div class="pallaxTextBody xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5">
                <span class="pallaxSpan text-dark">It works with Medical</span>
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
                  <img src="@assets/images/padHolder/productTest.jpg" alt="">
                  <div class="productName"><span> product name</span></div>
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
                  <img src="@assets/images/padHolder/productTest.jpg" alt="">
                  <div class="productName"><span> product name</span></div>
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
                  <img src="@assets/images/padHolder/productTest.jpg" alt="">
                  <div class="productName"><span> product name</span></div>
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
                  <img src="@assets/images/padHolder/productTest.jpg" alt="">
                  <div class="productName"><span> product name</span></div>
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
      <div class="vx-col w-full">
        <div class="vx-row categories">
          <div class="vx-col xl:w-3/4 lg:w-3/4 md:w-3/4 w-3/4 px-0 categoryItem h-full">
            <div class="category_img1"></div>
            <div class="category_text">
              <span>Mount</span>
            </div>
          </div>
          <div class="vx-col xl:w-1/4 lg:w-1/4 md:w-1/4 w-1/4 h-full">
            <div class="vx-col w-full px-0 pb-2 categoryItem height-50">
              <div class="category_img2"></div>
              <div class="category_text">
                <span>Holder</span>
              </div>
            </div>
            <div class="vx-col w-full px-0 pt-2 categoryItem height-50">
              <div class="category_img3"></div>
              <div class="category_text">
                <span>stand</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="vx-col aboutLanding w-full">
        <div class="vx-row maskLanding h-full">
          <div class="vx-col xl:w-2/3 lg:w-2/3 md:w-1/2 w-10/12 text-center">
            <span>Let`s Make Somthing New</span>
            <p>At PadHolder, we custom design, develop, and produce high quality products to meet your demands. We can bring your ideas to life.</p>
            <router-link to="/about">
              <Button>About Us</Button>            
            </router-link>
          </div>
        </div>
      </div>
      <div class="vx-col blogLanding w-full">
        <div class="vx-row firstBar px-6 w-full">
          <div class="vx-col">
            <span>Our Blog</span>
          </div>
          <div class="vx-col">
            <button type="button">View All</button>
          </div>
        </div>
        <div class="vx-row sendBar px-6 pt-6 w-full">
          <div class="vx-col xl:w-1/3 lg:w-1/3 md:w-1/2 w-4/12 text-start">
            <vx-card class="BlogCard">
              <div slot="no-body">
                  <img src="@assets/images/padHolder/blog1.jpg" alt="blog-img" class="blogImg responsive card-img-top">
              </div>
              <h1 class="mb-2 blogHead">Rugged table vs.</h1>
              <div class="text-grey blogText">
                You’ve finally made the decision to upgrade your warehouse to electronic data logging, now what? Do you choose a rugged tablet, mobile computer or a consumer device? More importantly, how will you house and mount these electronics to protect your investment? Here are a few questions to ask yourself before diving in head first.
              </div>
              <div class="flex justify-end flex-wrap">
                  <vs-button class="mt-4" type="border" color="#b9b9b9">Read More</vs-button>
              </div>
            </vx-card>
          </div>
          <div class="vx-col xl:w-1/3 lg:w-1/3 md:w-1/2 w-4/12 text-start">
            <vx-card class="BlogCard">
              <div slot="no-body">
                  <img src="@assets/images/padHolder/blog2.jpg" alt="blog-img" class="blogImg responsive card-img-top">
              </div>
              <h1 class="mb-2 blogHead">Are you eld complaint? The Deadline is coming... Fast</h1>
              <div class="text-grey blogText">
                You’ve finally made the decision to upgrade your warehouse to electronic data logging, now what? Do you choose a rugged tablet, mobile computer or a consumer device? More importantly, how will you house and mount these electronics to protect your investment? Here are a few questions to ask yourself before diving in head first.
              </div>
              <div class="flex justify-end flex-wrap">
                  <vs-button class="mt-4" type="border" color="#b9b9b9">Read More</vs-button>
              </div>
            </vx-card>
          </div>
          <div class="vx-col xl:w-1/3 lg:w-1/3 md:w-1/2 w-4/12 text-start">
            <vx-card class="BlogCard">
              <div slot="no-body">
                  <img src="@assets/images/padHolder/blog3.jpg" alt="blog-img" class="blogImg responsive card-img-top">
              </div>
              <h1 class="mb-2 blogHead">Nintendo switch headrest mount</h1>
              <div class="text-grey blogText">
                Many people are very excited to see what Nintendo has in store for us with their new Switch coming out in March. One thing that we have got some reaction to is if we will be manufacturing a mount so you can use the Switch in your vehicle, and the answer is YES! 
              </div>
              <div class="flex justify-end flex-wrap">
                  <vs-button class="mt-4" type="border" color="#b9b9b9">Read More</vs-button>
              </div>
            </vx-card>
          </div>
        </div>
      </div>
      <div class="vx-col industialLanding w-full">
        <div class="vx-row px-6 w-full">
          <div class="vx-col text-center w-full">
            <h1>Industries</h1>
          </div>
        </div>
        <div class="vx-row px-6 w-full">
          <div class="vx-col xl:w-1/4 lg:w-1/4 md:w-1/2 w-10/12 mt-6">
            <vx-card class="overlay-card overflow-hidden">
              <template slot="no-body">
                  <img src="@assets/images/padHolder/industrial1.png" alt="industrial-cover" class="industyImg responsive">
              </template>
            </vx-card>
          </div>
          <div class="vx-col xl:w-1/4 lg:w-1/4 md:w-1/2 w-10/12 mt-6">
            <vx-card class="overlay-card overflow-hidden">
              <template slot="no-body">
                  <img src="@assets/images/padHolder/industrial2.png" alt="industrial-cover" class="industyImg responsive">
              </template>
            </vx-card>
          </div>
          <div class="vx-col xl:w-1/4 lg:w-1/4 md:w-1/2 w-10/12 mt-6">
            <vx-card class="overlay-card overflow-hidden">
              <template slot="no-body">
                  <img src="@assets/images/padHolder/industrial3.png" alt="industrial-cover" class="industyImg responsive">
              </template>
            </vx-card>
          </div>
          <div class="vx-col xl:w-1/4 lg:w-1/4 md:w-1/2 w-10/12 mt-6">
            <vx-card class="overlay-card overflow-hidden">
              <template slot="no-body">
                  <img src="@assets/images/padHolder/industrial4.png" alt="industrial-cover" class="industyImg responsive">
              </template>
            </vx-card>
          </div>
          <div class="vx-col xl:w-1/4 lg:w-1/4 md:w-1/2 w-10/12 mt-6">
            <vx-card class="overlay-card overflow-hidden">
              <template slot="no-body">
                  <img src="@assets/images/padHolder/industrial5.png" alt="industrial-cover" class="industyImg responsive">
              </template>
            </vx-card>
          </div>
          <div class="vx-col xl:w-1/4 lg:w-1/4 md:w-1/2 w-10/12 mt-6">
            <vx-card class="overlay-card overflow-hidden">
              <template slot="no-body">
                  <img src="@assets/images/padHolder/industrial6.png" alt="industrial-cover" class="industyImg responsive">
              </template>
            </vx-card>
          </div>
          <div class="vx-col xl:w-1/4 lg:w-1/4 md:w-1/2 w-10/12 mt-6">
            <vx-card class="overlay-card overflow-hidden">
              <template slot="no-body">
                  <img src="@assets/images/padHolder/industrial7.png" alt="industrial-cover" class="industyImg responsive">
              </template>
            </vx-card>
          </div>          
          <div class="vx-col xl:w-1/4 lg:w-1/4 md:w-1/2 w-10/12 mt-6">
            <vx-card class="overlay-card overflow-hidden">
              <template slot="no-body">
                  <img src="@assets/images/padHolder/industrial8.png" alt="industrial-cover" class="responsive">
              </template>
            </vx-card>
          </div>
        </div>
      </div>
      <div class="vx-col contactLanding w-full">
        <div class="vx-row w-full">
          <div class="vx-col xl:w-1/2 lg:w-1/2 md:w-1/2 w-10/12 m-auto text-center">
            <h1>Please Contact Us</h1>
            <div class="vx-row w-full">
              <div class="vx-col xl:w-1/2 lg:w-1/2 md:w-1/2 w-10/12">
                <input tyle="text" placeholder="name"/>
              </div>
              <div class="vx-col xl:w-1/2 lg:w-1/2 md:w-1/2 w-10/12">
                <input tyle="email" placeholder="Email"/>
              </div>
            </div>
            <div class="vx-row w-full mt-6">
              <div class="vx-col w-full">
                <textarea name="detail" id="" cols="30" rows="10" placeholder="Detail"></textarea>
              </div>
            </div>
            <button>Submit</button>
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
</style>