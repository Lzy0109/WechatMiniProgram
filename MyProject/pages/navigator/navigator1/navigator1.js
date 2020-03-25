// pages/navigator1/navigator1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleNavigator(){
    wx.navigateTo({
      url: '/pages/navigator/navigator2/navigator2',
    })
  }
})