<template>
<v-app>
  <v-toolbar app>
    <v-avatar>
      <img src="http://5b0988e595225.cdn.sohucs.com/images/20180205/05a9b6978c47476d8d12694de36dedfe.jpeg" alt="avatar">
    </v-avatar>
    <v-toolbar-title>Hsia'Blog</v-toolbar-title>
    <v-flex ml-5>
      <v-btn icon>
        <v-icon large>pets</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon large>label</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon large>archive</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon large>home</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon large>favorite</v-icon>
      </v-btn>
    </v-flex>
    <v-spacer></v-spacer>
    <!-- 头像和标题 -->
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
                  <v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">
                  </v-card-media>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                      <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
        <v-flex xs6>
          <v-container>
            <v-layout column>
              <v-flex v-for="n in 3" :key=n mb-3>
                <v-card>
                  <v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">
                  </v-card-media>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                      <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <flex>
                <v-pagination :length="6" v-model="page"></v-pagination>
              </flex>
            </v-layout>
          </v-container>
        </v-flex>
        <v-flex xs3>
          <v-container>
            <v-layout column>
              <v-flex>
                公告
              </v-flex>
              <v-flex>
                <v-card>
                  <v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">
                  </v-card-media>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                      <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
    <hr/>
    <v-container fluid grid-list-md text-xs-center>
      <v-layout>
        <v-flex>
          下半部分
        </v-flex>
      </v-layout>
    </v-container>
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
  components: {
    VueMarkdown
  }
}
</script>
