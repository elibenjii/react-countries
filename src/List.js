import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import ListItem from './ListItem'

const List = ({
  list,
  sort
}) => {
  const sortedList = () => {
    console.log(list[0])
    const cleanedList = list.filter(x=>x.population >900 && x.gini !== null)
    switch(sort.arg) {
      case 'population':
        return sort.order === 'asc' ? cleanedList.sort((a, b) => a.population - b.population) : cleanedList.sort((a, b) => b.population - a.population)
      case 'gini':
        return sort.order === 'asc' ? cleanedList.sort((a, b) => a.gini - b.gini) : cleanedList.sort((a, b) => b.gini - a.gini)
      case 'name':
        return sort.order === 'asc' ? cleanedList.sort((a, b) => a.name.localeCompare(b.name)) : cleanedList.sort((a, b) => b.name.localeCompare(a.name))
      default: return list
    }
  } 

  return (
    <div>
      <div style={{backgroundColor: '#163f5f', height: '75px'}}>
        <div style={{fontSize: 30, color: 'white', fontWeight: 'bold', padding: 10 }}>
          Page:
        </div>
      </div>
    
    <div className='listContainer' style={{height: window.innerHeight-75, backgroundColor: 'white'}}>

     {
       sortedList().map((x, index)=> index< 20 &&  <ListItem key={x.name} style={{backgroundColor: 'white'}} info={x} />)
     }
    </div>
    </div>
  );
}

export default List