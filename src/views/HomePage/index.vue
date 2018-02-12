<template>
<appLayout></appLayout>
</template>
<script>
import VueMarkdown from 'vue-markdown'
import appLayout from '@/layout'
export default {
  data: () => ({
    notice: `迁移博客到自造的小轮子~ 1111111111111111111111111111
      1111111111111111111111111111
      111111111111111111111111111111111`,
    page: 1
  }),
  components: {
    VueMarkdown,
    appLayout
  }
}
</script>
