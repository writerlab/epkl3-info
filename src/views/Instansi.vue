<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Instansi</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Instansi</ion-title>
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
            <h3>{{ list.nama }}</h3>
            <p v-if="list.slot == list.kuota">
              <ion-badge>Kuota Penuh</ion-badge>
            </p>
            <p v-else>
              Tersisa {{ list.kuota - list.slot }} slot dari {{ list.kuota }}
            </p>
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
  IonBadge,
  IonSearchbar,
} from "@ionic/vue";

export default {
  name: "Tab2",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonList,
    IonItem,
    IonLabel,
    IonBadge,
    IonSearchbar,
  },

  data: () => ({
    instansi: [],
    cari: "",
    fetchURL: "http://192.168.10.250/api",
  }),

  mounted() {
    this.getData();
  },

  methods: {
    async getData() {
      await fetch(`${this.fetchURL}/instansi/`)
        .then((response) => response.json())
        .then((data) => {
          this.instansi = data;
        });
    },
  },

  computed: {
    filterData() {
      return this.instansi.filter((item) => {
        return item.nama.toLowerCase().includes(this.cari.toLowerCase());
      });
    },
  },
};
</script>
