<template>
  <v-navigation-drawer v-model="drawer" app color="white" mini-variant mini-variant-width="90">
      <v-avatar class="d-block text-center mx-auto mt-4" size="40">
          <img :src="require('~/static/logo.png')" alt="">
          <!-- <v-icon color="#1ab394">fas fa-coffee</v-icon> -->
      </v-avatar>
      <v-list flat class="mt-4">
          <v-list-item-group v-model="selectedItem">
              <v-list-item nuxt :to="{path: item.path}" v-for="(item, i) in items" :key="i" active-class="border" :ripple="false">
                  <v-list-item-content>
                      <v-icon v-text="item.icon"></v-icon>
                      <v-list-item-subtitle align="center" v-text="item.text" class="mt-3 caption"></v-list-item-subtitle>
                  </v-list-item-content>
              </v-list-item>
          </v-list-item-group>
      </v-list>
      <v-list flat class="bottom-fun mt-4">
          <v-list-item-group>
              <v-list-item nuxt to="/notification" active-class="border" :ripple="false">
                  <v-list-item-content>
                      <v-icon>fas fa-bell</v-icon>
                      <v-list-item-subtitle align="center" class="mt-3 caption">通知</v-list-item-subtitle>
                  </v-list-item-content>
              </v-list-item>
              <v-list-item nuxt to="/auth/login" active-class="border" :ripple="false">
                  <v-list-item-content>
                      <v-icon>fas fa-sign-in-alt</v-icon>
                      <v-list-item-subtitle align="center" class="mt-3 caption">登入</v-list-item-subtitle>
                  </v-list-item-content>
              </v-list-item>
          </v-list-item-group>
      </v-list>
      <!-- <nuxt-link active-class="border" style="position: absolute; bottom: 20px; margin-left: auto; margin-right: auto; left:0; right:0; text-align: center" to="/auth/login">
          <v-icon>fas fa-sign-in-alt</v-icon><br><span class="caption">登入</span>
      </nuxt-link> -->
      <!-- <v-btn
        absolute
        bottom
        left
        dark
        width="40"
        to="/auth/login"
        :color="type === 1 ? '#1ab394' : 'error'"
      >
         <v-icon>fas fa-sign-in-alt</v-icon><br><span class="caption">登入</span>
      </v-btn> -->
  </v-navigation-drawer>
</template>

<script>
export default {
    name: 'SideBar',
    data: () => ({
        selectedItem: 0,
        drawer: null,
        items: [
            {icon: 'fas fa-home', text:'首頁', path:'/'},
            {icon: 'fas fa-hamburger', text:'分類', path:'/category'},
            {icon: 'fas fa-history', text:'購買紀錄', path:'/history'},
            {icon: 'fas fa-wallet', text:'我的賣場', path:'/user/store'},
            // {icon: 'fas fa-percent', text:'Promo', path:''},
            // {icon: 'fas fa-cog', text:'Setting', path:''},
        ],
    })
}
</script>

<style>
.border {
    margin-left: 8px;
    margin-right: 8px;
    background: #1ab394;
    border-radius: 20px;
    text-decoration: none;
}
.bottom-fun{
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
}
.v-list-item-group .v-list-item--active {
    color: white !important;
}
.theme--light.v-list-item--active .v-list-item__subtitle, .theme--light.v-list-item .v-list-item__action-text .nuxt-link-exact-active{
    color: white !important;
}
</style>