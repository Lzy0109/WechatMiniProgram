// pages/request/request.js
import request from '../../pages/service/network.js'

Page({
  data: {
    name:'',
    birth:''
  },
  hanleGetRequest(){
    /** 原生方式发送网络请求 */
    /**
     * get请求
     */
    wx.request({
      url: 'http://httpbin.org/headers',
      /**
       * 
       * data: {
       *
       *  data?type=xx&&page=1
       *  type: 'xx',
       *  page: 1
       *},
       */
      method: 'get',
      success: function(res){
        console.log(res)
      }
    })
  },
  hanlePostRequest(){
    /**
     * post请求
     */
    wx.request({
      url: 'http://httpbin.org/post',
      method: 'post',
      data: {
        name: 'lzy',
        birth: 19990109
      },
      success: function (res) {
        console.log(res);
        const Jsondata = res.data.json
        const postName = Jsondata.name
        const postBirth = Jsondata.birth
        console.log(postName, postBirth)
      }
    })
  },
  /**
   * 封装成Promise的方式
   * 使用封装的request请求
   */
  handlePromiseRequest(){
    request({
      url: 'http://httpbin.org/post',
      method: 'post',
      data: {
        name: 'lzy',
        birth: 19990109
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
})