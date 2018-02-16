<template>
<v-container>
  <v-layout>
    <v-flex elevation-1 mt-1>
      <v-chip :key=n v-for="n in 20">
        <v-avatar class="teal">J</v-avatar>
        Java
      </v-chip>
    </v-flex>
  </v-layout>
</v-container>
</template>
<script>
export default {
  data() {
    return {

    }
  }

}
</script>
