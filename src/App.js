import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Header from './Header'
import Menu from './Menu'
import List from './List'
import Triangle from './Triangle'
import GridPortfolio from './GridPortfolio'


const App = () => {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([])



  const _getList = async () => {
    const result = await axios('https://restcountries.eu/rest/v2/all');
    setList(result.data);
  }

  useEffect(() => {
    _getList()
  })


  return (
    <div>
      <Triangle />
      {/* <List list={list} /> */}
     <GridPortfolio /> 
    </div>
  );
}

export default App