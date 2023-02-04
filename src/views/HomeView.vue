<template>
  <div class="home-view">
    <homeBar/>
    <v-container>
      <v-row>
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
        <v-col cols="2"></v-col>
        <v-col>
          <card/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import homeBar from "@/components/Bars/HomeBar.vue";
import card from "@/components/Home/card.vue";
  export default {
    name: 'HomeView',

    components: {
      homeBar,
      card
    },
  }
</script>

<style scoped>
.home-view{
  background-color: #FFF8E1;
  height: 100%;
}
</style>