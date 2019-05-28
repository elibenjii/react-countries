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
  <div style={{display: 'flex', position: 'relative', flex: 6, flexDirection: 'column', height: 100}} onClick={() => set(state => !state)}>
    <animated.div style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
    <div className='itemInfoContainer' >
      <div>country: <b>{info.name}</b>({info.nativeName})</div>
      <div>capital: <b>{info.capital}</b></div>
      <div>gini: <b>{info.gini}</b></div>
      <div>population: <b>{info.population}</b></div>
    </div>
    </animated.div>
    <animated.div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
    <div className='itemInfoContainer'>
      <div>languages: {info.languages.map(({name})=> <b key={name}>{name} /</b>)} </div>
      <div>currency: <b>{info.currencies[0].name+'('+info.currencies[0].symbol+')'}</b></div>
      <div>regional blocs: <b>{info.regionalBlocs.map(({name})=><b key={name}>{name} /</b>)}</b></div>
      <div>population: <b>{info.population}</b></div>
    </div>
    </animated.div>
  </div>

</div>
}

export default List