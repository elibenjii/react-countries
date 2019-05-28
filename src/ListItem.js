import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'

const List = ({
  info
}) => {


  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })

  return <div className='itemContainer'>
  <div className='itemImage'>
    <img src={info.flag} style={{width:'90%' }} alt="Logo" />
  </div>
  <div className='itemInfoContainer' onClick={() => set(state => !state)}>
  <animated.div style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
   <div className='itemInfoContainer' style={{backgroundColor: 'blue'}}>
     <div style={{paddingLeft: 2, marginTop: 5}}>country: <b>{info.name}</b>({info.nativeName})</div>
     <div style={{padding: 2}}>capital: <b>{info.capital}</b></div>
     <div style={{padding: 2}}>gini: <b>{info.gini}</b></div>
     <div style={{padding: 2}}>population: <b>{info.population}</b></div>
   </div>
  </animated.div>
  <animated.div style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
   <div>
     hi
   </div>
  </animated.div>
  </div>

</div>
}

export default List