// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '默认标题值',
      observer: function(newVal, oldVal){
        // console.log(newVal,oldVal)
      }
    },
    content: {
      type: String,
      value: '默认内容值',
      observer: function (newVal, oldVal) {
        // console.log(newVal, oldVal)
      }
    }
  },
  /**
   * 定义样式
   */
  externalClasses: ['titleclass'],

  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
