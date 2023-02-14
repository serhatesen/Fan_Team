<template>
  <v-app-bar app color="white" height="120">
    <img
        class="ml-5"
        width="210"
        height="80"
        src="https://cdn.gsstore.org/images/frontend/logo-header.svg"/>
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="text-right mt-6">
          <v-btn depressed color="white">
            <Icon icon="mdi:gift" color="#FBC02D" width="20" height="20"/>
            Gift Card
          </v-btn>
          <v-btn depressed color="white">
            <Icon icon="mdi:truck-fast-outline" color="#d32f2f" width="20" height="20"/>
            Sipariş Takip
          </v-btn>
          <v-btn depressed color="white">
            <Icon icon="material-symbols:favorite-outline" color="#d32f2f" width="20" height="20"/>
            Favorilerim
          </v-btn>
          <v-btn color="#616161" depressed height="30px">
            <Icon icon="mdi:user-tie" color="white" width="20" height="20"/>
            Giriş Yap
          </v-btn>
          <v-btn color="#FBC02D" depressed height="30px">
            <Icon icon="mdi:cart" color="white" width="20" height="20"/>
            Sepetim
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="9" class="text-left">
          <v-btn depressed color="white"  >
            <Icon icon="simple-icons:nike"  height="20"/>
            Nike
          </v-btn>
          <v-btn depressed color="white" >
            Erkek
          </v-btn>
          <v-btn depressed color="white"  >
            Kadın
          </v-btn>
          <v-btn depressed color="white"  >
            Çocuk
          </v-btn>
          <v-btn depressed color="white"  >
            Bebek
          </v-btn>
          <v-btn depressed color="white"  >
            Hediye&Aksesuar
          </v-btn>
          <v-btn depressed color="white"  >
            Koleksiyon
          </v-btn>
          <v-btn depressed color="white" >
            Kampanya
          </v-btn>
          <v-btn depressed text color="#FBC02D" >
            İndirim
          </v-btn>
          <v-btn depressed text color="#d32f2f" >
            InstaShop
          </v-btn>
        </v-col>
        <v-col cols="3" class="text-right">
          <v-text-field
              outlined
              style="width: 400px;"
              placeholder="Ara"

          />
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import {Icon} from '@iconify/vue2';

export default {
  name: "barView",
  components: {
    Icon
  }
}
</script>

<style scoped>

</style>