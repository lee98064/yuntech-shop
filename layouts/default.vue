<template>
  <v-app style="background-color: #eeeeee">
    <v-main>
      <SideBar :open="leftDrawer" @callback="SideBarLeftCallBack" />
      <Nuxt />
      <SideBarRight :open="rightDrawer" @callback="SideBarRightCallBack" />
      <!-- <v-btn
        color="success"
        fab
        dark
        fixed
        bottom
        right
        transition
        @click="rightDrawer = !rightDrawer"
      >
        <v-icon>fas fa-shopping-cart</v-icon>
      </v-btn> -->
      <v-speed-dial
        v-model="fab"
        fixed
        bottom
        right
        direction="top"
        transition="slide-y-reverse-transition"
      >
        <template v-slot:activator>
          <v-btn v-model="fab" color="#0097C2" dark fab>
            <v-icon v-if="fab">fas fa-times</v-icon>
            <v-icon v-else>fas fa-ellipsis-h</v-icon>
          </v-btn>
        </template>
        <v-btn fab dark color="green" @click="rightDrawer = !rightDrawer">
          <v-icon>fas fa-shopping-cart</v-icon>
        </v-btn>
        <v-btn fab dark color="indigo" @click="leftDrawer = !leftDrawer">
          <v-icon>fas fa-stream</v-icon>
        </v-btn>
      </v-speed-dial>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from '~/components/SideBar.vue'

export default {
  components: { SideBar },
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      fab: true,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      leftDrawer: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  methods: {
    SideBarLeftCallBack(data) {
      this.leftDrawer = data
    },
    SideBarRightCallBack(data) {
      this.rightDrawer = data
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');
* {
  font-family: 'Noto Sans TC', sans-serif;
}
a {
  text-decoration: none;
}
</style>