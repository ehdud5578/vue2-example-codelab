<template>
  <v-card class="d-flex align-center" filled outlined height="200" @click="onClick">
    <div v-if="value" class="flex-grow-1 text-center">
      <v-img height="200" src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
    </div>
    <div v-else class="flex-grow-1 text-center">
      <v-icon>mdi-camera</v-icon>
    </div>
    <input v-show="false" type="file" ref="fileInput" @change="onChange" />
  </v-card>
</template>

<script>
import { fileService } from '@/services/api';
export default {
  name: 'app-file-upload-btn',
  props: {
    value: {
      type: String,
      require: true,
    },
  },
  methods: {
    onClick() {
      this.$refs.fileInput.click();
    },
    async onChange(e, values) {
      const file = e.target.files[0];
      if (file) {
        const data = await fileService.upload(file);
      }
    },
  },
};
</script>

<style></style>
