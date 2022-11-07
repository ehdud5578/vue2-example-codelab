<template>
  <v-sheet>
    <v-row dense>
      <v-col cols="3" class="font-weight-medium">제목</v-col>
      <v-col cols="9" v-text="info.title"></v-col>
      <v-col cols="3" class="font-weight-medium">작성자</v-col>
      <v-col cols="9" v-text="info.writer.name">작성자</v-col>
      <v-col cols="3" class="font-weight-medium">작성일</v-col>
      <v-col cols="9" v-text="info.regDate">2022-11-03</v-col>
      <v-col cols="12" v-if="info.thumnail">
        <v-img :src="info.thumnail"></v-img>
      </v-col>
      <v-col cols="12">
        <pre class="text-body-1" v-text="info.content" />
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import { mapGetters } from 'vuex';
import { GETTERS } from '@/common/constants';
export default {
  computed: {
    ...mapGetters({
      info: [GETTERS.BOARD.DETAIL],
    }),
  },
};
</script>

<style></style>
