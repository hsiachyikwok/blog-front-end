<template>
<div class="aside">
  <div>
    <router-link to="/index">leapxia'notes</router-link>
  </div>
  <br>
  <br>
  <br>
  <div>
    搜索
    <hr class="style-two">
  </div>
  <div>
    归档
    <hr class="style-two">
  </div>
  <div>
    <router-link to="/tag">标签</router-link>
    <hr class="style-two">
  </div>
  <div>
    分类
    <hr class="style-two">
  </div>
  <div>
    时光轴
    <hr class="style-two">
  </div>
  <div>
    友链
    <hr class="style-two">
  </div>
  <footer>
    hsiachyikwok'blog since ©2018
  </footer>
</div>
</template>

<script>
export default {
  name: 'sidebar'
}
</script>

<style lang="css">
  .main {
    display: flex;
    flex-flow:row nowrap;
    justify-content : space-around;
  }
  .content {
    display: flex;
    flex-flow:column nowrap;
  }
  .aside {
    display: flex;
    flex-flow:column nowrap;
    padding: 5%;
  }
  .article-item{
    padding: 5%;
    max-width: 800px;
  }
  .page {
    display: flex;
    flex-flow:row nowrap;
    justify-content : space-around;
  }

  /* 透明渐变 - color - transparent */
  .style-two {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
  }

</style>
