const mongoose = require('mongoose');

const TaskModel = mongoose.model('TaskModel', { name: String, done: Boolean});

module.exports = {
    TaskModel
};
