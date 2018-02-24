<template>
<v-container>
  <v-layout>
    <v-flex>
      <v-card height="600px">
        <div>
          <v-chip :key=item.id v-for="item in categoryList">
            <v-avatar class="teal">C</v-avatar>
            {{item.catName}}
          </v-chip>
        </div>
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
  mounted() {
    api.category.getCategoryList().then(res => {
      this.categoryList = res.body
    }, error => console.log(error))
  }
}
</script>
