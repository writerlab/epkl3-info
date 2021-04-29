<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Peserta</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Peserta</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-searchbar
        v-model="cari"
        id="cari"
        placeholder="Cari..."
      ></ion-searchbar>
      <ion-list>
        <ion-item :key="list.id" v-for="list in filterData">
          <ion-label>
            <h3>
              {{ list.nama }}
              <span v-if="!list.isRapotTuntas">
                <ion-badge color="danger">Belum Tuntas</ion-badge>
              </span>
            </h3>
            <p>{{ list.kelas }}</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonSearchbar,
  IonBadge,
} from "@ionic/vue";

export default {
  name: "Home",

  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonList,
    IonItem,
    IonLabel,
    IonSearchbar,
    IonBadge,
  },

  data: () => ({
    peserta: [],
    cari: "",
    fetchURL: "http://192.168.10.250/api",
  }),

  mounted() {
    this.getData();
  },

  methods: {
    async getData() {
      await fetch(`${this.fetchURL}/siswa/`)
        .then((response) => response.json())
        .then((data) => {
          // this.pesertaRPL = data.filter(
          //   (item) => item.program_ahli == "Rekayasa Perangkat Lunak"
          // );
          this.peserta = data;
        });
    },
  },

  computed: {
    filterData() {
      return this.peserta.filter((item) => {
        return item.nama.toLowerCase().includes(this.cari.toLowerCase());
      });
    },
  },
};
</script>
