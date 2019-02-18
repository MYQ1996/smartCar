<template>
  <div class="login">
    <ptNavigation :title="title" :fan=0></ptNavigation>

    <div class="gerenzhongxin">
        <strong>欢迎使用忠群</strong>
        <div class="login" href="mlogin.html">点击登录</div>
    </div>
    <ul class="gerenxinxi">
        <li>
            <div class="list">
                <i class="list-tu fa fa-book" aria-hidden="true"></i>
                <span>我的订单</span>
                <i class="list-tu fa fa-angle-right right" aria-hidden="true"></i>
            </div>
        </li>
        <li>
            <div class="list">
                <i class="list-tu fa fa-calendar-minus-o" aria-hidden="true"></i>
                <span>常见问题</span>
                <i class="list-tu fa fa-angle-right right" aria-hidden="true"></i>
            </div>
        </li>
        <li>
            <div class="list">
                <i class="list-tu fa fa-comments" aria-hidden="true"></i>
                <span>意见反馈</span>
                <i class="list-tu fa fa-angle-right right" aria-hidden="true"></i>
            </div>
        </li>
        <li>
            <div class="list">
                <i class="list-tu fa fa-male" aria-hidden="true"></i>
                <span>关于忠群保洁</span>
                <i class="list-tu fa fa-angle-right right" aria-hidden="true"></i>
            </div>
        </li>
    </ul>
    <ptFooter :menu="menu"></ptFooter>
  </div>
</template>

<script>
import ptFooter from '@/components/pt-footer/pt-footer'
import ptNavigation from '@/components/pt-navigation/pt-navigation'

export default {
  name: 'login',
  components: {
    ptFooter,
    ptNavigation
  },
  data () {
    return {
      title: '个人中心',
      menu: [{
        title: '首页',
        icon: 'fa fa-home',
        url: '/',
        color: '#2F4056'
      }, {
        title: '我的',
        icon: 'fa fa-user',
        url: '/login',
        color: '#01AAED'
      }]
    }
  },
  created () {},
  methods: {}
}
</script>
<style src='./login.less'></style>
