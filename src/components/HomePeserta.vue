<template>
  <ion-searchbar v-model="cari" id="cari" placeholder="Cari..."></ion-searchbar>
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
</template>

<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonSearchbar,
  IonBadge,
} from "@ionic/vue";

export default {
  name: "HomePeserta",
  components: {
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

<style scoped>
/* DOES NOT WORK - not specific enough */
.modal-wrapper {
  background: #222;
}

/* Works - pass "my-custom-class" in cssClass to increase specificity */
.my-custom-class .modal-wrapper {
  background: #222;
}
</style>
