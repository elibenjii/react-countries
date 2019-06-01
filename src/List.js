import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import ListItem from './ListItem'

const List = ({
  list,
  sort,
  currentPage,
  itemsPage,
  _handleChange
}) => {
  const sortedList = () => {
    console.log(list[0])
    switch(sort.arg) {
      case 'population':
        return sort.order === 'asc' ? list.sort((a, b) => a.population - b.population) : list.sort((a, b) => b.population - a.population)
      case 'gini':
        return sort.order === 'asc' ? list.sort((a, b) => a.gini - b.gini) : list.sort((a, b) => b.gini - a.gini)
      case 'name':
        return sort.order === 'asc' ? list.sort((a, b) => a.name.localeCompare(b.name)) : list.sort((a, b) => b.name.localeCompare(a.name))
      default: return list
    }
  } 

  return (
    <div>
      <div style={{backgroundColor: '#163f5f', height: '75px'}}>
        <div style={{fontSize: 30, color: 'white', fontWeight: 'bold', padding: 10 }}>
          Page: <span 
          onClick={()=>{currentPage !== 1 && _handleChange('currentPage', currentPage - 1)}} 
          className={currentPage === 1 ? 'disabledPagination' : 'hoverPagination'}>
          {currentPage-1} ➪
          </span>  
            <span style={{borderBottom: '3px solid white'}}> {currentPage} </span>
          <span className={list.length-(currentPage*itemsPage) > currentPage ? 'hoverPagination' : 'disabledPagination'} onClick={()=>{list.length-(currentPage*itemsPage) > currentPage && _handleChange('currentPage', currentPage + 1)}}>
            ➪ {currentPage+1}
          </span>
        </div>
      </div>
    
    <div className='listContainer' style={{height: window.innerHeight-75, backgroundColor: 'white'}}>

     {
       sortedList().slice(itemsPage*currentPage-itemsPage, itemsPage*currentPage).map((x, index)=> index< 20 &&  <ListItem key={x.name} style={{backgroundColor: 'white'}} info={x} />)
     }
    </div>
    </div>
  );
}

export default List