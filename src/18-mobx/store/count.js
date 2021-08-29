import {
  observable,  // 定义响应式数据
  action,      // 定义方法并改变数据
  computed     // 计算属性
} from 'mobx'

// 每一个模块是一个类
class Count {
  @observable count = 1;
  @observable num = 100;

  @action changeCount = () => {
    setTimeout(() => {
      this.count *= 2
    }, 2000)
  }

  @computed get doubleCount () {
    return this.count * 2
  }
}

// 暴露一个实例
export default new Count();