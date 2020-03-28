import mongoose from 'mongoose';

export const TaskModel = mongoose.model('TaskModel', { name: String, done: Boolean});
