const query = `{
  organization(login: "facebook") {
    repositories(last: 50) {
      nodes {
        name
        pullRequests(last: 50) {
          totalCount
          nodes {
            createdAt
          }
        }
      	primaryLanguage {
          name
        }
    	}
    }
  }
}`

export default query