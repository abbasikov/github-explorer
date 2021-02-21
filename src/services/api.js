import axios from "axios";
import { GITHUB_API_TOKEN, GITHUB_API_URL } from "../utils/constants";
import { GET_TOPICS_QUERY } from '../graphql/queries';

const axiosGitHubGraphQL = axios.create({
    headers: {
        Authorization: `bearer ${GITHUB_API_TOKEN}`,
    },
});

const getAllRelatedTopics = async (topic)=>{
    let response = await axiosGitHubGraphQL.post(GITHUB_API_URL, {
        query: GET_TOPICS_QUERY,
        variables: {
            name: topic
        }
    });
    return response.data.data;
}

export  {
    getAllRelatedTopics
}


