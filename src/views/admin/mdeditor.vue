<template>
<div id="editor">
  <mavon-editor v-model="content" style="height: 100%"></mavon-editor>
</div>
</template>
<script>
import {
  mavonEditor
} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  name: 'editor',
  data() {
    return {
      content: '# fdsfs'
    }
  },
  components: {
    mavonEditor
  }
}
</script>
<style>
#editor {
  margin: auto;
  width: 100%;
  height: 650px;
}
</style>
