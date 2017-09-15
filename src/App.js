import React, { Component } from 'react'
import './App.css'
import colors from './data/colors.json'
import parts from './data/parts.json'
import View from './components/View'

class App extends Component {

  constructor() {
    super()

    this.getColor = this.getColor.bind(this)
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
      </div>
    );
  }
}

export default App;
