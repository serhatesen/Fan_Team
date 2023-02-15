<template>
  <div>
    <v-card
        class="card"
    >
      <v-sheet color="#3E2723" dark class="title text-center">What is your team?</v-sheet>
      <v-container class="text-center">
        <v-row>
          <v-col cols="12"></v-col>
          <v-col cols="12"></v-col>
          <v-col cols="12"></v-col>
          <v-col cols="12"></v-col>
          <v-col cols="12"></v-col>
          <v-col cols="3">
            <galatasaray/>
          </v-col>
          <v-col cols="3">
            <besiktas/>
          </v-col>
          <v-col cols="3">
            <fenev/>
          </v-col>
          <v-col cols="3">
            <trabzon/>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import galatasaray from "@/components/Home/teamButton/galatasaray.vue";
import besiktas from "@/components/Home/teamButton/besiktas.vue";
import fenev from "@/components/Home/teamButton/fenev.vue";
import trabzon from "@/components/Home/teamButton/trabzon.vue";

export default {
  name: "cardView",
  components: {
    galatasaray,
    besiktas,
    fenev,
    trabzon
  }
}
</script>

<style scoped>
.card{
  width: 800px;
  height: 400px;
  background-color:#000000;
  opacity:0.5;
}
</style>