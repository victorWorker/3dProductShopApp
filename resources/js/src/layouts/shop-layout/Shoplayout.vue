<template>
    <div class="layout--full-page">
      <Padheader />
      <router-view></router-view>
    </div>
</template>

<script>
import Padheader from "@/layouts/components/PadHolderHF/Padheader.vue"
export default {
  components: {
    Padheader
  }
}
</script>