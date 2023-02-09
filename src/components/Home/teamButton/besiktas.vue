<template>
  <div class="mx-auto">
    <v-btn icon plain @mouseenter="hover = true" @mouseleave="hover = false">
      <img
          @click="$router.push('/kartalYuvasi')"
          :src=this.getTeam[1].BesiktasLogo
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
  name: "besiktasView",
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