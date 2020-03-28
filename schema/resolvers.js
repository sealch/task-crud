import tasks from '../tasks';

export const resolvers = {
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
        deleteTask: (_, { id }) => {
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

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
