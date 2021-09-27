<template>
    <div class="layout--full-page">
      <Padheader />
      <router-view></router-view>
      <Padfooter />
    </div>
</template>

<script>
import Padheader from "@/layouts/components/PadHolderHF/Padheader.vue"
import Padfooter from "@/layouts/components/PadHolderHF/Padfooter.vue"
export default {
  components: {
    Padheader,
    Padfooter
  }
}
</script>