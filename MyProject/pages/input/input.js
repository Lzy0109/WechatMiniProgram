// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  bindinput(event){
    console.log("输入内容",event)
  },
  bindblur(event) {
    console.log("失去焦点",event)
  },
  bindfocus(event) {
    console.log("获取焦点",event)
  }
})