<template>
  <div class="w-full custompage">
    <div class="vx-row w-full partOne">
      <div class="vx-col w-1/3 leftOne">
        <h1>We can bring your <b>ideas</b> to <b>life</b></h1>
      </div>
      <div class="vx-col w-2/3 rightOne"></div>
    </div>
    <div class="vx-row w-full endOne m-0">
      <div class="vx-col w-full h-full p-0">
        <parallax :speed-factor="1" direction="up" :parallax="true">
          <img src="@assets/images/padHolder/whatdo.png" alt=""> 
        </parallax>
        <div class="textMask">
          <h2>What We Do</h2>
          <div class="vx-col w-1/2 text-left px-6 m-auto">
            <ul>
              <li>Rapid 3D Prototyping</li>
              <li>Integrated hardware components designed to your specifications</li>
              <li>Custom branding, use your company logos</li>
              <li>Weatherproof enclsures for all types of electronic</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="vx-row w-full ourWorks m-0 py-24">
      <div class="vx-col w-full">
        <h1>Some of Our Work</h1>
      </div>
      <div class="vx-col w-1/2">
        <div class="vx-col w-full workCard m-3 p-0">
          <div class="vx-row w-full h-full m-0">
            <div class="vx-col w-6/12 leftSide">
              <h3>SURFACE PRO WALL MOUNT FOR COFFEE CHAIN</h3>
              <hr>
              <p>Objective 1: Enclose a Surface Pro 4 tablet within an enclosure to use in a heavy traffic environment.</p>
              <p>Objective 2: Integrate the power brick and Ethernet adapter within the stand.</p>
              <p>Objective 3: Allow the tablet to mount to a wall but easily move in multiple angles.</p>
            </div>
            <div class="vx-col w-6/12 rightSide p-0">
              <div class="vx-row w-full m-0 p-3">
                <img class="responsive" src="@assets/images/padHolder/work1/1.jpg" alt="banner">
              </div>
              <div class="vx-row w-full m-0 p-3" style="height: 120px">
                <img class="h-full" src="@assets/images/padHolder/work1/1.jpg" alt="banner">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="vx-col w-1/2">
        <div class="vx-col w-full workCard m-3 p-0">
          <div class="vx-row w-full h-full m-0">
            <div class="vx-col w-6/12 leftSide">
              <h3>SURFACE PRO WALL MOUNT FOR COFFEE CHAIN</h3>
              <hr>
              <p>Objective 1: Enclose a Surface Pro 4 tablet within an enclosure to use in a heavy traffic environment.</p>
              <p>Objective 2: Integrate the power brick and Ethernet adapter within the stand.</p>
              <p>Objective 3: Allow the tablet to mount to a wall but easily move in multiple angles.</p>
            </div>
            <div class="vx-col w-6/12 rightSide p-0">
              <div class="vx-row w-full m-0 p-3">
                <img class="responsive" src="@assets/images/padHolder/work1/1.jpg" alt="banner">
              </div>
              <div class="vx-row w-full m-0 p-3" style="height: 120px">
                <img class="h-full" src="@assets/images/padHolder/work1/1.jpg" alt="banner">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="vx-row w-full workWith m-0 py-24">
      <div class="vx-col w-full">
        <h1>Common Industries We Work With</h1>
        <div class="vx-row w-full">
          <div class="vx-col w-1/5 mb-6">
            <img src="@assets/images/padHolder/workWith/medical-environments.jpg" class="withImg" alt="">
          </div>
          <div class="vx-col w-1/5 mb-6">
            <img src="@assets/images/padHolder/workWith/fire-and-rescue.jpg" class="withImg" alt="">
          </div>
          <div class="vx-col w-1/5 mb-6">
            <img src="@assets/images/padHolder/workWith/emt-aid.jpg" class="withImg" alt="">
          </div>
          <div class="vx-col w-1/5 mb-6">
            <img src="@assets/images/padHolder/workWith/law-enforcement.jpg" class="withImg" alt="">
          </div>
          <div class="vx-col w-1/5 mb-6">
            <img src="@assets/images/padHolder/workWith/company-vehicles.jpg" class="withImg" alt="">
          </div>
          <div class="vx-col w-1/5 mb-6">
            <img src="@assets/images/padHolder/workWith/retail-industry.jpg" class="withImg" alt="">
          </div>
          <div class="vx-col w-1/5 mb-6">
            <img src="@assets/images/padHolder/workWith/public-shows.jpg" class="withImg" alt="">
          </div>
          <div class="vx-col w-1/5 mb-6">
            <img src="@assets/images/padHolder/workWith/warehouse-operations.jpg" class="withImg" alt="">
          </div>
          <div class="vx-col w-1/5 mb-6">
            <img src="@assets/images/padHolder/workWith/taxi-public-transportation.jpg" class="withImg" alt="">
          </div>
          <div class="vx-col w-1/5 mb-6">
            <img src="@assets/images/padHolder/workWith/food-service.jpg" class="withImg" alt="">
          </div>
        </div>
      </div>
      
      
    </div>
    <div class="vx-row w-full someCustomers m-0 py-24">
      <div class="vx-col w-full">
        <h1>Some of Our Customers</h1>
      </div>
      <div class="vx-col w-full parallaxView">
        <hr>
        <swiper :options="swiperOption" dir="ltr">
          <swiper-slide v-for="(item, index) in logoData" :key="index">
            <img :src="item" alt="">
          </swiper-slide>
        </swiper>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Parallax from "vue-parallaxy";
export default {
  components:{
    Parallax,
    swiper,
    swiperSlide
  },
  data() {
    return{
      logoData: [
        require('@assets/images/padHolder/customLogos/arizona-beverage.png'),
        require('@assets/images/padHolder/customLogos/boyds-coffee.png'),
        require('@assets/images/padHolder/customLogos/chick-fil-a.png'),
        require('@assets/images/padHolder/customLogos/dell.png'),
        require('@assets/images/padHolder/customLogos/gates-black.png'),
        require('@assets/images/padHolder/customLogos/general-electric.png'),
        require('@assets/images/padHolder/customLogos/goodwill.png'),
        require('@assets/images/padHolder/customLogos/google.png'),
        require('@assets/images/padHolder/customLogos/gun-lake-casino.png'),
        require('@assets/images/padHolder/customLogos/honeywell.png'),
        require('@assets/images/padHolder/customLogos/intel.png'),
        require('@assets/images/padHolder/customLogos/lazboy.png'),
        require('@assets/images/padHolder/customLogos/lund.png'),
        require('@assets/images/padHolder/customLogos/mardi-gras-casino.png'),
        require('@assets/images/padHolder/customLogos/saw-stop.png'),
        require('@assets/images/padHolder/customLogos/siemens.png'),
        require('@assets/images/padHolder/customLogos/sizzler.png'),
        require('@assets/images/padHolder/customLogos/TSA.png'),
        require('@assets/images/padHolder/customLogos/us-forest-service.png'),
        require('@assets/images/padHolder/customLogos/westinghouse.png'),
        require('@assets/images/padHolder/customLogos/wilson.png'),
      ],
      
      swiperOption: {
        slidesPerView: 6,
        spaceBetween: 0,
        // init: false,
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true
        // },
        autoplay: {
            delay: 2000,
            disableOnInteraction: true
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
      }
    }
  }
}
</script>
