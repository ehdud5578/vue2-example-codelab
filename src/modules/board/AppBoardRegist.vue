<template>
  <v-row class="pa-5">
    <validation-observer ref="observer" tag="fragment" v-slot="{ invalid }">
      <v-col cols="12">
        <validation-provider name="제목" rules="required" v-slot="{ errors }">
          <v-text-field
            type="text"
            background-color="white"
            color="black"
            label="제목"
            filled
            persistent-hint
            outlined
            v-model="state.title"
            :errorMessages="errors"
          />
        </validation-provider>
      </v-col>

      <v-col cols="12">
        <validation-provider name="내용" rules="required" v-slot="{ errors }">
          <v-textarea
            background-color="white"
            color="black"
            label="내용"
            filled
            persistent-hint
            outlined
            v-model="state.content"
            :errorMessages="errors"
          />
        </validation-provider>
      </v-col>
      <v-col cols="12" class="text-caption">썸네일</v-col>
      <v-col cols="12"> <app-file-upload-btn /> </v-col>
      <v-col cols="12">
        <v-btn block color="primary" :disabled="invalid" @click="onSubmit">저장</v-btn>
      </v-col>
    </validation-observer>
  </v-row>
</template>

<script>
import AppFileUploadBtn from '../file/AppFileUploadBtn.vue';
const INIT_STATE = () => ({});
export default {
  components: { AppFileUploadBtn },
  data() {
    return {
      state: INIT_STATE(),
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>

<style></style>
