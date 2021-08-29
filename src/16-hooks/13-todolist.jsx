import React from 'react';
import useAdd from './14-useAdd';

const Todolist = () => {
  // const [textValue, list, handleChange, handleKeyUp, deleteItem] = useAdd()
  const [list, textValue, handleChange, handleKeyUp, deleteItem] = useAdd();

  return (
    <div>
      <input 
        type="text" 
        value={textValue}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />

      <ul>
        {
          list.map(item => (
            <li key={item} onClick={deleteItem(item)}>{item}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default Todolist;