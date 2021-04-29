<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="peserta" href="/tabs/peserta">
          <ion-icon :icon="people" />
        </ion-tab-button>
        <ion-tab-button tab="instansi" href="/tabs/instansi">
          <ion-icon :icon="business" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage } from '@ionic/vue';
import { people, business } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      people, 
      business,
    }
  }
}
</script>