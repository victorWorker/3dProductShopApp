<template>
  <div class="w-full shopPage">
    <div class="vx-row">
      <div class="vx-col w-full">
        <h1 class="pageTitle">MOUNTS</h1>
      </div>
    </div>
    <div class="vx-row categoryContain my-12">
      <div class="vx-col w-full categoryBar">
        <div class="vx-row justify-center items-center">
          <div class="vx-col xl:w-1/3 lg:w-1/3 md:w-1/3 w-10/12 text-center">
            <div class="categoryCard">
              <vs-avatar class="mx-auto mb-6 block" size="80px" :src="require('@assets/images/padHolder/category/stick.jpg')" />
              <div class="text-center">
                <span>TABLET MOUNTS</span>
              </div>
            </div>
          </div>
          <div class="vx-col xl:w-1/3 lg:w-1/3 md:w-1/3 w-10/12 text-center">
            <div class="categoryCard">
              <vs-avatar class="mx-auto block" size="80px" :src="require('@assets/images/padHolder/category/dash.jpg')" />
              <div class="text-center">
                <span>VEHICLE SPECIFIC<br>DASH MOUNTS</span>
              </div>
            </div>
          </div>
          <div class="vx-col xl:w-1/3 lg:w-1/3 md:w-1/3 w-10/12 text-center">
            <div class="categoryCard">
              <vs-avatar class="mx-auto mb-6 block" size="80px" :src="require('@assets/images/padHolder/category/wall.jpg')" />
              <div class="text-center">
                <span>WALL MOUNTS</span>
              </div>
            </div>
          </div>
          <div class="vx-col xl:w-1/3 lg:w-1/3 md:w-1/3 w-10/12 text-center">
            <div class="categoryCard">
              <vs-avatar class="mx-auto mb-6 block" size="80px" :src="require('@assets/images/padHolder/category/tabletop.jpg')" />
              <div class="text-center">
                <span>TABLE TOP MOUNTS</span>
              </div>
            </div>
          </div>
          <div class="vx-col xl:w-1/3 lg:w-1/3 md:w-1/3 w-10/12 text-center">
            <div class="categoryCard">
              <vs-avatar class="mx-auto mb-6 block" size="80px" :src="require('@assets/images/padHolder/category/forklift.jpg')" />
              <div class="text-center">
                <span>FORKLIFT MOUNTS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="vx-row px-24">
      <div class="vx-col w-full productContainer">
        <div class="vx-row filterBar">
          <div>
            <select name="" id="">
              <option value="">Sort By</option>
              <option value="">Newest</option>
              <option value="">Price(low to high)</option>
              <option value="">Price(high to low)</option>
              <option value="">Name A-Z</option>
              <option value="">Name Z-A</option>
            </select>
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col xl:w-1/4 lg:w-1/4 md:w-1/2 w-10/12 mb-6" v-for="index in 8" :key="index">
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

<style scoped>

</style>