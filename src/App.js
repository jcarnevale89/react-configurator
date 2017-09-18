import React, { Component } from 'react'
import './App.css'
import colors from './data/colors.json'
import parts from './data/parts.json'
import View from './components/View'
import Swatch from './components/Swatch'

class App extends Component {

  constructor() {
    super()

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
      currentColors: [colors[0].code]
    }

  }

  setColor(newColor) {
    const currentColors = [...this.state.currentColors]
    currentColors.push(newColor)
    if (currentColors.length > 2) {
      currentColors.shift()
    }
    this.setState({ currentColors })
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
                currentColors={this.state.currentColors}
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
