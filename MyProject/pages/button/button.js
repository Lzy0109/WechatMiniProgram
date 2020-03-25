// pages/button/button.js
Page({
  data: {
    titles: ['item1', 'item2', 'item3']
  },
  handletap() {
    console.log("handletap")
  },
  handlelongpress() {
    console.log("handlelongpress")
  },
  handletouchstart() {
    console.log("handletouchstart")
  },
  handletouchend() {
    console.log("handletouchend")
  },
  // 获取数据
  handleItemClick(event) {
    console.log(event)
    const dataset = event.currentTarget.dataset;
    const title = dataset.item;
    const index = dataset.index;
    console.log(title, index);
  }
})