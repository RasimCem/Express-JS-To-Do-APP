const { body } = require("express-validator");

exports.validateStore = [
        body('todo').isLength({min:5}).withMessage('Todo meesage should be at least 5 characters.')
];
