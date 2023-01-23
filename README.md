# Odyssey Lift-off I: Basics

Welcome to the companion app of Odyssey Lift-off I! You can [find the course lessons and instructions on Odyssey](https://odyssey.apollographql.com/lift-off-part1), Apollo's learning platform.

You can [preview the completed demo app here](https://lift-off-client-demo.netlify.app/).

## How to use this repo

The course will walk you step by step on how to implement the features you see in the demo app. This codebase is the starting point of your journey!

There are 2 main folders:

- `server`: The starting point of our GraphQL server.
- `client`: The starting point of our React application.


## Lift-off I: Basics

* ApolloServer is a graphQL server for Node.JS that simplifies serving and consuming graphQL APIs.

* Learned how to define a GraphQL Schema using SDL (Schema Definition Language).

* Learned how to create a GraphQL Server using Apollo.

* Learned how to create a GraphQL Client using Apollo.

* Learned how to mock data using GraphQL Client.

* Learned about the Apollo GraphQL Sandbox.


## Lift-off II: Resolvers

### Resolver functions

Resolver function's mission is to populate the data for a field in the schema. It has the same name as the field
that if populates data for. It can fetch data from any data source, then transforms that data into the shape your client requires.

## Lift-off III: Arguments

Pretty straightforward. You can pass arguments to a query to search for specific data. 
For example 

```GraphQL
query GetTrack($trackId: ID!) {
    track(id: $trackId) {
        id
    }
}
```
