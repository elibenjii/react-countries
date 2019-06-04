import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import ListItem from './ListItem'

const List = ({
  list,
  sort,
  currentPage,
  itemsPage,
  _handleChange,
  textInput
}) => {
  const sortedList = () => {
    const sortBySearch = textInput.length > 0 ? 
      list.filter(x=>x.name.toUpperCase().includes(textInput.toUpperCase()) || x.capital.toUpperCase().includes(textInput.toUpperCase())) : 
      list
    switch(sort.arg) {
      case 'population':
        return sort.order === 'asc' ? sortBySearch.sort((a, b) => a.population - b.population) : sortBySearch.sort((a, b) => b.population - a.population)
      case 'gini':
        return sort.order === 'asc' ? sortBySearch.sort((a, b) => a.gini - b.gini) : sortBySearch.sort((a, b) => b.gini - a.gini)
      case 'name':
        return sort.order === 'asc' ? sortBySearch.sort((a, b) => a.name.localeCompare(b.name)) : sortBySearch.sort((a, b) => b.name.localeCompare(a.name))
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
          <span 
          className={sortedList().length-(currentPage*itemsPage) > currentPage ? 'hoverPagination' : 'disabledPagination'} 
          onClick={()=>{sortedList().length-(currentPage*itemsPage) > currentPage && _handleChange('currentPage', currentPage + 1)}}>
            ➪ {currentPage+1}
          </span>
          <input className='inputStyle' 
            onChange={(e)=>{_handleChange('textInput', e.target.value); _handleChange('currentPage', 1)}}
          />
        </div>
      </div>
    
    <div className='listContainer' style={{height: window.innerHeight-75, backgroundColor: 'white'}}>

     {
       sortedList().slice(itemsPage*currentPage-itemsPage, itemsPage*currentPage).map((x, index)=> <ListItem key={x.name} style={{backgroundColor: 'white'}} info={x} textInput={textInput} />)
     }
    </div>
    </div>
  );
}

export default List