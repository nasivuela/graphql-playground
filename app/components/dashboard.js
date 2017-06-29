import React from 'react'
import { 
  graphql,
  gql, } from 'react-apollo'

class Dashboard extends React.Component {

  render() {
    console.log(this.props)
    return (
        <div>
          Hello World!
        </div>
    )
  } 
}


export default graphql(gql`query{ 
  repository(owner: "facebook", name: "react") {
    id
  }
}`)(Dashboard)
