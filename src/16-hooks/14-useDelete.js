import {useState} from 'react';

const useDelete = () => {
  const [list, setList] = useState([
    'zhangsan', 'lisi', 'wangwu'
  ])

  const deleteItem = (value) => {
    return () => {
      const newList = list.filter(item => {
        return item !== value
      })
      setList(newList)
    }
  }

  return [list, setList, deleteItem]
}

export default useDelete;