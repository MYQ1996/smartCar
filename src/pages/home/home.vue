<template>
  <div class="home">
    <div class="head">
      <img class="logo" src="./images/logo.png" alt="" srcset="">
    </div>
    <div class="car">
        <div class="carInfos">
          <img class="carImg" src="./images/car.png" alt="" srcset="">
          <div class="carTitle">{{carName}}</div>
        </div>
        <div>

        <div class="circle"  @click="imgshowFrom()">
          <img class="setUpImg" src="./images/setUp.png" alt="" srcset="">
        </div>
      </div>
    </div>
    <div class="operatingbk">
      <div class="operating">
        <div class="operatingTitle">
          <span class="operatingStatus">{{stateTitle}}</span>
          <span v-if="stateTitle=='启动中'" class="operatingSudu">速度  {{data1}}</span>
        </div>

        <div class="operatingBottom">
          <div class="circle" @click="start()">
            <img v-if="state" class="setUpImg" src="./images/close.png" alt="" srcset="">
            <img v-else class="setUpImg" src="./images/close-bg.png" alt="" srcset="">
          </div>
          <div class="circle"  @click="stop()">
            <img v-if="!state" class="setUpImg" src="./images/stop.png" alt="" srcset="">
            <img v-else class="setUpImg" src="./images/stop-bg.png" alt="" srcset="">
          </div>
        </div>

      </div>
    </div>
    <div class="rang-data">
      <range v-if="state" v-model="data1" @on-touchend="onChange"></range>
    </div>

    <div class="imgWindow" v-if=imgshow>
      <div class="zhezhao" id="zhezhao">
        <div class="login" id="login">
            <div class="content">
                <div class="content-title">请输入ip地址</div>

                <div class="content-list">
                    <div class="content-qq">小车称呼:</div>
                     <div class="content-neirong">
                        <input class="content-shuru" type="text" placeholder="输入小车称呼" v-model="form.carName">
                    </div>
                </div>

                <div class="content-list">
                    <div class="content-qq">ip地址:</div>
                     <div class="content-neirong">
                        <input class="content-shuru" type="text" placeholder="输入ip地址" v-model="form.ipName">
                    </div>
                </div>

                <div class="content-list">
                    <div class="content-qq">端口地址:</div>
                     <div class="content-neirong">
                        <input class="content-shuru" type="text" placeholder="输入端口地址" v-model="form.duanName">
                    </div>
                </div>

                <div class="queding-list">
                    <div class="queding" @click="determine()">确定</div>
                    <div class="queding" @click="close">取消</div>
                </div>

            </div>

            <!-- <div class="shut" @click="close"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Range, Toast } from 'vux'
import {findNewsList} from '../../Network/Model//businessLogic'

export default {
  name: 'home',
  components: {
    Range,
    Toast
  },
  data () {
    return {
      title: '首页',
      stateTitle: '等待启动',
      data1: 0,
      state: false,
      imgshow: false,
      form: {
        carName: '小车一号',
        ipName: '192.168.4.1',
        duanName: '80'
      },
      carName: '小车一号'
    }
  },
  created () {
    let carInfos = localStorage.getItem('carInfos')
    if (carInfos) {
      this.form = JSON.parse(carInfos)
      this.carName = carInfos.carName
    }
  },
  methods: {
    start () {
      this.stateTitle = '启动中'
      this.state = true
      // findNewsList({speed: this.data1}, (res) => {
      //   console.log('====================================')
      //   console.log(res)
      //   console.log('====================================')
      // })
    },
    stop () {
      this.stateTitle = '等待启动'
      this.state = false
      this.data1 = 0
      findNewsList({speed: this.data1 + '|'}, (res) => {
        // console.log(res)
      })
    },
    onChange () {
      findNewsList({speed: this.data1 + '|'}, (res) => {
        // console.log(res)
      })
    }, // 关闭联系我们
    close () {
      this.imgshow = false
    },
    imgshowFrom () {
      let carInfos = localStorage.getItem('carInfos')
      if (carInfos) {
        this.form = JSON.parse(carInfos)
      }
      this.imgshow = true
    },
    determine () {
      if (this.form.carName === '') {
        this.toastAlert('小车称呼不能为空')
        return
      }
      if (this.isValidIP(this.form.ipName) === false) {
        this.toastAlert('请输入正确的ip地址')
        return
      }
      let reg = /^[1-9]$|(^[1-9][0-9]$)|(^[1-9][0-9][0-9]$)|(^[1-9][0-9][0-9][0-9]$)|(^[1-6][0-5][0-5][0-3][0-5])$/

      if (!reg.test(this.form.duanName)) {
        this.toastAlert('请输入正确的ip端口')
        return
      }
      this.imgshow = false
      // if (localStorage.getItem('carInfos') && localStorage.getItem('carInfos') !== '') {
      //   let carInfos = localStorage.getItem('carInfos')
      //   console.log('====================================')
      //   console.log(carInfos)
      //   console.log('====================================')
      // } else {
      let formString = JSON.stringify(this.form)
      this.carName = this.form.carName
      localStorage.setItem('carInfos', formString)
      // }
      // console.log(this.form)
    },
    isValidIP (ip) {
      var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
      return reg.test(ip)
    },
    toastAlert (neirong) {
      this.$vux.toast.text(neirong, 'middle')
    }
    // jump: function (url) {
    //   this.$router.push({path: url})
    // }
  }
}
</script>
<style src='./home.css'></style>
