#!/usr/bin/env node

// ^ This is to use app as binary, figuring out how to set it up properly

import express from "express";
import homeRouter from "./home.js";

const app = express();

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());
app.use(express.static("./public"));
app.set("view engine", "ejs");

app.use("/", homeRouter());

app.listen(3000, () => {
  console.log("listening");
});
