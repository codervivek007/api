import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [givendata, setgivendata] = useState([]);
  const URl = 'https://jsonplaceholder.typicode.com/todos/1'
  useEffect(() => {
    axios.get(URl)
      .then(response => {
        // console.log(response.data.title)
        setData(response.data.title);
        setgivendata(response.data.id);
        
      })   
      
  }, []); 

  return (
    <div>
      <h1 style={{textAlign:'center',textTransform:'uppercase',color:'RED'}}>{data}</h1>
      <h2 style={{textAlign:'center',textTransform:'uppercase',color:'teal'}}>{givendata}</h2>
    </div>
  );
}

export default App;
