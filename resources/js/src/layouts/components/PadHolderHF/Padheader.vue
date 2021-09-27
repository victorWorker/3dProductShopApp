<template>
    <div class="navbar-sticky shopHeader">
      <div class="vx-navbar-wrapper navbar-full">
        <vs-navbar class="vs-navbar vx-navbar navbar-custom navbar-skelton vs-navbar-null static">
          <div class="vx-col lg:w-1/3 items-left justify-start text-left">
            <ul class="menu-item flex flex-wrap w-full items-center justify-start">
              <li class="nav-link px-1">
                <span class="navButton">Holders</span>
              </li>
              <li class="nav-link px-1">
                <span class="navButton">Mounting</span>
              </li>
              <li class="nav-link px-1" >
                <span class="navButton">stands&carts</span>
              </li>
              <li class="nav-link px-1" >
                <span class="navButton">combinations</span>
              </li>
            </ul>
          </div>
          <div class="vx-col lg:w-1/3 items-center justify-center text-center">
            <img src="@assets/images/padHolder/padholderavata.png" width="200" height="200" alt="">
          </div>
          <div class="vx-col lg:w-1/3 items-right justify-end text-right">
            <ul class="menu-item flex flex-wrap items-center justify-end">
              <li class="nav-link vx-logo items-center px-3">
                <feather-icon
                  icon="ShoppingCartIcon"
                  size="30"
                  class="text-white"
                  badge=""
                />
              </li>
              <li class="nav-link vx-logo items-center px-3">
                <vs-input icon-pack="feather" icon="icon-search" placeholder="Search" />
              </li>
              <li class="nav-link vx-logo items-center px-3">
                <span class="navButton">Login</span>
              </li>
            </ul>
          </div>
        </vs-navbar>
      </div>
    </div>
</template>

<script>

export default {

}
</script>

<style lang="scss">
@import "@sass/vuexy/components/horizontalNavMenu.scss"
</style>
