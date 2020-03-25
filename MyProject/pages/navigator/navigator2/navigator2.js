// pages/navigato2/navigator2.js
Page({
  onLoad: function (options) {
    console.log(options)
  },
  handleBack(){
    wx.navigateBack({
      /**
       * 可设置跳转层级delta
       */
    })
  }
})