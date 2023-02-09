<template>
  <div class="mx-auto">
    <v-btn icon plain @mouseenter="hover = true" @mouseleave="hover = false">
      <img
          @click="$router.push('/trabzonspor')"
          :src=this.getTeam[3].TrabzonLogo
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
  name: "trabzonView",
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