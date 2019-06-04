import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Triangle from './Triangle'


const App = () => {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([])



  const _getList = async () => {
    const result = await axios('https://restcountries.eu/rest/v2/all');
    setList(result.data.filter(x=>x.population >900 && x.gini !== null));
  }

  useEffect(() => {
    _getList()
  })


  return (
    <div>
      <Triangle list={list} />
    </div>
  );
}

export default App