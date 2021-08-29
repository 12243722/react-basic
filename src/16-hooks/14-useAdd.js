import {useState, useCallback} from 'react';
import useDelete from './14-useDelete';

const useAdd = () => {
  const [list, setList, deleteItem] = useDelete();
  const [textValue, setTextValue] = useState('a');

  const handleChange = useCallback((e) => {
    setTextValue(e.target.value)
  }, [])

  const handleKeyUp = useCallback((e) => {
    if (e.keyCode === 13 && textValue) {
      setList(list => [...list, textValue]);
      setTextValue('');
    }
  }, [textValue, setList,setTextValue])

  return [list, textValue, handleChange, handleKeyUp, deleteItem]
}

export default useAdd;