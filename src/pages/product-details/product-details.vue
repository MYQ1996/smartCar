<template>
  <div class="product-details">
    <ptNavigation :title="product.title" :fan=1></ptNavigation>
    <div class="user-info db bm bc fc">
        <div class="personal-data">
            <!-- <img class="head-portrait" :src="product.img" alt=""> -->
            <div class="information">
                <div class="title">
                    <div class="real-name">{{product.title}}</div>
                    <div class="people">申请成功：{{product.people}}人</div>
                </div>
                <div class="advertising">
                    <div class="advertising-title" v-for="(dai,key) in product.status" :key=key>{{dai}}</div>
                </div>
            </div>
        </div>
    </div>

    <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
      <thead>
        <tr style="background-color: #F7F7F7">
          <th>{{lifeTable[0].project}}</th>
          <th>{{lifeTable[0].price}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in lifeTable" :key=index+1 v-if="index==0?false:true">
          <td>{{item.project}}</td>
          <td>{{item.price}}</td>
        </tr>
      </tbody>
    </x-table>

    <div class="footer btn-fix-bottom">
        <button class="btn1" @click="toSubmit" style="background:rgba(255,73,71,1);">立即下单</button>
    </div>
  </div>
</template>

<script>
import { XTable } from 'vux'
import ptNavigation from '@/components/pt-navigation/pt-navigation'

export default {
  name: 'productDdetails',
  components: {
    XTable,
    ptNavigation
  },
  data () {
    return {
      product: {
        img: require('./images/Bitmap.png'),
        title: '日常保洁',
        price: '500-150万',
        status: ['固定人员', '精细服务'],
        people: '656',
        advertising: '',
        url: ''
      },
      isShowRegister: false,
      lifeTable: [{
        'project': '时间',
        'price': '价格'
      }, {
        'project': '2小时',
        'price': '80.0元'
      }, {
        'project': '3小时',
        'price': '120.0元'
      }, {
        'project': '4小时',
        'price': '160.0元'
      }, {
        'project': '5小时',
        'price': '200.0元'
      }]
    }
  },
  created () {

  },
  methods: {
    toSubmit: function () {
      // this.$router.push({ path: 'goodDetail', query: { id: id } })
    }

  }
}
</script>
<style src='./product-details.less'></style>
