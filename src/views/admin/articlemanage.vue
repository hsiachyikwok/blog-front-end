<template>
<v-container fill-height fluid grid-list-md>
  <v-layout>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">删除文章</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click.native="deleteArticle()">是</v-btn>
          <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">否</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-flex xs22>
      <v-card>
        <v-card-title>
          <v-chip label>文章管理</v-chip>
        </v-card-title>
        <v-data-table :headers="headers" :items="items" :pagination.sync="query" hide-actions :loading="loading">
          <template slot="items" slot-scope="props">
         <td>{{props.item.articleTitle }}</td>
         <td class="text-xs-right">{{ props.item.tags|formatTags }}</td>
         <td class="text-xs-right">{{ props.item.createTime|formatDate}}</td>
         <td class="text-xs-right">{{ props.item.updateTime|formatDate}}</td>
         <td class="justify-center layout px-0">
           <v-btn icon class="mx-0" @click="editItem(props.item)">
             <v-icon color="teal">edit</v-icon>
           </v-btn>
           <v-btn icon class="mx-0" @click="showDialog(props.item.id)">
             <v-icon color="pink">delete</v-icon>
           </v-btn>
         </td>
       </template>
        </v-data-table>
        <div class="text-xs-center pt-2">
          <v-pagination v-model="query.pageNum" :length="pages" :total-visible="7" @input="pageChange()"></v-pagination>
        </div>
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
import {
  formatDate
} from '@/utils/dateformat.js'
export default {
  data: () => ({
    deleteId: '',
    items: [],
    dialog: false,
    pages: 0,
    loading: false,
    query: {
      state: '1',
      pageNum: 1,
      pageSize: 5,
    },
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
  components: {

  },
  filters: {
    formatDate(time) {
      let date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd hh:mm')
    },
    formatTags(tags) {
      return tags.substr(0, tags.length - 1)
    }
  },
  methods: {
    getArticles() {
      api.article.getArticleListByState(this.query).then(res => {
        this.items = res.body.list
        this.pages = res.body.pages
        this.loading = false
      }, error => console.log(error))
    },
    pageChange() {
      this.getArticles()
    },
    postArticle() {
      this.$router.push('/admin/postarticle')
    },
    editItem(article) {
      this.$router.push({
        name: 'postarticle',
        query: {
          id: article.id
        }
      })
    },
    showDialog(id) {
      this.dialog = true
      this.deleteId = id
    },
    deleteArticle() {
      this.dialog = false
      api.article.delArticle(this.deleteId).then(res => {
        this.$toast.center('删除成功！');
      }, error => console.log(error))
    }
  }
}
</script>
