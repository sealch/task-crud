const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

const tasks = require('./tasks');

// const Cat = mongoose.model('Cat', { name: String });
//
// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

const typeDefs = gql`
    type Task {
        id: ID!
        name: String!
        done: Boolean!
    }
    
    type Query {
        allTasks: [Task!]
    }
    
    type Mutation {
        createTask(name: String!, done: Boolean!): Task! 
        removeTask(id: ID!): Task
        updateTask(id: ID!, done: Boolean!): Task!
    }
`;

const resolvers = {
    Query: {
        allTasks: () => tasks
    },
    Mutation: {
        createTask: (_, { name, done }) => {
            const task = {
                id: Math.round(Math.random() * 100),
                name,
                done
            };
            tasks.push(task);
            return task;
        },
        removeTask: (_, { id }) => {
            const taskIndex = tasks.findIndex(task => task.id === id);
            const task = tasks[taskIndex];
            tasks.splice(taskIndex, 1);
            return task;
        },
        updateTask: (_, { id, done }) => {
            const task = tasks.find(task => task.id === parseInt(id));
            task.done = done;
            return task;
        }
    }
};


const startServer = async () => {

    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    server.applyMiddleware({ app });

    // await mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

    app.listen(port, () => console.log(`running on port: ${port}`));
};

startServer();
