<template>
  <v-content class="pa-0">
    <v-row>
      <v-col cols="12">
        <v-card elevation="12" outlined shaped>
          <v-system-bar color="primary" dark>
            <v-spacer></v-spacer>
            <v-icon>mdi-close</v-icon>
          </v-system-bar>

          <v-card-title>Title</v-card-title>
          <v-card-actions>
            <v-btn small color="primary accent-4">완료</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card elevation="12" outlined shaped>
          <v-system-bar>
            <v-spacer></v-spacer>
            <v-icon>mdi-close</v-icon>
          </v-system-bar>
          <v-card-title>Title</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
export default {};
</script>

<style></style>
