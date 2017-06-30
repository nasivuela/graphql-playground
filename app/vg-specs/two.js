import React, { PropTypes } from 'react';
import {createClassFromLiteSpec} from 'react-vega-lite';

export default createClassFromLiteSpec('BarChart', {
  "description": "Amount of PRs on facebook by language.",
  "mark": "line",
  "encoding": {
    "y": {
      "field": "pullRequestsCount",
      "type": "quantitative",
      "aggregate": "sum",
      "axis": {
        "title": "PRs"
      }
   },
    "x": {
      "field": "primaryLanguage", 
      "type": "nominal"
    },
  }
})
