import React from 'react'
import Part from './Part'

const View = (props) => {

  const hideColor = (e) => {
    if (e.target.classList[0] !== 'newColor') return
    e.target.nextSibling.classList.add('active')
  }

  const colors = [...props.currentColors].reverse()

  return (
    <div className={`view view-${props.view}`}>
      <div className="loader">loader</div>
      <img src={`images/${props.truckId}/${props.truckId}-${props.view}.jpg`} alt={`${props.truckId}-${props.view}`}/>
      {
        colors.map((color, i) => {
          let classes = 'newColor'
          if (i === 1) {
            classes = 'oldColor'
          }
          if (props.currentColors.length < 2) {
            classes = 'first'
          }
          return (
            <img key={`${color}-${props.view}`} src={`images/${props.truckId}/${props.truckId}-${color}-${props.view}.png`} className={classes} onLoad={hideColor} alt={`${props.truckId}-${props.view}`}/>
          )
        })
      }
      {
        props.parts.map((part) => {
          return (
            <Part
              key={part.code}
              truckId={props.truckId}
              view={props.view}
              color={props.currentColor}
              part={part.code}
            />
          )
        })
      }
    </div>
  )
}

export default View
