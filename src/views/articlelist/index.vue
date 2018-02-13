<template>
<v-container>
  <v-layout column>
    <v-flex v-for="n in 3" :key=n mb-3 text-xs-left>
      <v-card>
        <!-- <v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">
          </v-card-media> -->
        <v-card-title primary-title>
          <v-flex text-xs-center>
            <h3>手把手教你撸一个博客系统</h3> 2018 2-13 views:100
          </v-flex>
        </v-card-title>
        <v-card-text v-text="notice"></v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-icon small color="green">fa-tag</v-icon>
          <a herf="www">springboot</a> ,
          <a herf="www">vue</a> ,
          <a herf="www">springcloud</a>
          <v-spacer></v-spacer>
          <v-btn flat color="orange" @click.native="$router.push({name: 'article', params: {id: 'springboot'}})">阅读更多</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex>
      <v-pagination :length="5" v-model="page">
      </v-pagination>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  name: 'articlelist',
  data() {
    return {
      notice: `  天门山，就是安徽当涂县的东梁山（古代又称博望山）与和县的西梁山的合称。两山夹江对峙，象一座天设的门户，形势非常险要，“天门”即由此得名。诗题中的“望”字，说明诗中所描绘的是远望所见天门山壮美景色。历来的许多注本由于没有弄清“望”的立脚点，所以往往把诗意理解错了。
　　天门山夹江对峙，所以写天门山离不开长江。诗的前幅即从“江”与“山”的关系着笔。第一句“天门中断楚江开”，着重写出浩荡东流的楚江（长江流经旧楚地的一段）冲破天门奔腾而去的壮阔气势。它给人以丰富的联想：天门两山本来是一个整体，阻挡着汹涌的江流。由于楚江怒涛的冲击，才撞开了“天门”，使它中断而成为东西两山。这和作者在《西岳云台歌》中所描绘的情景颇为相似：“巨灵（河神）咆哮擘两山（指河西的华山与河东的首阳山），洪波喷流射东海。”不过前者隐后者显而已。在作者笔下，楚江仿佛成了有巨大生命力的事物，显示出冲决一切阻碍的神奇力量，而天门山也似乎默默地为它让出了一条通道。
　　第二句“碧水东流至此回”，又反过来着重写夹江对峙的天门山对汹涌奔腾的楚江的约束力和反作用。由于两山夹峙，浩阔的长江流经两山间的狭窄通道时，激起回旋，形成波涛汹涌的奇观。如果说上一句是借山势写出水的汹涌，那么这一句则是借水势衬出山的奇险。有的本子“至此回”作“直北回”，解者以为指东流的长江在这一带回转向北。这也许称得上对长江流向的精细说明，但不是诗，更不能显现天门奇险的气势。试比较《西岳云台歌送丹丘子》：“西岳峥嵘何壮哉！黄河如丝天际来。黄河万里触山动，盘涡毂转秦地雷。”“盘涡毂转”也就是“碧水东流至此回”，同样是描绘万里江河受到峥嵘奇险的山峰阻遏时出现的情景。绝句尚简省含蓄，所以不象七古那样写得淋漓尽致。`,
      page: 1
    }
  }
}
</script>
