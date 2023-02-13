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
            <v-btn fab :color="selected >= 0 ? '#FBC02D' : '#000000'" class="ml-16">
              <Icon icon="icon-park-outline:clothes-short-sleeve" style="color: white" width="30px" height="30px"/>
            </v-btn>
            <v-btn fab :color="selected > 1 ? '#FBC02D' : '#000000'" class="ml-5">
              <Icon icon="arcticons:tapemeasure" style="color: white" width="30px" height="30px"/>
            </v-btn>
            <v-btn fab :color="selected > 2 ? '#FBC02D' : '#000000'" class="ml-5">
              <Icon icon="mdi:grease-pencil" style="color: white" width="30px" height="30px"/>
            </v-btn>
            <v-btn fab :color="selected > 3 ? '#FBC02D' : '#000000'" class="ml-5">
              <Icon icon="mdi:tick" style="color: white" width="30px" height="30px"/>
            </v-btn>
          </v-col>
          <v-col cols="12" class="ml-16">
            <v-container>
              <v-row>
                <v-col cols="12" class="ml-16">
                  <div v-if="selected <= 1">
                    <v-btn width="250px" height="350px"

                           outlined
                           depressed
                           v-bind:class="{ 'active-button': isButtonActive1 }"
                           @click="toggleButton1">
                      <v-img
                          width="238px" height="317px"
                          src="https://cdn.gsstore.org/UPLOAD/form-customize/form/IC_SAHA_2023/_front.png"/>
                    </v-btn>
                    <v-btn width="250px" height="350px"
                           outlined
                           depressed
                           v-bind:class="{ 'active-button': isButtonActive2 }"
                           @click="toggleButton2">
                      <v-img
                          width="238px" height="317px"
                          src="https://cdn.gsstore.org/UPLOAD/form-customize/form/DEPLASMAN_2023/_front.png"/>
                    </v-btn>
                    <v-btn width="250px" height="350px"
                           outlined
                           depressed
                           v-bind:class="{ 'active-button': isButtonActive3 }"
                           @click="toggleButton3">
                      <v-img
                          width="238px" height="317px"
                          src="https://cdn.gsstore.org/UPLOAD/form-customize/form/KALECI_2023/_thumb.png"/>
                    </v-btn>
                  </div>
                  <div v-if="selected === 2">
                    <v-container>
                      <v-row>
                        <v-col cols="7">
                          <v-img
                              v-if="isButtonActive1"
                              width="238px" height="317px"
                              src="https://cdn.gsstore.org/UPLOAD/form-customize/form/IC_SAHA_2023/_front.png"/>
                          <v-img
                              v-if="isButtonActive2"
                              width="238px" height="317px"
                              src="https://cdn.gsstore.org/UPLOAD/form-customize/form/DEPLASMAN_2023/_front.png"/>
                          />
                          <v-img
                              v-if="isButtonActive3"
                              width="238px" height="317px"
                              src="https://cdn.gsstore.org/UPLOAD/form-customize/form/KALECI_2023/_thumb.png"/>
                          />
                        </v-col>
                        <v-col cols="5" >
                          <span style="font-size: 30px; color: #FBC02D"> Bedeninizi Seç</span>
                          <v-spacer/>
                          <v-btn width="70px"
                                 outlined
                                 depressed
                                 class="grey pa-4"
                                 v-bind:class="{ 'active-button': isButtonWhiteS }"
                                 @click="bodyButtonSizeS"
                          >
                            S
                          </v-btn>
                          <v-btn width="70px"
                                 outlined
                                 depressed
                                 class="grey ml-4 pa-4"
                                 v-bind:class="{ 'active-button': isButtonWhiteM }"
                                 @click="bodyButtonSizeM"
                          >
                            M
                          </v-btn>
                          <v-btn width="70px"
                                 outlined
                                 depressed
                                 class="grey ml-4 pa-4"
                                 v-bind:class="{ 'active-button': isButtonWhiteL }"
                                 @click="bodyButtonSizeL"
                          >
                            L
                          </v-btn>
                          <v-btn width="70px"
                                 outlined
                                 depressed
                                 class="grey ml-4 pa-4"
                                 v-bind:class="{ 'active-button': isButtonWhiteXL }"
                                 @click="bodyButtonSizeXL"
                          >
                            XL
                          </v-btn>
                          <v-btn width="70px"
                                 outlined
                                 depressed
                                 class="grey ml-4 pa-4"
                                 v-bind:class="{ 'active-button': isButtonWhite2XL }"
                                 @click="bodyButtonSize2XL"
                          >
                            2XL
                          </v-btn>
                          <v-btn width="70px"
                                 outlined
                                 depressed
                                 class="grey mt-4 pa-4"
                                 v-bind:class="{ 'active-button': isButtonWhite3XL }"
                                 @click="bodyButtonSize3XL"
                          >
                            3XL
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-container>

                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
      <v-container fluid>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="3">
            <v-btn outlined class="white--text" @click=selectedButtonMinus()>
              Önceki
            </v-btn>
          </v-col>
          <v-col cols="6"></v-col>
          <v-col cols="2">
            <v-btn color="#B71C1C" class="white--text" v-if="isButtonActive1 || isButtonActive2 || isButtonActive3"
                   @click=selectedButtonPlus()>
              Sonraki
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </div>
</template>

<script>
import {Icon} from '@iconify/vue2';

export default {
  name: "formaTasarla",
  components: {
    Icon,
  },
  data() {
    return {
      isButtonActive1: false,
      isButtonActive2: false,
      isButtonActive3: false,
      isButtonWhiteS: false,
      isButtonWhiteM: false,
      isButtonWhiteL: false,
      isButtonWhiteXL: false,
      isButtonWhite2XL: false,
      isButtonWhite3XL: false,
      selected: 1,

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
    selectedButtonPlus() {
      if (this.selected === 4) {
        this.selected = 4;
      } else {
        this.selected += 1;
      }
    },
    selectedButtonMinus() {
      if (this.selected === 0) {
        this.selected = 1;
      } else {
        this.selected -= 1;
      }
    },
    bodyButtonSizeS(){
      this.isButtonWhiteS = !this.isButtonWhiteS;
      this.isButtonWhiteM = false;
      this.isButtonWhiteL = false;
      this.isButtonWhiteXL = false;
      this.isButtonWhite2XL = false;
      this.isButtonWhite3XL = false;
    },
    bodyButtonSizeM(){
      this.isButtonWhiteM = !this.isButtonWhiteM;
      this.isButtonWhiteS = false;
      this.isButtonWhiteL = false;
      this.isButtonWhiteXL = false;
      this.isButtonWhite2XL = false;
      this.isButtonWhite3XL = false;
    },
    bodyButtonSizeL(){
      this.isButtonWhiteL = !this.isButtonWhiteL;
      this.isButtonWhiteS = false;
      this.isButtonWhiteM = false;
      this.isButtonWhiteXL = false;
      this.isButtonWhite2XL = false;
      this.isButtonWhite3XL = false;
    },
    bodyButtonSizeXL(){
      this.isButtonWhiteXL = !this.isButtonWhiteXL;
      this.isButtonWhiteS = false;
      this.isButtonWhiteM = false;
      this.isButtonWhiteL = false;
      this.isButtonWhite2XL = false;
      this.isButtonWhite3XL = false;
    },
    bodyButtonSize2XL(){
      this.isButtonWhite2XL = !this.isButtonWhite2XL;
      this.isButtonWhiteS = false;
      this.isButtonWhiteM = false;
      this.isButtonWhiteL = false;
      this.isButtonWhiteXL = false;
      this.isButtonWhite3XL = false;
    },
    bodyButtonSize3XL(){
      this.isButtonWhite3XL = !this.isButtonWhite3XL;
      this.isButtonWhiteS = false;
      this.isButtonWhiteM = false;
      this.isButtonWhiteL = false;
      this.isButtonWhiteXL = false;
      this.isButtonWhite2XL = false;
    },

  }
}
</script>

<style scoped>
.active-button {
  color: white;
}
.active-white {
  color: white;
}

</style>