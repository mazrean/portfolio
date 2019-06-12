<template>
  <v-container>
    <v-layout justify-center class="headline green accent-3 white--text">
      作品一覧
    </v-layout>
    <v-layout row justify-start class="white">
      <ul>
        <li>
          <v-layout column>
            <v-layout
              ><a href="http://mazrean-twitter-clone.netlify.com"
                >TwitterClone</a
              ></v-layout
            >
            <v-layout
              >trapのWebエンジニアになろう講習会の最終課題として作ったものです。</v-layout
            >
          </v-layout>
        </li>
        <li>
          <v-layout column>
            <v-layout
              ><a href="http://mazreantodo.netlify.com">ToDoList</a></v-layout
            >
            <v-layout
              >trapのWebエンジニアになろう講習会の途中で作ったものです。</v-layout
            >
          </v-layout>
        </li>
      </ul>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "Works"
};
</script>
