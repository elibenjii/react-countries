import React from 'react'
import { Spring, animated, interpolate } from 'react-spring/renderprops'
import List from './List'
import { PropTypes } from 'prop-types';
import {
  isMobile
} from "react-device-detect";

const TRIANGLE = 'M20,380 L380,380 L380,380 L200,20 L20,380 Z'
const RECTANGLE = 'M20,20 L20,380 L380,380 L380,20 L20,20 Z'
const styles = {
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    willChange: 'background',
    zIndex: 1
  },
  shape: { width: window.innerWidth	, height: window.innerHeight	, willChange: 'transform' },
}

export default class Triangle extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      toggle: true,
      sort: {
        arg: 'population',
        order: 'asc'
      },
      currentPage: 1,
      itemsPage: 20,
      textInput: ''
    }
  }
  toggle = () => this.setState({ toggle: !this.state.toggle })
  openToggle = () => this.setState({ toggle: false })
  closeToggle = () => this.setState({ toggle: true })
  _sortList = (arg, order) => this.setState({ sort: {arg, order}, currentPage: 1 })
  _handleChange = (key, value) => this.setState({ [key]: value })


  render() {
    const {toggle, sort, currentPage, itemsPage, textInput} = this.state
    const yeye = <g>
      {
        toggle ? 
        <text onClick={this.openToggle} x='130' y='250' font-family="Verdana" font-size="50" fill="white" cursor='pointer'>Open</text> : (
          <g >
          <rect fill="#163f5f" stroke-width="0" y="0" x="20" height="20%" width='360'/>
          <text onClick={()=>this._sortList('population', this.state.sort.order === 'asc' ? 'desc' : 'asc')} x='30' y='150' cursor='pointer' font-family="Verdana" font-size="50" fill="white">Population {sort.arg === 'population' ? sort.order === 'asc' ? '↑' : '↓' : ''}</text>
          <text onClick={()=>this._sortList('name', this.state.sort.order === 'asc' ? 'desc' : 'asc')} x='30' y='250' cursor='pointer' font-family="Verdana" font-size="50" fill="white">Country {sort.arg === 'name' ? sort.order === 'asc' ? '↑' : '↓' : ''} </text>
          <text onClick={()=>this._sortList('gini', this.state.sort.order === 'asc' ? 'desc' : 'asc')} x='30' y='350' cursor='pointer' font-family="Verdana" font-size="50" fill="white">Gini {sort.arg === 'gini' ? sort.order === 'asc' ? '↑' : '↓' : ''}</text>
          <rect onClick={this.closeToggle} fill="#20639b" stroke-width="0" y="0" x="20" height="20%" width='100' />
          <path onClick={this.closeToggle} d="M 10,20 L 30,40 M 30,10 L 10,40" transform="translate(42,0) scale(1.5)" style={{
              cursor: 'pointer',
              stroke: 'white',
              padding: 100,
              fill: 'transparent',
              strokeLinecap: 'round',
              strokeWidth: 5
          }} />
          </g>
          
        )
        
      }
    </g>
    
    return (
      <Spring
        native
        from={{ fill: 'black', top: 500 }}
        to={{
          opacity: toggle ? '0' : '1',
          top: toggle ? '-500' : '0',
          marginRight: toggle ? '0%' : '60%',
          fill: toggle ? '#247BA0' : '#3daea3',
          backgroundColor: toggle ? '#A29B7F' : '#f6d55c',
          rotate: toggle ? '0deg' : '360deg',
          scale: toggle ? 0.3 : 1,
          shape: toggle ? TRIANGLE : RECTANGLE,
          right: toggle ? '0' : '-500',
        }}
        toggle={this.toggle}
        onRest={() => console.log('done')}>
        {({ toggle, backgroundColor, fill, rotate, scale, shape, marginRight, opacity, top, right }) => (
          <div style={{position:'relative'}}>
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
                fillRule="evenodd"
                onClick={ this.openToggle}>
                
                <animated.path id="path-1" d={shape} />
                
              </g>
              {yeye}
            </animated.svg>
          </animated.div>
          <animated.div style={ isMobile ? { position: 'absolute', top, opacity, zIndex: 0}: { position: 'absolute', opacity, top, left: '40%', right }}>
            <List list={this.props.list} textInput={textInput} sort={sort} currentPage={currentPage} itemsPage={itemsPage} _handleChange={this._handleChange} />
          </animated.div>
          </div>

        )}
      </Spring>
    )
  }
}