<template>
  <footer class="pt-footer">
    <div class="box">
        <span class="title" v-for="(item,key) in menu" :key='key' :style="{color:item.color}" @click="jump(item.url)">
          <span :class="item.icon" style="font-size: 25px;"></span>
          <span style="font-size: 10px;"> {{item.title}}</span>
        </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'ptFooter',
  props: {
    menu: Array
  },
  methods: {
    // , query: { id: id }
    jump: function (url) {
      this.$router.push({path: url})
    }
  }
}
</script>
<style src='./pt-footer.less'></style>
