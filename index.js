const { ApolloServer, gql } = require('apollo-server-express');
const express  = require('express');
const mongoose = require('mongoose');
const {} = require('dotenv/config');
const { resolvers } = require('./schema/resolvers');
const { typeDefs } = require('./schema/typeDefs');

const app = express();
const port = process.env.PORT || 5000;


const startServer = async () => {

    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    server.applyMiddleware({ app, path: '/'});

    await mongoose.connect(process.env.mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true});
    app.listen(port, () => console.log(`running on port: ${port}`));
};

startServer();
