import React from 'react'
import BarChar from '../../vg-specs/one'

const barData = {
  "values": [
    {"a": "A","b": 20}, {"a": "B","b": 34}, {"a": "C","b": 55},
    {"a": "D","b": 19}, {"a": "E","b": 40}, {"a": "F","b": 34},
    {"a": "G","b": 91}, {"a": "H","b": 78}, {"a": "I","b": 25}
  ]
};

class graphqone extends React.Component {

  render() {
    return (
        <BarChar data={barData} />
    )
  } 
}


export default graphqone
