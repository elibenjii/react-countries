import React from 'react'
import { Spring, animated, interpolate } from 'react-spring/renderprops'

const TRIANGLE = 'M20,380 L380,380 L380,380 L200,20 L20,380 Z'
const RECTANGLE = 'M20,20 L20,380 L380,380 L380,20 L20,20 Z'
const styles = {
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    willChange: 'background',
  },
  shape: { width: 500, height: 500, willChange: 'transform' },
}

export default class Triangle extends React.Component {
  state = { toggle: true }
  toggle = () => this.setState(state => ({ toggle: !state.toggle }))
  componentDidMount() {
    //setInterval(() => this.forceUpdate(), 1000)
  }
  render() {
    const {toggle} = this.state
    const yeye = <g>
      {
        toggle ? 
        <text onClick={()=>console.log('oyo')} x={'123'} y={toggle ? "250" : "100"} font-family="Verdana" font-size="50" fill="white">{toggle ? 'Filters' : 'dsds'}</text> : (
          <g >
          <rect fill="#daabff" stroke-width="0" y="0" x="20" height="20%" width='360'/>
          <text onClick={()=>console.log('oyo')} x='30' y='150' font-family="Verdana" font-size="50" fill="white">{toggle ? 'Filters' : 'dsds'}</text>
          </g>
          
        )
        
      }
    </g>
    
    return (
      <Spring
        native
        from={{ fill: 'black' }}
        to={{
          marginRight: toggle ? '0%' : '60%',
          fill: toggle ? '#247BA0' : '#abe4ff',
          backgroundColor: toggle ? '#A29B7F' : '#F3FFBD',
          rotate: toggle ? '0deg' : '360deg',
          scale: toggle ? 0.3 : 1,
          shape: toggle ? TRIANGLE : RECTANGLE
        }}
        toggle={this.toggle}
        onRest={() => console.log('done')}>
        {({ toggle, backgroundColor, fill, rotate, scale, shape, marginRight }) => (
          <animated.div style={{ ...styles.container, backgroundColor }}>
            <animated.svg
              style={{
                ...styles.shape,
                fill,
                marginRight,
                transform: interpolate(
                  [rotate, scale],
                  (r, s) => `rotate3d(0,1,0,${r}) scale(${s})`
                ),
              }}
              version="1.1"
              viewBox="0 0 400 400">
              <g
                style={{ cursor: 'pointer' }}
                fillRule="evenodd"
                onClick={this.toggle}>
                
                <animated.path id="path-1" d={shape} />
                {yeye}
              </g>
            </animated.svg>
          </animated.div>
        )}
      </Spring>
    )
  }
}