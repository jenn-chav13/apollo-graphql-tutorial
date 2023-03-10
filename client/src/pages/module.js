import React from "react";
import { Layout, ModuleDetail, QueryResult } from "../components";
import { gql, useQuery } from "@apollo/client";

const GET_MODULES_AND_PARENT_TRACK = gql`
query getModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {
  module(id: $moduleId) {
    id
    title
    content
    videoUrl
  }
  track(id: $trackId) {
    id
    title
    modules {
      id
      title
      length
    }
  }
}
`;
const Module = ({trackId, moduleId}) => {

    const { loading, error, data } = useQuery(GET_MODULES_AND_PARENT_TRACK, {
        variables: {
            trackId,
            moduleId
        }
    })
    return (<Layout fullWidth>
        <QueryResult error={error} loading={loading} data={data}>
            <ModuleDetail track={data?.track} module={data?.module}/>
        </QueryResult>
    </Layout>);
}

export default Module;