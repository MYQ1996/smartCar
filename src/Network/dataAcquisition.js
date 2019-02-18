import * as dataLink from './dataLink'
import * as sysJson from './sysJson'

// 获取前端列表
function findFrontInforList (params, callback, err) {
  let url = ''
  let carInfos = localStorage.getItem('carInfos')
  if (carInfos) {
    carInfos = JSON.parse(carInfos)
    url = `http://${carInfos.ipName}:${carInfos.duanName}`
  } else {
    url = sysJson.address.address
  }
  let findFrontInforListInterface = url + '/admin/loanmgmt/v1/getLoanByFirmId' // 前端列表接口地址

  dataLink.dataLinkPostJson(findFrontInforListInterface, params, callback, err)
}
export {
  findFrontInforList
}
