import React from 'react'

const Swatch = (props) => {

  const newColor = () => {
    props.setColor(props.code)
  }

  return (
    <div className='swatch' onClick={newColor}>
      <img src={`images/color_swatches/${props.code}.png`} alt={`${props.code}-${props.name}`}/>
      <br/>
      {`${props.name} - ${props.code}`}
    </div>
  )
}

export default Swatch
