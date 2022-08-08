import express, { urlencoded } from "express";
import homeRouter from "./home.js";

const app = express();

app.use(express.urlencoded({ extended: true , limit: "50mb"}));
app.use(express.json());
app.use(express.static("./public"));
app.set("view engine", "ejs");

app.use(
  "/api",
  (req, res, next) => {
    console.log(req.body);
    next();
  },
  homeRouter()
);

app.listen(3000, () => {
  console.log("listening");
});
