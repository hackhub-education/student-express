const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const bodyParser = require('body-parser');
const Students = require('./models/students');

module.exports = (app) => {
  // The GraphQL schema in string form
  const typeDefs = `
    type Query {
      students: [Student]
    }

    type Student {
      _id: String
      firstname: String
      lastname: String
      email: String
      age: String
    }
  `;

  // The resolvers
  const resolvers = {
    Query: {
      students: async () => await Students.find({}).lean(),
     },
  };

  // Put together a schema
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  // The GraphQL endpoint
  app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

  // GraphiQL, a visual editor for queries
  app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
}