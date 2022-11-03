<template>
  <div>
    <div class="text-h5" v-text="'회원가입'"></div>
    <v-row class="pa-5">
      <v-col cols="12">
        <v-text-field
          type="text"
          background-color="white"
          color="black"
          label="EMAIL"
          filled
          persistent-hint
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          type="text"
          background-color="white"
          color="black"
          label="NAME"
          filled
          persistent-hint
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          type="password"
          background-color="white"
          color="black"
          label="PASSWORD"
          filled
          persistent-hint
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-btn block color="primary">회원가입</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
