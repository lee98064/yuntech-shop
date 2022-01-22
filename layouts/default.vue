<template>
  <v-app style="background-color: #EEEEEE">
    <v-main>
      <SideBar />
      <Nuxt />
      <SideBarRight :open="rightDrawer" @callback="SideBarRightCallBack"/>
      <v-btn
        color="success"
        fab
        dark
        fixed
        bottom
        right
        transition
        @click="rightDrawer = ! rightDrawer"
      >
        <v-icon>fas fa-shopping-cart</v-icon>
      </v-btn>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "~/components/SideBar.vue"

export default {
  components: {SideBar},
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
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
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  methods:{
    SideBarRightCallBack(data){
      this.rightDrawer = data
    }
  }
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