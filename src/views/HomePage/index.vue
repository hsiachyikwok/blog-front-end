<template>
<v-app>
  <v-toolbar>
    <v-avatar>
      <img src="http://5b0988e595225.cdn.sohucs.com/images/20180205/05a9b6978c47476d8d12694de36dedfe.jpeg" alt="avatar">
    </v-avatar>
    <v-toolbar-title>Hsia'blog</v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- 导航栏 -->
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
    <v-spacer></v-spacer>
    <!-- 头像和标题 -->
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-text-field name="search" label="搜索" id="search">
    </v-text-field>
    <!-- 导航项目 -->

    <!-- 搜索框 -->
  </v-toolbar>





  <v-content>
    <v-container fluid>
      <v-layout>
        <!-- 个人简介 -->
        <v-flex mr-5>
          <v-content>
            <v-container elevation-1>
              <v-layout>
                ddd
              </v-layout>
            </v-container>
          </v-content>
        </v-flex>
        <!-- 个人简介 -->
        <!-- 文章列表 -->
        <v-flex>
          <v-content>
            <!-- 循环文章列表 -->
            <v-flex v-for="n in 5" :key=n mb-3>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                    <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                  </div>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn flat color="orange">Share</v-btn>
                  <v-btn flat color="orange">Explore</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
            <!-- 循环文章列表 -->
          </v-content>
          <!-- 分页器 -->
          <v-content>
            <v-container>
              <v-layout justify-center>
                <v-pagination :length="6" v-model="page"></v-pagination>
              </v-layout>
            </v-container>
          </v-content>
          <!-- 分页器 -->

        </v-flex>
        <!-- 文章列表 -->
        <!-- 公告 -->
        <v-flex ml-5>
          <v-content>
            <v-container elevation-1>
              <v-layout>
                <v-flex elevation-2>
                  dddddfffffff
                </v-flex>
              </v-layout>
            </v-container>
          </v-content>
        </v-flex>
        <!-- 公告 -->
      </v-layout>
    </v-container>
  </v-content>

  <hr/>
  <!-- 下半部分 -->
  <!-- <v-content>
    <v-container fluid>
      <v-layout>
        <v-flex elevation-1>
          dddddd dddddd
        </v-flex>
      </v-layout>
    </v-container>
  </v-content> -->
  <!-- 下半部分 -->

  <v-footer height="auto">
    <v-layout row wrap justify-center>
      <v-flex xs12 py-3 text-xs-center darken-3--text>
        &copy; 2018 <strong>powered by vuetify</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</v-app>
</template>

<script>
export default {}
</script>
