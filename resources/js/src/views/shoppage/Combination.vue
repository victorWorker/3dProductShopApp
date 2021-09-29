<template>
  <div class="w-full shopPage">
    <div class="vx-row">
      <div class="vx-col w-full">
        <h1 class="pageTitle">COMBINATIONS</h1>
      </div>
    </div>
    <div class="vx-row categoryContain my-12">
      <div class="vx-col w-full categoryBar">
        <div class="vx-row">
          <div class="vx-col xl:w-1/4 lg:w-1/4 md:w-1/4 w-10/12 text-center">
            <div class="categoryCard">
              <vs-avatar class="mx-auto mb-6 block" size="80px" :src="require('@assets/images/padHolder/category/multiple.jpg')" />
              <div class="text-center">
                <span>MULTIPLE <br>TABLET STAND</span>
              </div>
            </div>
          </div>
          <div class="vx-col xl:w-1/4 lg:w-1/4 md:w-1/4 w-10/12 text-center">
            <div class="categoryCard">
              <vs-avatar class="mx-auto mb-6 block" size="80px" :src="require('@assets/images/padHolder/category/utv.jpg')" />
              <div class="text-center">
                <span>UTV <br>TABLET MOUNT</span>
              </div>
            </div>
          </div>
          <div class="vx-col xl:w-1/4 lg:w-1/4 md:w-1/4 w-10/12 text-center">
            <div class="categoryCard">
              <vs-avatar class="mx-auto mb-6 block" size="80px" :src="require('@assets/images/padHolder/category/cub.jpg')" />
              <div class="text-center">
                <span>CUP HOLDER<br>TABLET MOUNT</span>
              </div>
            </div>
          </div>
          <div class="vx-col xl:w-1/4 lg:w-1/4 md:w-1/4 w-10/12 text-center">
            <div class="categoryCard">
              <vs-avatar class="mx-auto mb-6 block" size="80px" :src="require('@assets/images/padHolder/category/headrest.jpg')" />
              <div class="text-center">
                <span>HEADREST<br>TABLET MOUNTS</span>
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