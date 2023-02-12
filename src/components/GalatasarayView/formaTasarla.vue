<template>
  <div class="form">
    <v-img
        src="https://cdn.gsstore.org/images/frontend/design-uniform-bg.png">
      <v-container>
        <v-row>
          <v-col cols="12"></v-col>
          <v-col cols="12"></v-col>
          <v-col cols="4">
            <span class="white--text" style="font-size: 30px">4 Yıldızlı Galatasaray Formanı Tasarla</span>
            <v-spacer/>
            <span class="white--text">Giymek istediğin </span>
            <span style="color: #FBC02D">forma modelini </span>
            <span class="white--text">seç</span>
          </v-col>
          <v-col cols="4"></v-col>
          <v-col cols="4">
            <v-btn fab color="#FBC02D" class="ml-16">
              <Icon icon="icon-park-outline:clothes-short-sleeve" style="color: white" width="30px" height="30px" />
            </v-btn>
            <v-btn fab color="#FBC02D" class="ml-5">
              <Icon icon="arcticons:tapemeasure" style="color: white" width="30px" height="30px" />
            </v-btn>
            <v-btn fab color="#FBC02D" class="ml-5">
              <Icon icon="mdi:grease-pencil" style="color: white" width="30px" height="30px" />
            </v-btn>
            <v-btn fab color="#FBC02D" class="ml-5">
              <Icon icon="mdi:tick" style="color: white" width="30px" height="30px" />
            </v-btn>
          </v-col>
          <v-col cols="12" class="ml-16">
           <v-container>
             <v-row>
               <v-col cols="12" class="ml-16">
                 <v-btn width="250px" height="350px" outlined depressed
                        v-bind:class="{ 'active-button': isButtonActive1 }"
                        @click="toggleButton1">
                   <img
                       width="238px" height="317px"
                       src="https://cdn.gsstore.org/UPLOAD/form-customize/form/IC_SAHA_2023/_front.png"/>
                 </v-btn>
                 <v-btn width="250px" height="350px" outlined depressed
                        v-bind:class="{ 'active-button': isButtonActive2 }"
                        @click="toggleButton2">
                   <img
                       width="238px" height="317px"
                       src="https://cdn.gsstore.org/UPLOAD/form-customize/form/DEPLASMAN_2023/_front.png"/>
                 </v-btn>
                 <v-btn width="250px" height="350px" outlined depressed
                        v-bind:class="{ 'active-button': isButtonActive3 }"
                        @click="toggleButton3">
                   <img
                       width="238px" height="317px"
                       src="https://cdn.gsstore.org/UPLOAD/form-customize/form/KALECI_2023/_thumb.png"/>
                 </v-btn>
               </v-col>
             </v-row>
           </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
export default {
  name: "formaTasarla",
  components: {
    Icon,
  },
  data() {
    return {
      isButtonActive1: false,
      isButtonActive2: false,
      isButtonActive3: false
    };
  },
  methods: {
    toggleButton1() {
      this.isButtonActive1 = !this.isButtonActive1;
      this.isButtonActive2 = false;
      this.isButtonActive3 = false;
    },
    toggleButton2() {
      this.isButtonActive2 = !this.isButtonActive2;
      this.isButtonActive1 = false;
      this.isButtonActive3 = false;
    },
    toggleButton3() {
      this.isButtonActive3 = !this.isButtonActive3;
      this.isButtonActive1 = false;
      this.isButtonActive2 = false;
    },
  },
}
</script>

<style scoped>
.active-button {
  color: white;
}
</style>