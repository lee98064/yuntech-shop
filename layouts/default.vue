<template>
  <v-app style="background-color: #EEEEEE">
    <v-main>
      <SideBar />
      <Nuxt />
      <SideBarRight />
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
}
</script>
