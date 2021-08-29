import React from 'react';

const List = (props) => {
  const { list } = props;

  return (
    <ul>
      {
        list.map(item => (
          <li key={item.id}>
            {item.name} - 
            <span onClick={props.onDeleteItem(item.id)}>x</span>
          </li>
        ))
      }
    </ul>
  );
}

export default List;