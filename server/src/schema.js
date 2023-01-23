const { gql } = require("apollo-server");

const typeDefs = gql`

type Query {
    "Query to get tracks array for homepage grid."
    tracksForHome: [Track!]!
    "Fetch a specific track, provided a track's ID"
    track(id: ID!): Track
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
    "The track's complete description, can be in Markdown format"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    "The track's complete array of Modules"
    modules: [Module!]!
}

"A Module is a single unit of teaching. Multiple Modules compose a Track"
type Module {
    id: ID!
    "The Module's title"
    title: String!
    "The Module's length in minutes"
    length: Int
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
