// components/my-mslot/my-mslot.js
Component({
  options: {
    multipleSlots: true
  },
  lifetimes:{
    created(){
      console.log("组件创建")
    },
    attached() {
      console.log("组件添加到页面")
    },
    ready() {
      console.log("组件渲染")
    },
    moved() {
      console.log("组件移动到另外一个节点")
    },
    detached(){
      console.log("组件移除")
    }
  }
})
