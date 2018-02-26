<template>
<v-container>
  <v-layout>
    <v-flex>
      <v-card height="600px">
        <v-flex py-5 px-5>
          <v-chip label outline color="red" :key=item.id v-for="item in categoryList">
            <!-- <v-avatar>{{item.catName|getFirstChar}}</v-avatar> -->
            {{item.catName}}
          </v-chip>
        </v-flex>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>
<script>
import api from '@/api'
export default {
  data() {
    return {
      categoryList: []
    }
  },
  // filters: {
  //   getFirstChar: function(value) {
  //     return value.substr(0, 1)
  //   }
  // },
  mounted() {
    api.category.getCategoryList().then(res => {
      this.categoryList = res.body
    }, error => console.log(error))
  }
}
</script>
