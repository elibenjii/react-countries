import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import ListItem from './ListItem'

const List = ({
  list
}) => {
  return (
    <div>
      <div style={{backgroundColor: '#163f5f', height: '75px'}}>
        <div style={{fontSize: 30, color: 'white', fontWeight: 'bold', padding: 10 }}>
          Page:
        </div>
      </div>
    
    <div className='listContainer' style={{height: window.innerHeight-75, backgroundColor: 'white'}}>

     {
       list.map((x, index)=> index< 20 &&  <ListItem key={x.name} style={{backgroundColor: 'white'}} info={x} />)
     }
    </div>
    </div>
  );
}

export default List