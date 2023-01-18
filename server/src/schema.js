const { gql } = require("apollo-server");

const typeDefs = gql`

type Query {
    "Query to get tracks array for homepage grid."
    tracksForHome: [Track!]!
}
"A track is a group of Modules that teaches about specific topics."
type Track {
    id: ID!
    title: String!
    author: Author!
    "URL pointing to the image."
    thumbnail: String 
    length: Int
    modulesCount: Int

}

"Author of a complete track"
type Author {
    id: ID!
    name: String!
    "Author's profile URL."
    photo: String 
}
`;

module.exports = typeDefs;
