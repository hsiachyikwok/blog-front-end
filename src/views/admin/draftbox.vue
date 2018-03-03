<template>
<v-container fill-height fluid grid-list-md>
  <v-layout>
    <v-flex xs22>
      <v-card>
        <v-card-title>
          <v-flex>
            <v-chip label>文章管理</v-chip>
          </v-flex>
          <v-spacer></v-spacer>
          <v-text-field append-icon="search" label="搜索" single-line hide-details v-model="search"></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="items" :search="search" :pagination.sync="pagination" :total-items="this.pagination.totalItems" :loading="loading" class="elevation-1">
          <template slot="items" slot-scope="props">
         <td>{{props.item.articleTitle }}</td>
         <td class="text-xs-right">{{ props.item.tags }}</td>
         <td class="text-xs-right">{{ props.item.createTime }}</td>
         <td class="text-xs-right">{{ props.item.updateTime }}</td>
         <td class="justify-center layout px-0">
           <v-btn icon class="mx-0" @click="editItem(props.item)">
             <v-icon color="teal">edit</v-icon>
           </v-btn>
           <v-btn icon class="mx-0" @click="deleteItem(props.item)">
             <v-icon color="pink">delete</v-icon>
           </v-btn>
         </td>
       </template>
        </v-data-table>
      </v-card>

    </v-flex>
    <v-flex xs2>
      <v-btn fixd dark fab color="pink" @click="postArticle()">
        <v-icon>add</v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</v-container>
</template>
<script>
import api from '@/api'
export default {
  data: () => ({
    loading: false,
    items: [],
    query: {
      state: '0',
      pageNum: 1,
      pageSize: 5
    },
    pagination: {
      totalItems: 10
    },
    search: '',
    headers: [{
        text: '标题',
        align: 'left',
        sortable: false,
      },
      {
        text: '标签',
        align: 'left',
        sortable: false,
      },
      {
        text: '创建时间',
        align: 'left',
        sortable: false,
      },
      {
        text: '修改时间',
        align: 'left',
        sortable: false,
      },
      {
        text: '操作',
        align: 'left',
        sortable: false
      }
    ]
  }),

  mounted() {
    this.loading = true
    this.getArticles()
  },
  computed: {
    pages() {
      if (this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      ) return 0

      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
    }
  },

  methods: {

    getArticles() {
      api.article.getArticleListByState(this.query).then(res => {
        this.items = res.body.list
        this.loading = false
        //this.pages = res.body.pages
      }, error => console.log(error))
    },


    postArticle() {
      this.$router.push('/admin/postarticle')
    },

    editItem(item) {
      // this.editedIndex = this.items.indexOf(item)
      // this.editedItem = Object.assign({}, item)
      // this.dialog = true
      this.$router.push('/admin/postarticle')
    },

    //   deleteItem(item) {
    //     const index = this.items.indexOf(item)
    //     confirm('Are you sure you want to delete this item?') && this.items.splice(index, 1)
    //   },
    //
    //   close() {
    //     this.dialog = false
    //     setTimeout(() => {
    //       this.editedItem = Object.assign({}, this.defaultItem)
    //       this.editedIndex = -1
    //     }, 300)
    //   },
    //
    //   save() {
    //     if (this.editedIndex > -1) {
    //       Object.assign(this.items[this.editedIndex], this.editedItem)
    //     } else {
    //       this.items.push(this.editedItem)
    //     }
    //     this.close()
    //   }
  }
}
</script>
