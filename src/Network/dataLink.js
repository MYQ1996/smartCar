// GET
// 参数 - URL上
// 返回 - String
// import Vue from 'vue'
// import axios from 'axios'
import $ from 'jquery'
function dataLinkPostJson (url, val, caozuo) {
  $.ajax({
    type: 'POST',
    data: val,
    dataType: 'json',
    url: url,
    async: true,
    success: function (data) {
      caozuo(data)
    },
    error: function () {
      console.log(url + '  ajax交互失败！')
    }
  })
}
// // Vue.prototype.$http = axios
// function dataLinkGetJson (url, callback, err) {
//   axios({
//     method: 'get',
//     url: url,
//     headers: {
//       'Authorization': '23123123'
//     },
//     data: {}
//   }).then(function (res) {
//     callback(res)
//   }).catch(function (err) {
//     console.log(err)
//   })
// }

// // POST
// // 参数 - URL上
// // 返回 - String
// function dataLinkPostJson (url, params, callback, err) {
//   axios({
//     method: 'post',
//     url: url,
//     headers: {
//       'Authorization': 'nsafnonfon'
//     },
//     data: params
//   }).then(function (res) {
//     callback(res)
//   }).catch(function (err) {
//     console.log(err)
//   })
// }
export {
  dataLinkPostJson
  // dataLinkGetJson
}
