import express from "express";
import { body, validationResult } from "express-validator";

const validate = [body("name").exists().isString(), body("move").exists()];

const errorResponse = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    next();
  }
};

export { validate, errorResponse };
