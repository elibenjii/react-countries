import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import ListItem from './ListItem'

const List = ({
  list
}) => {
  return (
    <div className='listContainer'>
     {
       list.map((x, index)=> index< 10 &&  <ListItem key={x.country} info={x} />)
     }
    </div>
  );
}

export default List