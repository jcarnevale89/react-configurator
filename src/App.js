import React, { Component } from 'react'
import './App.css'
import colors from './data/colors.json'
import parts from './data/parts.json'
import View from './components/View'
import Swatch from './components/Swatch'

class App extends Component {

  constructor() {
    super()

    this.getColor = this.getColor.bind(this)
    this.setColor = this.setColor.bind(this)
    this.getParts = this.getParts.bind(this)

    this.state = {
      truckId: 'DGR09',
      views: [
        '3QTR',
        'SIDE',
        'HIGH',
      ],
      colors: colors,
      parts: parts,
    }

  }

  getColor() {
    return this.state.colors.filter(color => color.selected === true)[0].code
  }

  setColor(newColor) {
    // console.log(`The color selected is ${newColor}`)
    const colors = this.state.colors.map((color) => {
      color.code === newColor ? color.selected = true : color.selected = false
      return color
    })
    // console.log(colors)
    this.setState({ colors })
  }

  getParts() {
    return this.state.parts.filter(part => part.selected === true)
  }

  render() {
    return (
      <div className="configurator">
        {
          this.state.views.map((view) => {
            return (
              <View
                key={view}
                view={view}
                truckId={this.state.truckId}
                color={this.getColor()}
                parts={this.getParts()}
              />
            )
          })
        }
        <div className="colorNav">
        {
          this.state.colors.map((color) => {
            return (
              <Swatch
                key={color.code}
                code={color.code}
                name={color.name}
                setColor={this.setColor}
              />
            )
          })
        }
        </div>
      </div>
    );
  }
}

export default App;
