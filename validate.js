import express from 'express';
import {body, validationResult} from 'express-validator';

const validate = [
    body('name').exists().isString(),
    body('pew').exists(),
    body('move').exists(),
]

export default validate;