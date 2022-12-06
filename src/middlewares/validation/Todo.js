const { body } = require("express-validator");

exports.validateStore = [
    body('todo').isLength({min:3}).withMessage('Todo meesage should be at least 3 characters.')
];

exports.validateUpdate = [
    body('todo').isLength({min:3}).withMessage('Todo meesage should be at least 3 characters.')
];