<template>
  <div class="mx-auto">
    <v-btn icon plain @mouseenter="hover = true" @mouseleave="hover = false">
      <img
          @click="$router.push('/fenerium')"
          :src=this.getTeam[2].FenevLogo
          width="150px"
          height="220px"
          :style="{ transform: hover ? 'translateY(-30px)' : 'translateY(0)' }"
      />
    </v-btn>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "fenevView",
  computed: {
    ...mapGetters({
      getTeam: "team/getTeam"
    })
  },
  data : () => ({
    hover: false
  })
}
</script>

<style scoped>
</style>