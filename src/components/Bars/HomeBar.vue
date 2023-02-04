<template>
  <div>
    <v-app-bar
        color="#A1887F"
    >
      <v-sheet class="font-weight-bold"
             dark
             style="font-family: 'Apple Chancery'"
             color="#A1887F"
             elevation="1"
             height="30"
      >Fan Store</v-sheet>
      <v-container>
        <v-row>
          <v-col cols="3">
            <img
                class="mt-2"
                icon
                :src=this.getTeam[0].GalatasarayLogo
                width="60px"
                height="60px"/>
          </v-col>
          <v-col cols="3">
            <img
                class="mt-2"
            icon
            width="60px"
            height="60px"
            :src="this.getTeam[1].BesiktasLogo"
            />
          </v-col>
          <v-col cols="3">
            <img
                class="mt-2"
                icon
                :src="this.getTeam[2].FenevLogo"
                width="60px"
                height="60px"/>
          </v-col>
          <v-col cols="3">
            <img
                class="mt-2"
            icon
            :src="this.getTeam[3].TrabzonLogo"
            width="60px"
            height="60px"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "fixedBar",
  computed:{
    ...mapGetters({
      getTeam:'team/getTeam',
    })
  },
  methods:{
    test(){
      //
    }
  }
}
</script>

<style scoped>

</style>