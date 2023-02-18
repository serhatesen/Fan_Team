<template>
  <div>
    <bar-view/>
    <carousel-view/>
    <card-view class="card-component"/>
    <form-edit/>
  </div>
</template>

<script>
import BarView from "@/components/Bars/besiktasViewBar/barView.vue";
import CarouselView from "@/components/BesiktasView/carousel.vue";
import CardView from "@/components/BesiktasView/card.vue";
import FormEdit from "@/components/BesiktasView/formEdit.vue";

export default {
  name: "BesiktasView",
  components: {
    FormEdit,
    CardView,
    CarouselView,
    BarView
  }
}
</script>

<style scoped>

</style>