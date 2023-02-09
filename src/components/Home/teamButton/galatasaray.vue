<template>
  <div class="mx-auto">
    <v-btn
        @click="$router.push('/gsStore')"
        icon plain @mouseenter="hover = true" @mouseleave="hover = false">
      <img
          :src=this.getTeam[0].GalatasarayLogo
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
  name: "galatasarayView",
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