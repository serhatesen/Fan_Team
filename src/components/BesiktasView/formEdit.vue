<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="1">
          <v-sheet class="leftRed"/>
        </v-col>
        <v-col cols="5">
          <v-sheet>
            <v-img
                class="formBackground"
                width="550px"
                height="640px"
                src="https://img1-kartalyuvasi.mncdn.com/images/frontend/design-uniform-bg.jpg">
              <v-sheet class="text-center" color="transparent">
                <v-row>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="3"/>
                  <v-col cols="4">
                    <v-sheet v-if="selectedFormType === 'formMan'">
                      <v-img
                          v-if="icSahaButton"
                          class="forma"
                          width="200px"
                          height="300px"
                          src="https://img1-kartalyuvasi.mncdn.com/UPLOAD/form-customize/form/erkek-2022/3KS4E01001-01/front.png"
                      />
                      <v-img
                          v-if="deplasmanButton"
                          class="forma"
                          width="200px"
                          height="300px"
                          src="https://img1-kartalyuvasi.mncdn.com/UPLOAD/form-customize/form/erkek-2022/3KS4E01001-50/front.png"
                      />
                      <v-img
                          v-if="ucFormButton"
                          class="forma"
                          width="200px"
                          height="300px"
                          src="https://img1-kartalyuvasi.mncdn.com/UPLOAD/form-customize/form/erkek-2022/3KS4E01001-Y81/front.png"
                      />
                    </v-sheet>
                    <v-sheet v-if="selectedFormType === 'formWoman'">
                      <v-img
                          v-if="icSahaButton"
                          class="forma"
                          width="200px"
                          height="300px"
                          src="https://img1-kartalyuvasi.mncdn.com/UPLOAD/form-customize/form/kadin-2022/3KS4B01001-01/front.png"
                      />
                      <v-img
                          v-if="deplasmanButton"
                          class="forma"
                          width="200px"
                          height="300px"
                          src="https://img1-kartalyuvasi.mncdn.com/UPLOAD/form-customize/form/kadin-2022/3KS4B01001-50/front.png"
                      />
                      <v-img
                          v-if="ucFormButton"
                          class="forma"
                          width="200px"
                          height="300px"
                          src="https://img1-kartalyuvasi.mncdn.com/UPLOAD/form-customize/form/erkek-2022/3KS4E01001-Y81/front.png"
                      />
                    </v-sheet>
                    <v-sheet v-if="selectedFormType === 'formChild'">
                      <v-img
                          v-if="icSahaButton"
                          class="forma"
                          width="200px"
                          height="300px"
                          src="https://img1-kartalyuvasi.mncdn.com/UPLOAD/form-customize/form/cocuk-2022/3KS4C01001-01/front.png"
                      />
                      <v-img
                          v-if="deplasmanButton"
                          class="forma"
                          width="200px"
                          height="300px"
                          src="https://img1-kartalyuvasi.mncdn.com/UPLOAD/form-customize/form/cocuk-2022/3KS4C01001-50/front.png"
                      />
                      <v-img
                          v-if="ucFormButton"
                          class="forma"
                          width="200px"
                          height="300px"
                          src="https://img1-kartalyuvasi.mncdn.com/upload/form-customize/form/cocuk-2022/3KS4C01001-Y81/front.png"
                      />
                    </v-sheet>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-img>
          </v-sheet>
        </v-col>
        <v-col cols="6">
          <v-spacer/>
          <v-sheet class="formEdit">
            <span class="text-h5 font-weight-bold">#SiyahBeyazınPeşinde</span>
            <v-row>
              <v-radio-group v-model="selectedFormType" row>
                <v-col cols="4">
                  <v-radio label="Erkek" value="formMan"/>
                </v-col>
                <v-col cols="4">
                  <v-radio label="Kadın" value="formWoman"/>
                </v-col>
                <v-col cols=4>
                  <v-radio label="Çocuk" value="formChild"/>
                </v-col>
              </v-radio-group>
            </v-row>
            <v-container>
              <v-row>
                <v-col cols="2">
                  <v-btn width="120px" height="90px" depressed class="red darken-4 ml-2"
                         :class="{'typeButton' : icSahaButton}" @click="typeButtonIc">
                    <v-row>
                      <v-col cols="12">
                        <v-img
                            class="ml-16"
                            width="40px" height="40px"
                            src="https://img1-kartalyuvasi.mncdn.com/UPLOAD/form-customize/form/erkek-2022/1.jpg"/>
                      </v-col>
                      <v-col cols="12">İç Saha</v-col>
                    </v-row>
                  </v-btn>
                </v-col>
                <v-col cols="2">
                  <v-btn width="120px" height="90px" depressed class="red darken-4 ml-2"
                         :class="{'typeButton' : deplasmanButton}" @click="typeButtonDeplasman">
                    <v-row>
                      <v-col cols="12">
                        <v-img
                            class="ml-16"
                            width="40px" height="40px"
                            src="https://img1-kartalyuvasi.mncdn.com/UPLOAD/form-customize/form/erkek-2022/2.jpg"/>
                      </v-col>
                      <v-col cols="12">Deplasman</v-col>
                    </v-row>
                  </v-btn>
                </v-col>
                <v-col>
                  <v-btn width="120px" height="90px" depressed class="red darken-4 ml-2"
                         :class="{'typeButton' : ucFormButton}" @click="typeButtonUcForm">
                    <v-row>
                      <v-col cols="12">
                        <v-img
                            class="ml-16"
                            width="40px" height="40px"
                            src="https://img1-kartalyuvasi.mncdn.com/UPLOAD/form-customize/form/erkek-2022/3.jpg"/>
                      </v-col>
                      <v-col cols="12">3.Forma</v-col>
                    </v-row>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
            <v-autocomplete
                label="Beden Seçiniz"
                solo
                dense
                outlined
                style="width: 600px"
                :items="Bedenler"
            />
            <v-row>
              <v-col>
                <span class="font-weight-bold" style="font-size: 20px" v-bind:class="{'active-underline': player}" @click="jersey_type1">
                  Futbolcu</span>
                <span class="ml-16 font-weight-bold" style="font-size: 20px" v-bind:class="{'active-underline': special}" @click="jersey_type2">
                  İsim ve Numara</span>
                <span class="ml-16 font-weight-bold" style="font-size: 20px" v-bind:class="{'active-underline': notNumber}" @click="jersey_type3">
                  Numarasız</span>
              </v-col>
            </v-row>
            <v-autocomplete
                v-if="player"
                dense
                item-value="FormNumber"
                solo
                label="Futbolcu Seçiniz"
                :items="getPlayers"
                outlined
                style="width: 600px"
            >
              <template v-slot:selection="{ item }">
                <v-list-item-avatar>
                  <v-img :src="item.photo"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.name }} - {{ item.formNumber }}
                  </v-list-item-title>
                </v-list-item-content>
              </template>
              <template #item="{ item }">
                <v-list-item-avatar>
                  <v-img :src="item.photo"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.name }} - {{ item.formNumber }}
                  </v-list-item-title>
                </v-list-item-content>
              </template>
            </v-autocomplete>
            <div v-if="special">
              <v-text-field
                  v-model="userName"
                  solo
                  outlined
                  placeholder="İsim Giriniz"
                  style="width: 600px"
              />
              <v-text-field
                  v-model="userNumber"
                  solo
                  outlined
                  placeholder="Numara Giriniz"
                  style="width: 600px"
              />
            </div>
            <div v-if="notNumber">
              <v-text-field
                  v-model="userName2"
                  solo
                  outlined
                  placeholder="isim Giriniz"
                  style="width: 600px"
              />
            </div>
            <div class="mt-16">
                            <span class="font-weight-bold" style="color: black;font-size: 30px" v-if="notNumber">
                              Fiyat: 749,00 TL
                            </span>
              <span class="font-weight-bold" style="color: black;font-size: 30px" v-if="special">
                              Fiyat: 829,00 TL
                            </span>
              <span class="font-weight-bold" style="color: black;font-size: 30px;" v-if="player">
                              Fiyat: 829,00 TL
                            </span>
              <v-spacer/>
              <v-btn
                  class="sepetEkle"
                  color="black"
                  width="150px"
                  dark>
                <span style="font-size: 20px">Sepete Ekle</span>
              </v-btn>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "formEdit",
  data: () => ({
    selectedFormType: 'formMan',
    player: false,
    special: false,
    notNumber: false,
    userName: '',
    userNumber: '',
    userName2: '',
    icSahaButton: false,
    deplasmanButton: false,
    ucFormButton: false,
    Bedenler: [
      {text: 'XS'},
      {text: 'S'},
      {text: 'M'},
      {text: 'L'},
      {text: 'XL'},
      {text: 'XXL'},
    ],
  }),
  methods: {
    jersey_type1() {
      this.player = true;
      this.special = false;
      this.notNumber = false;
    },
    jersey_type2() {
      this.player = false;
      this.special = true;
      this.notNumber = false;
    },
    jersey_type3() {
      this.player = false;
      this.special = false;
      this.notNumber = true;
    },
    typeButtonIc(){
      this.icSahaButton = !this.icSahaButton;
      this.deplasmanButton = false;
      this.ucFormButton = false;
    },
    typeButtonDeplasman(){
      this.deplasmanButton = !this.deplasmanButton;
      this.icSahaButton = false;
      this.ucFormButton = false;
    },
    typeButtonUcForm(){
      this.ucFormButton = !this.ucFormButton;
      this.icSahaButton = false;
      this.deplasmanButton = false;
    },
  },
  computed:{
    ...mapGetters({
      getPlayers: 'besiktasPlayers/getPlayers',
    }),
  }
}
</script>

<style scoped>
.leftRed {
  position: absolute;
  left: 0;
  padding: 180px;
  bottom: 40px;
  height: 640px;
  width: 600px;
  background: #c5242b;
  z-index: 0;
}

.formBackground {
  bottom: 28px;
  left: 230px;
  width: calc((100% - 1200px) / 2);
  transform: skewX(-7deg) translateX(-35px);
}

.forma {
  position: absolute;
}

.formEdit {
  margin-left: 120px;
}
.active-underline {
  text-decoration: underline;
}
.sepetEkle{
  left: 400px;
}
.typeButton {
  color: white;
}
</style>