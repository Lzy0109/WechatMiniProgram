// pages/component/component.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0
  },
  handleIncrement(){
    this.setData({
      count : this.data.count + 1
    })
    /**
     * 方法2 直接获取组件修改数据 不推荐（不规范） 修改数据最好在组件里暴露出接口进行修改
     * const my_event = this.selectComponent('.my_event')
     * my_event.setData({
     *    count: my_event.data.count + 10
     * })
     */
  },
  handleTabClick(event){
    console.log(event)
  }
})