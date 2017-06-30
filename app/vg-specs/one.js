import React, { PropTypes } from 'react';
import {createClassFromLiteSpec} from 'react-vega-lite';

export default createClassFromLiteSpec('BarChart', {
  "description": "Comparative of facebook repositories main languages.",
  "mark": "bar",
  "encoding": {
    "y": {
      "type": "quantitative",
      "aggregate": "count"
   },
    "x": {
      "field": "primaryLanguage", 
      "type": "nominal"
    },
  }
})
