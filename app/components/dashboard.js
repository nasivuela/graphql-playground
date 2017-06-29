import React from 'react'
import { 
  graphql,
  gql, } from 'react-apollo'
import GraphOne from './graphs/one'

class Dashboard extends React.Component {

  render() {
    return (
        <div>
          <GraphOne />
        </div>
    )
  } 
}

export default graphql(gql`{
  repository(owner: "facebook", name: "react") {
    pullRequests(last: 50) {
      nodes {
      	comments(last: 50) {
          nodes {
            publishedAt
          }
        }
    	}
    }
  }
}`)(Dashboard)
