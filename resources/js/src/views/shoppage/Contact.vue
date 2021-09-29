<template>
  <div class="w-full contractPage">
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
</template>

<style scoped>
.contractPage{
  padding-top: 220px;
  background: black;
}
</style>