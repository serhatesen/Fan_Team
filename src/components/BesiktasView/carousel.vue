<template>
  <div>
    <v-container fluid class="py-9 black">
      <v-row>
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12"></v-col>
        <v-col cols="12">
          <v-carousel v-model="model" height="700px" >
            <v-carousel-item
                v-for="photo in photos"
                :key="photo"

            >
              <v-sheet
                  height="100%"
                  class="text-center justify-center"
              >
                <div>
                  <v-img width="100%"
                       height="900px"
                      :src="photo"/>
                </div>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
export default {
  name: "carouselView",
  data: () => ({
    model: 0,
    photos: [
      'https://img1-kartalyuvasi.mncdn.com/UPLOAD/banner/anasayfa-slider/Desktop/deprem_seferberlikTR_bannerg.jpg',
      'https://img1-kartalyuvasi.mncdn.com/UPLOAD/banner/anasayfa-slider/Desktop/deprem_banner.jpg',
      'https://img1-kartalyuvasi.mncdn.com/UPLOAD/banner/anasayfa-slider/Desktop/indirimOCAK2023_bannerOK-01.jpg',
      'https://img1-kartalyuvasi.mncdn.com/UPLOAD/banner/anasayfa-slider/Desktop/22-23_kis_slider_tr.jpg',
      'https://img1-kartalyuvasi.mncdn.com/UPLOAD/banner/anasayfa-slider/Desktop/Forma_Slider_tr_23.jpg',
      'https://img1-kartalyuvasi.mncdn.com/UPLOAD/banner/anasayfa-slider/Desktop/kamp_antrenman_bannerOCAK_tr.jpg',
      'https://img1-kartalyuvasi.mncdn.com/UPLOAD/banner/anasayfa-slider/Desktop/fitness_1920x840-kartal-2.jpg'
    ],
  }),
}
</script>

<style scoped>

</style>