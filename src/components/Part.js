import React from 'react'

const Part = (props) => {

  return (
    <div className='part'>
      <img src={`images/${props.truckId}/${props.truckId}-${props.part}-${props.view}.png`} alt={`${props.truckId}-${props.view}`}/>
    </div>
  )
}

export default Part
