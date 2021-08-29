import React from 'react';
import { Link } from 'react-router-dom';


const App = (props) => {
  return (
    <div>
      <ul>
        <li><Link to="/home">home</Link></li>
        <li><Link to="/about">about</Link></li>
      </ul>
      <div>
        { props.children }
      </div>
    </div>
  );
}

export default App;