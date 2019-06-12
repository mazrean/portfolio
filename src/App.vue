<template>
  <v-app>
    <v-toolbar class="green accent-3">
      <v-layout justify-center>
        <v-toolbar-title class="headline white--text">
          Mazrean`s Portfolio
        </v-toolbar-title>
      </v-layout>
      <v-menu bottom origin="center center" transition="scale-transition">
        <template v-slot:activator="{ on }">
          <v-btn depressed color="green accent-3" v-on="on">
            <v-icon color="white">menu</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            @click="item.change"
          >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content class="green accent-1">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      items: [
        {
          title: "Top",
          change: () => {
            this.$router.push("/");
          }
        },
        {
          title: "Works",
          change: () => {
            this.$router.push("/works");
          }
        }
      ]
    };
  }
};
</script>
