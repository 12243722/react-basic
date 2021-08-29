import { createContext } from 'react';

// 执行createContext方法会return出一个对象
const textContext = createContext();

// 组件  提供者     消费者
const { Provider, Consumer } = textContext;

export {
  textContext,
  Provider,
  Consumer
}
