<template>
  <div class="w-full shopPage">
    <div class="vx-row">
      <div class="vx-col w-full">
        <h1 class="pageTitle">Products of PADHolder</h1>
      </div>
    </div>
    <div class="vx-row px-24">
      <div class="vx-col xl:w-2/12 lg:w-2/4 md:w-1/2 w-10/12 filterBox">
        <h1>Filter by</h1>
        <hr>
        <ul class="filterList">
          <li>
            <vs-collapse-item class="filterItem">
              <div slot="header">
                Collections
              </div>
              <ul class="collectionList">
                <li>All</li>
                <li>New Products</li>
                <li>Holders</li>
                <li>Mounting</li>
                <li>Stands&Carts</li>
                <li>Combinations</li>
              </ul>
            </vs-collapse-item>
          </li>
          <li>
            <vs-collapse-item class="filterItem">
              <div slot="header">
                Holders
              </div>
              <ul class="collectionList">
                <li>Table Holders</li>
                <li>Phone Holders</li>
                <li>Custome</li>
              </ul>
            </vs-collapse-item>
          </li>
          <li>
            <vs-collapse-item class="filterItem">
              <div slot="header">
                Mounting
              </div>
              <ul class="collectionList">
                <li>Table Mounts</li>
                <li>Vehicle Specific Dash Mounts</li>
                <li>Wall Mounts</li>
                <li>Table Top Mounts</li>
                <li>Forklift Mounts</li>
              </ul>
            </vs-collapse-item>
          </li>
          <li>
            <vs-collapse-item class="filterItem">
              <div slot="header">
                Stands and Carts
              </div>
              <ul class="collectionList">
                <li>Table Top Stands</li>
                <li>Mobile Carts</li>
                <li>Flexible Arms</li>
                <li>Floor Stands</li>
              </ul>
            </vs-collapse-item>
          </li>
          <li>
            <vs-collapse-item class="filterItem">
              <div slot="header">
                Combinations
              </div>
              <ul class="collectionList">
                <li>Multiple Tablet Stand</li>
                <li>UTV Tablet Mount</li>
                <li>Cup Holder Tablet Mount</li>
                <li>Headrest Tablet Mounts</li>
              </ul>
            </vs-collapse-item>
          </li>
        </ul>
      </div>
      <div class="vx-col xl:w-10/12 lg:w-10/12 md:w-10/12 w-10/12 ">
        <div class="vx-row">
          <div class="vx-col xl:w-1/3 lg:w-1/3 md:w-1/3 w-10/12 mb-6" v-for="index in 8" :key="index">
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
    </div>
  </div>
</template>