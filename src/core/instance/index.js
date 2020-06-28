import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'


// 原始的Vue 构造函数
function Vue(options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)//实现Vue的原型  _init  函数  调用 beforeCreate  created 钩子
// 可以解释，为什么created之前不能使用this
stateMixin(Vue)//挂载$data $props  $set $delete $watch  工具函数
// $watch   返回的是 unwatch  可以用于取消监听
// $watch 第一个参数可以传字符串，也可以传函数，函数形式监听的是其返回值，返回值变化触发钩子
//



eventsMixin(Vue)//挂载 $on   $on可以接收事件名数组
// this.$on(['once','destory'...]) 会依次绑定事件
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
