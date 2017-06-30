export function organizationLanguagesPlumb(data) {
	// TODO: mind nulls
	return Object.assign({}, {"values": 
		data.map((obj) => {
			const { primaryLanguage, pullRequests, ...rest } = obj
			return { 
				primaryLanguage: primaryLanguage.name,
				pullRequestsCount: pullRequests.totalCount,
				...rest
			}
		})
	})
}
