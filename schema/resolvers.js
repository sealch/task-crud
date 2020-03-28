import { TaskModel } from '../models/taskModel';

export const resolvers = {
    Query: {
        allTasks: async() => await TaskModel.find()
    },
    Mutation: {
        createTask: async(_, { name, done }) => {
            const task = new TaskModel({ name, done });
            await task.save();
            return task;
        },
        deleteTask: async(_, { id }) => {
            const task = await TaskModel.findOne({ _id: id });
            task.deleteOne();
            return task;
        },
        updateTask: async(_, { id, done }) => {
            await TaskModel.updateOne({ _id: id }, { done: done });
            const task = await TaskModel.findOne({ _id: id });
            return task;
        }
    }
};

