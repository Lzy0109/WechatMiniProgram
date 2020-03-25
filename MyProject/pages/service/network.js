/**
 * 封装的request请求
 * 格式如下
 * 在需要使用的页面的js文件中导入： import request from '../../pages/service/network.js'
 */
export default function request(options) {
  return new Promise((resolve,reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: function(res) {
        resolve(res)
      },
      fail: function(res) {
        reject(res)
      }
    })
  })
}