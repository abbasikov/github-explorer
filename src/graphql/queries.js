
const GET_TOPICS_QUERY = `
  query Topic($name: String!) { 
            topic(name: $name) {
                id
                name
                stargazerCount
                relatedTopics {
                    name
                    stargazers {
                        totalCount
                    }
                }
            }
        }
`;

export {
    GET_TOPICS_QUERY
}