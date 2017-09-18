import React from 'react'
import Part from './Part'

const View = (props) => {

  return (
    <div className={`view view-${props.view}`}>
      <img src={`images/${props.truckId}/${props.truckId}-${props.view}.jpg`} alt={`${props.truckId}-${props.view}`}/>
      <img src={`images/${props.truckId}/${props.truckId}-${props.color}-${props.view}.png`} alt={`${props.truckId}-${props.view}`}/>
      {
        props.parts.map((part) => {
          return (
            <Part
              key={part.code}
              truckId={props.truckId}
              view={props.view}
              color={props.color}
              part={part.code}
            />
          )
        })
      }
    </div>
  )
}

export default View
