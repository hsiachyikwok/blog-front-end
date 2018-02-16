<template>
<v-container>
  <v-layout>
    <v-flex text-xs-center>
      <v-card>
        <div v-for="n in 10">
          <div>
            <h1>2018</h1>
          </div>
          <div v-for="n in 3">
            vue js 入门
          </div>
        </div>
      </v-card>
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
