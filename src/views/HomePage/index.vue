<template>
<v-app>
  <v-toolbar app>
    <v-avatar>
      <img src="http://5b0988e595225.cdn.sohucs.com/images/20180205/05a9b6978c47476d8d12694de36dedfe.jpeg" alt="avatar">
    </v-avatar>
    <v-toolbar-title>Hsia'Blog</v-toolbar-title>
    <v-flex ml-5>
      <v-btn icon>
        <v-icon standard color="green darken-2">fa-github</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon standard color="green darken-2">label</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon standard>archive</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon standard>home</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon standard>favorite</v-icon>
      </v-btn>
    </v-flex>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-text-field name="search" label="搜索" id="search">
    </v-text-field>
  </v-toolbar>

  <v-content>
    <v-container fluid grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs3>
          <v-container>
            <v-layout column>
              <v-flex>
                <v-card>
                  <v-avatar size="100px">
                    <img src="http://5b0988e595225.cdn.sohucs.com/images/20180205/05a9b6978c47476d8d12694de36dedfe.jpeg">
                  </v-avatar>
                  <v-divider></v-divider>
                  dd
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
        <v-flex xs6>
          <v-container>
            <v-layout column>
              <v-flex v-for="n in 3" :key=n mb-3 text-xs-left>
                <v-card>
                  <!-- <v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">
                  </v-card-media> -->
                  <v-card-title primary-title>
                    文章标题
                  </v-card-title>
                  <v-card-text v-text="notice"></v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-btn flat color="orange">分享</v-btn>
                    <v-btn flat color="orange">阅读更多</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex>
                <v-pagination :length="6" v-model="page"></v-pagination>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
        <v-flex xs3>
          <v-container>
            <v-layout column>
              <v-flex>
                <strong>公告</strong>
              </v-flex>
              <v-flex text-xs-left>
                <v-card>
                  <v-card-text v-text="notice"></v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
    <hr/>
    <!-- <v-container fluid grid-list-md text-xs-center>
      <v-layout>
        <v-flex>
          下半部分
        </v-flex>
      </v-layout>
    </v-container> -->
  </v-content>

  <v-footer height="auto" app>
    <v-layout row wrap justify-center>
      <v-flex xs12 py-3 text-xs-center darken-3--text>
        &copy; 2018 <strong>powered by vuetify</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</v-app>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  data: () => ({
      notice: '迁移博客到自造的小轮子~',
      page:1
    }),
  components: {
    VueMarkdown
  }
}
</script>
