import React from 'react'
import CharOne from '../../vg-specs/one'

function graphOne ({data}) {
  return data 
  ? (<CharOne data={data} />)
  : null
}

export default graphOne
