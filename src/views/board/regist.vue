<template>
  <v-content class="pa-0">
    <h3>게시글 작성/수정</h3>
    <v-row class="pa-5">
      <v-col cols="12">
        <v-text-field
          type="text"
          background-color="white"
          color="black"
          label="제목"
          filled
          persistent-hint
          outlined
        />
      </v-col>
      <v-col cols="12">
        <v-textarea
          background-color="white"
          color="black"
          label="내용"
          filled
          persistent-hint
          outlined
        />
      </v-col>
      <v-col cols="12" class="text-caption">썸네일</v-col>
      <v-col cols="12">
        <v-card class="d-flex align-center" filled outlined height="200" @click="() => {}">
          <div v-if="false" class="flex-grow-1 text-center">
            <v-icon>mdi-camera</v-icon>
          </div>
          <div v-else class="flex-grow-1 text-center">
            <v-img height="200" src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-btn block color="primary">저장</v-btn>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
export default {};
</script>

<style></style>
