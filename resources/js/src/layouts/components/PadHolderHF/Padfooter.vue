<template>
  <footer class="the-footer shopFooter flex-wrap justify-between">
    <div class="vx-col lastlogoLanding w-full">
      <div class="vx-row justify-center items-center h-full w-full footerlogoContain">
        <img src="@assets/images/logo/Padholder_Logo_white.png" class="footerlogo" alt="logo-last">
      </div>
    </div>
    <div class="vx-col w-full">
      <div class="vx-row w-full">
        <hr class="w-full mb-6">
      </div>
      <div class="vx-row">
        <div class="vx-col xl:w-1/4 lg:w-1/4 md:w-1/2 w-10/12">
          <h3>Contact</h3>
          <ul>
            <li>Address: 10011 234th Ave.</li>
            <li>E., Suite D Bonney Lake, </li>
            <li>WA 98391</li>
            <li>Phone: 877-492-8339</li>
            <li>Email: cs@padholder.com</li>
          </ul>
        </div>
        <div class="vx-col xl:w-1/4 lg:w-1/4 md:w-1/2 w-10/12">
          <h3>Shop</h3>
          <ul>
            <li>
              <router-link to="/shop">
                Shop All
              </router-link>
            </li>
            <li>
              <router-link to="/holders">
                Holders
              </router-link>
            </li>
            <li>
              <router-link to="/mounts">
                Mounting
              </router-link>
            </li>
            <li><router-link to="/stands">Stands&Carts</router-link></li>
            <li><router-link to="/combination"> Cominations </router-link></li>
          </ul>
        </div>
        <div class="vx-col xl:w-1/4 lg:w-1/4 md:w-1/2 w-10/12">
          <h3>customer care</h3>
          <ul>
            <li>
              <router-link to="/why-padholder">
                Why PadHolder?  
              </router-link>
            </li>
            <li>
              <router-link to="/custom-design">
              OEM
              </router-link>
            </li>
            <li>
              <router-link to="/about">
                Abount Us
              </router-link>
            </li>
            <li>
              <router-link to="/contact">
                  Contact Us
              </router-link>
            </li>
            <li>
              <router-link to="/privacy-policy">
                Terms & Privacy  
              </router-link>
            </li>
            <li>
              <router-link to="/return-policy">
              Return Policy
              </router-link>
            </li>
          </ul>
        </div>
        <div class="vx-col xl:w-1/4 lg:w-1/4 md:w-1/2 w-10/12">
          <h3>membership</h3>
          <ul>
            <li>Join</li>
            <li>Sing in</li>
            <li>Order History</li>
          </ul>
        </div>
      </div>
      <div class="vx-row w-full">
        <hr class="w-full mt-3">
      </div>
      <div class="vx-row w-full p-6 justify-center items-center">
        <h4>© 2023 by PadHolr. Proudly created with PadHolr.com</h4>
      </div>
    </div>
  </footer>
</template>