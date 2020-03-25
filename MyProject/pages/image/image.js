// pages/images/image.js
Page({
  data: {
    imagePath: ""
  },
  handleChooseAlbum() {
    // 调用系统API
    wx.chooseImage({
      success: (res) => {
        console.log(res);
        // 取出图片路径
        const path = res.tempFilePaths[0]
        //设置图片路径
        this.setData({
          imagePath: path
        })
      },
    })
  }
})