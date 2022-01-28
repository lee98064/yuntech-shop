<template>
  <v-container>
    <v-toolbar color="rgba(0,0,0,0)" flat>
      <v-toolbar-title class="mt-n3 text-h4">現正熱賣</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        label="Search category or menu..."
        class="mt-5"
        color="brown"
        filled
        append-icon="mdi-magnify"
        dense
        solo
        flat
        background-color="grey lighten-4"
      ></v-text-field>
    </v-toolbar>
    <v-toolbar color="#EEEEEE" flat>
      <v-toolbar-title>剛上架賣家</v-toolbar-title><v-spacer></v-spacer
      ><span color="grey">{{ salers.length }} Coffees Results</span>
    </v-toolbar>
    <v-slide-group v-model="selectedItem" class="pa-4" mandatory show-arrows>
      <v-slide-item
        v-for="saler in salers"
        :key="saler.id"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? '#E7FEF7' : 'white'"
          :class="active ? 'borderme' : 'borderout'"
          class="d-flex align-center rounded-lg mx-2"
          dark
          height="140"
          @click="toggle"
          flat
        >
          <v-list-item three-line class="text-center">
            <v-list-item-content class="pt-10 pb-10">
              <div align="center" justify="center">
                <v-img
                  :src="saler.avatar"
                  max-height="150"
                  max-width="110"
                  min-height="110"
                  contain
                ></v-img>
              </div>
              <v-list-item-subtitle
                :class="active ? 'brown--text' : 'black--text'"
                class="caption mt-4 mb-4"
                v-text="saler.name"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-slide-item>
    </v-slide-group>
    <!-- <v-item-group mandatory class="mt-n1">
      <v-container>
        <v-row justify="start" class="space">
          <v-col cols="4" md="2" v-for="item in salers" :key="item.id">
            <v-item v-slot="{ active, toggle }">
              <v-card
                :color="active ? '#E7FEF7' : 'white'"
                :class="active ? 'borderme' : 'borderout'"
                class="d-flex align-center rounded-lg mx-2"
                dark
                height="140"
                @click="toggle"
                flat
              >
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-list-item three-line class="text-center">
                      <v-list-item-content>
                        <div align="center" justify="center">
                          <v-img
                            :src="item.avatar"
                            max-height="110"
                            max-width="110"
                            min-height="110"
                            contain
                          ></v-img>
                        </div>
                        <v-list-item-subtitle
                          :class="active ? 'brown--text' : 'black--text'"
                          class="caption mt-4"
                          v-text="item.name"
                        ></v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                </v-row>
              </v-card>
            </v-item>
          </v-col>
          
        </v-row>
      </v-container>
    </v-item-group> -->
    <v-toolbar color="#EEEEEE" flat>
      <v-toolbar-title>Coffee Menu</v-toolbar-title><v-spacer></v-spacer
      ><span color="grey">12 Coffees Results</span>
    </v-toolbar>
    <v-row class="mx-1 mx-md-2 mx-sm-1">
      <v-col v-for="n in 20" cols="6" lg="2" md="3" sm="6" class="py-0 px-2" :key="n">
        <Product name="這是產品" price="100"/>
      </v-col>
      <!-- <v-col cols="6" sm="3" class="py-0 px-2">
         <v-card flat class="rounded-lg mx-5">
          <v-list-item three-line>
            <v-list-item-avatar rounded size="120" color="grey lighten-4">
              <v-img :src="require('~/assets/images/2.png')"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="text-h5">
                Caramel Frappuccino
              </v-list-item-title>
              <v-list-item-subtitle class="mt-1"
                >Caramel sytrup with coffee, milk, and whipped
                cream</v-list-item-subtitle
              >
              <strong class="mt-3"> $3.95 </strong>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions> </v-card-actions>
          <v-card-actions> </v-card-actions>
          <v-card-actions>
            <v-btn color="#1AB394" block dark class="withoutupercase mb-2"
              >加入購物車</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
import Product from '~/components/Product.vue';
export default {
  name: 'Home',
  components:{ Product },
  data() {
    return {
      salers: [
        {
          id: 0,
          name: '李梓安',
          avatar: require('~/assets/images/c1.png'),
        },
        {
          id: 1,
          name: '李梓安2',
          avatar: require('~/assets/images/c2.png'),
        },
        {
          id: 2,
          name: '李梓安3',
          avatar: require('~/assets/images/c3.png'),
        },
        {
          id: 3,
          name: '李梓安4',
          avatar: require('~/assets/images/c4.png'),
        },
      ],
      selectedItem: 0,
    }
  },
}
</script>
<style>
.v-card.borderme {
  border: 2px solid #1ab394 !important;
}
.v-card.borderout {
  border: 1px solid #e7fef7 !important;
}
</style>
