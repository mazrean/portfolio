<template>
  <v-container justify-center>
    <v-layout justify-center class="headline green accent-3 white--text">
      mazrean
    </v-layout>
    <v-layout row justify-start>
      <v-flex sm5 xs3>
        <v-img v-bind:src="require('./img/icon.jpg')" aspect-ratio="1" />
      </v-flex>

      <v-flex sm7 xs9>
        <v-layout column wrap class="white">
          <v-layout justify-center class="title green accent-2 white--text">
            基本情報
          </v-layout>
          <v-layout column justify-start class="mt-3 ml-3 mb-3 mr-3">
            <ul>
              <li>
                所属:<a href="https://trap.jp/">デジタル創作同好会traP</a
                >,折り紙同好会
              </li>
              <li>好きなもの:折り紙</li>
            </ul>
          </v-layout>
          <v-layout full-height />
        </v-layout>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs6>
        <v-layout column wrap class="white">
          <v-layout justify-center class="title green accent-2 white--text">
            プログラミング
          </v-layout>
          <v-layout column justify-center class="mt-1 ml-3 mr-3">
            使える言語
            <v-layout column justify-start class="ml-3 mr-3 mb-3">
              <ul>
                <li>Go</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>C#</li>
              </ul>
            </v-layout>
          </v-layout>
        </v-layout>
      </v-flex>
      <v-flex xs6>
        <v-layout column wrap class="white">
          <v-layout justify-center class="title green accent-2 white--text">
            挨拶
          </v-layout>
          <v-layout column justify-center class="mt-1 ml-3 mr-3">
            はじめまして。マズリーンです。皆さんよろしくお願いします。
          </v-layout>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Intro"
};
</script>
