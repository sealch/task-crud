import { Task } from '../models/Task';

export const resolvers = {
    Query: {
        allTasks: () => Task.find()
    },
    Mutation: {
        createTask: async(_, { name, done }) => {
            const task = new Task({ name, done });
            await task.save();
            return task;
        },
        deleteTask: async(_, { id }) => {
            const task = await Task.findOne({ _id: id }, (err, result) => err ? console.log(err) : console.log(result));
            task.deleteOne();
            return task;
        },
        updateTask: async(_, { id, done }) => {
            await Task.updateOne({ _id: id }, { done: done }, (err, result) => err ? console.log(err) : console.log(result));
            const task = await Task.findOne({ _id: id });
            return task;
        }
    }
};

