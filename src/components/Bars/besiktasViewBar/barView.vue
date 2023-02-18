<template>
  <div class="bar">
    <div>
      <v-container fluid>
        <v-row class="black">
          <v-col cols="6" class="mt-5">
            <span class="white--text" style="font-size: 13px">Beşiktaş JK Resmi Alışveriş Sitesi</span>
          </v-col>
          <v-col cols="6" class="text-right mt-5">
            <v-btn depressed color="black" class="white--text">
              <v-img
                  width="20px"
                  height="15px"
                  src="https://img1-kartalyuvasi.mncdn.com/images/frontend/flags/GB.svg"
              />
              <span class="font-weight-bold" style="font-size: 10px">ENGLISH/€</span>
            </v-btn>
            <v-btn depressed color="black" class="white--text">
              <span class="font-weight-bold" style="font-size: 10px">Satış Noktaları</span>
            </v-btn>
            <v-btn depressed color="black" class="white--text">
              <span class="font-weight-bold" style="font-size: 10px">Sipariş Takip</span>
            </v-btn>
            <v-btn depressed color="black" class="white--text">
              <v-icon color="white">mdi-gift</v-icon>
              <span class="font-weight-bold" style="font-size: 10px">Gift Card</span>
            </v-btn>
            <v-btn tile color="red darken-1" class="white--text">
              <span class="font-weight-bold" style="font-size: 10px">Hesabım</span>
              <v-icon color="white">mdi-account</v-icon>
            </v-btn>
            <v-btn tile color="red darken-1" class="white--text">
              <span class="font-weight-bold" style="font-size: 10px">0 Ürün</span>
              <v-icon color="white">mdi-shopping</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="bottonWhite">
      <v-container fluid>
        <v-row class="white">
          <v-col cols="3">
            <v-img
                width="130px"
                style="background-color: white"
                src="https://img1-kartalyuvasi.mncdn.com/images/frontend/symbol-logo-b.svg">
            </v-img>
          </v-col>
          <v-col cols="7">
            <v-btn depressed>
              <v-img
                  width="28px"
                  height="19px"
                  src="https://img1-kartalyuvasi.mncdn.com/upload/banner/menu/adidas.svg"
              />
              <span class="font-weight-bold" style="font-size: 10px">Futbol</span>
            </v-btn>
            <v-btn depressed >
              <span class="font-weight-bold" style="font-size: 10px">Erkek</span>
            </v-btn>
            <v-btn depressed>
              <span class="font-weight-bold" style="font-size: 10px">Kadın</span>
            </v-btn>
            <v-btn depressed>
              <span class="font-weight-bold" style="font-size: 10px">Çocuk</span>
            </v-btn>
            <v-btn depressed>
              <span class="font-weight-bold" style="font-size: 10px">Bebek</span>
            </v-btn>
            <v-btn depressed>
              <span class="font-weight-bold" style="font-size: 10px">Aksesuar</span>
            </v-btn>
            <v-btn depressed>
              <span class="font-weight-bold" style="font-size: 10px">Aksesuar/Diğer</span>
            </v-btn>
            <v-btn depressed>
              <span class="font-weight-bold" style="font-size: 10px">Kampanyalar</span>
            </v-btn>
            <v-btn depressed style="color: #D32F2F">
              <span class="font-weight-bold" style="font-size: 10px">İndirim</span>
            </v-btn>
          </v-col>
          <v-col col="2">
            <v-text-field
                placeholder="Ürün Ara"
                color="red darken-1"
                solo
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "barView"
}
</script>

<style scoped>
.bottonWhite{
  box-shadow: 5px 5px 9px #BDBDBD;
}
.bar {
  position: fixed;
  width: 100%;
  display: block;
  z-index: 999;
}
</style>