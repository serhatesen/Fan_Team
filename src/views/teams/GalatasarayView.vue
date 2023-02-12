<template>
  <div>
    <bar-view/>
    <v-sheet color="#B71C1C" class="text-center">
      <span class="white--text" style="font-size: 30px">#GeçmişOlsunTürkiye</span>
    </v-sheet>
    <v-img
        width="100%"
        height="auto"
        src="https://cdn.gsstore.org/UPLOAD/banner/anasayfa-slider/deprem-web.jpg"
    />
    <v-container>
      <v-row>
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
        <v-col cols="3">
          <v-container>
            <v-btn depressed class=" mx-auto d-block">
              <img
                  style="position: absolute; margin: auto; top: -40px"
                  width="auto"
                  height="auto"
                  src="https://cdn.gsstore.org/UPLOAD/banner/primaryCategories/ayin-onbiri-dortlu.jpg"
              />
            </v-btn>
          </v-container>
        </v-col>
        <v-col cols="3">
          <v-container>
            <v-btn depressed class=" mx-auto d-block">
              <img
                  style="position: absolute; margin: auto; top: -40px"
                  width="auto"
                  height="auto"
                  src="https://cdn.gsstore.org/UPLOAD/banner/primaryCategories/sezon-ortasi-ocakk.jpg"
              />
            </v-btn>
          </v-container>
        </v-col>
        <v-col cols="3">
          <v-container>
            <v-btn depressed class=" mx-auto d-block">
              <img
                  style="position: absolute; margin: auto; top: -40px"
                  width="auto"
                  height="auto"
                  src="https://cdn.gsstore.org/UPLOAD/banner/primaryCategories/garaj-firsatii-ocakk.jpg"
              />
            </v-btn>
          </v-container>
        </v-col>
        <v-col cols="3">
          <v-container>
            <v-btn depressed class=" mx-auto d-block">
              <img
                  style="position: absolute; margin: auto; top: -40px"
                  width="auto"
                  height="auto"
                  src="https://cdn.gsstore.org/UPLOAD/banner/primaryCategories/tek-fiyat-ocakk.jpg"
              />
            </v-btn>
          </v-container>
        </v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
        <v-col cols="6">
          <v-container>
            <img
                style="display: block; margin-left: auto; margin-right: auto; width: 100%;"
                width="200px"
                height="500px"
                src="https://cdn.gsstore.org/UPLOAD/banner/primaryCategories/ic-saha-desktop.jpg"/>
          </v-container>
          <div>
            <v-sheet class="text-center">
              <span class="font-weight-bold" style="font-size: 20px" title>İç saha</span>
              <v-spacer/>
              <span>Formanı Keşfet</span>
              <v-spacer/>
              <v-btn width="20px">
                <v-hover>
                  <v-spacer/>
                  <template v-slot:default="{ hover }">
                    <v-btn
                        :color="hover ? '#FBC02D' : '#B71C1C'"
                    >
                      İncele
                    </v-btn>
                  </template>
                  <v-spacer/>
                </v-hover>
              </v-btn>
            </v-sheet>
          </div>
        </v-col>
        <v-col cols="6">
          <v-container>
            <img
                width="200px"
                height="500px"
                style="display: block; margin-left: auto; margin-right: auto; width: 100%;"
                src="https://cdn.gsstore.org/UPLOAD/banner/primaryCategories/kaleci-mobil-ikili.jpg"/>
          </v-container>
          <div>
            <v-sheet class="text-center">
              <span class="font-weight-bold" style="font-size: 20px" title>Kaleci</span>
              <v-spacer/>
              <span>Formanı Keşfet</span>
              <v-spacer/>
              <v-btn width="20px">
                <v-hover>
                  <v-spacer/>
                  <template v-slot:default="{ hover }">
                    <v-btn
                        :color="hover ? '#FBC02D' : '#B71C1C'"
                    >
                      İncele
                    </v-btn>
                  </template>
                  <v-spacer/>
                </v-hover>
              </v-btn>
            </v-sheet>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <forma-tasarla/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BarView from "@/components/Bars/galatasarayViewBar/barView.vue";
import FormaTasarla from "@/components/GalatasarayView/formaTasarla.vue";

export default {
  name: "GalatasarayView",
  components: {FormaTasarla, BarView}
}
</script>

<style scoped>

</style>