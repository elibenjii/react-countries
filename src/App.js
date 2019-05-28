import React, { useState, useEffect } from 'react';
import Count from './Count'
import axios from 'axios'

const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([])



  const fetchos = async () => {
    const result = await axios('https://restcountries.eu/rest/v2/all');
    setData(result.data);
  }

  useEffect(() => {
    fetchos()
  })


  return (
    <div>
     <Count count={count} setCount={setCount} />
     <div>

     </div>
     {
       data.map(x=> { 
         console.log(x) 
         return <div>
           <span>
            <img src={x.flag} style={{width: 50}} alt="Logo" />
           </span>
           <span>
            <b>{x.name}</b> ({x.nativeName}) / capital: <b>{x.capital}</b>/ gini: <b>{x.gini}</b> / population: <b>{x.population}</b>
           </span>
         </div>
        })
     }
    </div>
  );
}

export default App