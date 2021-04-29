<template>
  <ion-slides class="slides">
    <ion-slide>
      <h1>e-PKL</h1>
    </ion-slide>
    <ion-slide>
      <h5>Akses Informasi Peserta dan Instansi bisa Kamu lihat disini.</h5>
      <ion-button fill="clear" href="/tabs/peserta">Mulai</ion-button>
    </ion-slide>
  </ion-slides>
</template>
<script>
import { IonSlides, IonSlide, IonButton } from "@ionic/vue";
export default {
  name: "Home",
  components: { IonSlides, IonSlide, IonButton, },
  setup() {
    const slideOpt = {
      initialSlide: 1,
      speed: 400,
    };
    return slideOpt;
  },
};
</script>

<style scoped>
.slides {
  width: 100%;
  height: 100%;
}
</style>
