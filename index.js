import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import { resolvers } from './schema/resolvers'
import { typeDefs } from './schema/typeDefs'

const app = express();
const port = process.env.PORT || 5000;

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));


const startServer = async () => {

    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    server.applyMiddleware({ app });

    await mongoose.connect('mongodb://localhost:27017/todo', {useNewUrlParser: true, useUnifiedTopology: true});
    app.listen(port, () => console.log(`running on port: ${port}`));
};

startServer();
