<template>
<v-container>
  <v-layout>
    <v-flex>
      <v-card>
        <svg :width='width' :height='height' @mousemove='listener($event)'>
        <a  href="javascript:void(0);" @click="getArticleByTag(tag.tagName)" v-for='tag in tags'>
          <text :x='tag.x' :y='tag.y' :font-size='20 * (600/(600-tag.z))' :fill-opacity='((400+tag.z)/600)'>{{tag.tagName}}</text>
        </a>
      </svg>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>
<script>
import api from '@/api'
export default {
  name: 'tagcloud',
  data() {
    return {
      width: 600,
      height: 500,
      RADIUS: 200,
      speedX: Math.PI / 1080,
      speedY: Math.PI / 1080,
      tags: []
    }
  },
  computed: {
    CX() {
      return this.width / 2;
    },
    CY() {
      return this.height / 2;
    }
  },
  mounted() {
    api.tag.getTagList().then(res => {
      this.tags = res.body
      this.setTags(this.tags) //初始化标签位置
    }, error => console.log(error))
    //使球开始旋转
    setInterval(() => {
      this.rotateX(this.speedX);
      this.rotateY(this.speedY);
    }, 17)
  },
  methods: {
    rotateX(speedX) {
      var cos = Math.cos(speedX);
      var sin = Math.sin(speedX);
      for (let tag of this.tags) {
        var y1 = (tag.y - this.CY) * cos - tag.z * sin + this.CY;
        var z1 = tag.z * cos + (tag.y - this.CY) * sin;
        tag.y = y1;
        tag.z = z1;
      }
    },
    rotateY(speedY) {
      var cos = Math.cos(speedY);
      var sin = Math.sin(speedY);
      for (let tag of this.tags) {
        var x1 = (tag.x - this.CX) * cos - tag.z * sin + this.CX;
        var z1 = tag.z * cos + (tag.x - this.CX) * sin;
        tag.x = x1;
        tag.z = z1;
      }
    },
    listener(event) { //响应鼠标移动
      var x = event.clientX - this.CX;
      var y = event.clientY - this.CY;
      this.speedX = x * 0.0001 > 0 ? Math.min(this.RADIUS * 0.00002, x * 0.0001) : Math.max(-this.RADIUS * 0.00002, x * 0.0001);
      this.speedY = y * 0.0001 > 0 ? Math.min(this.RADIUS * 0.00002, y * 0.0001) : Math.max(-this.RADIUS * 0.00002, y * 0.0001);
    },
    setTags(tagcloud) { //初始化标签
      var tags = []
      for (let i = 0; i < tagcloud.length; i++) {
        let tag = {};
        let k = -1 + (2 * (i + 1) - 1) / tagcloud.length;
        let a = Math.acos(k);
        let b = a * Math.sqrt(tagcloud.length * Math.PI)
        tag.tagName = tagcloud[i].tagName;
        tag.x = this.CX + this.RADIUS * Math.sin(a) * Math.cos(b);
        tag.y = this.CY + this.RADIUS * Math.sin(a) * Math.sin(b);
        tag.z = this.RADIUS * Math.cos(a);
        tags.push(tag)
      }
      this.tags = tags;
    },
    getArticleByTag(tagName) {
      this.$router.push({
        name: 'tagArticle',
        query: {
          type: 'tag',
          p: tagName
        }
      })
    }
  }

}
</script>
