<template>
  <div class="pt-navigation">
    <header class="content">
        <div class="box">
          <span v-if="fan==0?'':'ok'">
            <span class="fa fa-angle-left arrow" aria-hidden="true" @click="jump(fan)"></span>
          </span>
          <span v-else>
            <span class="arrow" aria-hidden="true"></span>
          </span>
            <span class="title">{{title}}</span>
            <span> </span>
        </div>
    </header>
    <div class="v-height"></div>
  </div>
</template>

<script>
export default {
  name: 'ptNavigation',
  props: {
    title: String,
    fan: Number
  },
  methods: {
    jump: function (id) {
      this.$router.go(id)
      // this.$router.push({ path: 'goodDetail', query: { id: id } })
    }
  }
}
</script>
<style src='./pt-navigation.less'></style>
