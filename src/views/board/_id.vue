<template>
  <v-container class="pa-4">
    <v-sheet>
      <v-row dense>
        <v-col cols="3" class="font-weight-medium">제목</v-col>
        <v-col cols="9">제목 들어갑니다.</v-col>
        <v-col cols="3" class="font-weight-medium">작성자</v-col>
        <v-col cols="9">작성자가 들어갑니다.</v-col>
        <v-col cols="3" class="font-weight-medium">작성일</v-col>
        <v-col cols="9">2022-11-03</v-col>
        <v-col cols="12">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
        </v-col>
        <v-col cols="12">
          <pre class="text-body-1" v-text="'hello world'" />
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
export default {};
</script>

<style></style>
