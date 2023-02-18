<template>
  <div>
    <v-container fluid style="padding-left: 13px; padding-right: 20px" class="black py-16">
      <v-row>
        <v-col cols="4" class="mx-auto">
          <v-hover>
            <template v-slot="{ hover }">
              <v-img
                  min-width="550"
                  min-height="560"
                  src="https://img1-kartalyuvasi.mncdn.com/UPLOAD/banner/kategori/eagle_mode_primary_tr_1.jpg">
                <v-row>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="8"/>
                  <v-col cols="4">
                    <p v-show="hover" class="subheading text-left white--text"
                    >
                      Ürün İncele
                      <v-icon class="white--text">mdi-arrow-right-bold</v-icon>
                    </p>
                  </v-col>
                </v-row>
              </v-img>
            </template>
          </v-hover>
        </v-col>
        <v-col cols="4" class="mx-auto">
          <v-hover>
            <template v-slot="{hover}">
              <v-img
                  min-width="550"
                  min-height="560"
                  src="https://img1-kartalyuvasi.mncdn.com/UPLOAD/banner/kategori/T3_koleksiyon_primary_tr_1.jpg">
                <v-row>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="4"/>
                  <v-col cols="4"/>
                  <v-col cols="4">
                    <p v-show="hover" class="subheading text-left white--text"
                    >
                      Ürün İncele
                      <v-icon class="white--text">mdi-arrow-right-bold</v-icon>
                    </p>
                  </v-col>
                </v-row>
              </v-img>
            </template>
          </v-hover>
        </v-col>
        <v-col cols="4" class="mx-auto">
          <v-hover>
            <template v-slot="{hover}">
              <v-img
                  min-width="550"
                  min-height="560"
                  src="https://img1-kartalyuvasi.mncdn.com/UPLOAD/banner/kategori/T2_koleksiyon_primary_tr_1.jpg">
                <v-row>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="12"/>
                  <v-col cols="4"/>
                  <v-col cols="4"/>
                  <v-col cols="4">
                    <p v-show="hover" class="subheading text-left white--text"
                    >
                      Ürün İncele
                      <v-icon class="white--text">mdi-arrow-right-bold</v-icon>
                    </p>
                  </v-col>
                </v-row>
              </v-img>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "cardView",
  data: () => ({
    hover: false
  })
}
</script>

<style scoped>
</style>