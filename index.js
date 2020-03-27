const express = require('express');
const graphqlHTTP = require('express-graphql');
const graphql = require('graphql');

const app = express();
const port = process.env.PORT || 5000;

const QueryRoot = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        hello: {
            type: graphql.GraphQLString,
            resolve: () => "Hello world!"
        }
    })
});

const schema = new graphql.GraphQLSchema({ query: QueryRoot });


app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
    }),
);

app.listen(port, () => console.log(`running on port: ${port}`));
