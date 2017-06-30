import React from 'react'
import { 
  graphql,
  gql, } from 'react-apollo'
import { organizationLanguagesPlumb } from '../services/char-transforms'
import GraphOne from './graphs/one'
import GraphTwo from './graphs/two'
import query from '../queries/org-pr'

class Dashboard extends React.Component {
  //TODO: catch graphQL errors
  render() {
    return (
        <div className="main">
          <header>
            <h1>GraphQL playground</h1>
          </header>
          {this.props.data.organization && <div className="container-graph">
            <GraphOne 
              data={organizationLanguagesPlumb(this.props.data.organization.repositories.nodes)} 
            />
            <GraphTwo
              data={organizationLanguagesPlumb(this.props.data.organization.repositories.nodes)} 
            />
          </div>
          }
        </div>
    )
  } 
}

export default graphql(gql`${query}`)(Dashboard)
