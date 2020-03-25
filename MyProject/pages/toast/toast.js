// pages/toast/toast.js
Page({
  showToast() {
    wx.showToast({
      title: 'showToast',
      duration: 3000,
      success: function(){
        console.log("展示弹窗成功")
      },
      fail: function(){
        console.log("展示弹窗失败")
      },
      complete: function(){
        console.log("展示弹窗完成")
      }
    })
  },
  showModal() {
    wx.showModal({
      title: 'Title',
      content: 'Content',
      /**不显示取消键
       * showCancel: false 
       * */
      cancelText: 'Exit',
      cancelColor: 'red',
      success: function(res){
        console.log(res)
        if(res.cancel){
          console.log("用户点击了取消按钮")
        }
        if(res.confirm){
          console.log("用户点击了确定按钮")
        }
      }
    })
  },
  showLoading() {
    wx.showLoading({
      title: 'Loading',
      mask: true
      /**蒙层
       * 显示弹窗时与页面下的按钮不可以进行交互
       */
    })
    setTimeout(() => {
      /**必须手动hideLoading才能使Loading消失 */
      wx.hideLoading()
    },1000)
  },
  showActionSheet() {
    wx.showActionSheet({
      itemList: ['Action1','Action2','Action3'],
      itemColor: 'red',
      success: function(res){
        console.log(res)
        /**
         * tapIndex表示用户选中的item的下标
         */
      }
    })
  },
  onShareAppMessage: function(options){
    return {
      title: '刘基的小程序',
      /**path默认跳转小程序首页，可自己设置url
       * path:''
       */
      imageUrl:'../../assets/images_resources/img1.jpg'
    }
  }
})