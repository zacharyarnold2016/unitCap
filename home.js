import express from "express";
import fs from "fs";
import archive from "./functions/archive.js";
import { errorResponse, validate } from "./validate.js";
import writeFile from "./functions/writeToFile.js";
import scripter from "./functions/scripter.js";

const router = express.Router();

const homeRouter = () => {
  router.get("/", async (req, res) => {
    const arr = fs.readdirSync("./hosted", (err, files) => {
      if (err) {
        throw err;
      }
      return files;
    });
    console.log(arr);
    res.render("index", {
      files: arr,
    });
  });

  router.get("/dl", (req, res) => {
    archive();
    res.download("./missionFiles.zip");
  });

  router.post("/", validate, errorResponse, async (req, res) => {
    try {
      const { move, name } = req.body;

      if (!move || !name) {
        res.send("<h1>You need to Fill the name and move fields</h1>");
      } else {
        const path = `./hosted/${name}.sqf`;
        const script = scripter(req);
        await writeFile(path, script);
        res.send(
          `<script>alert("File Created"); window.location.href = "/"; </script>`
        );
      }
    } catch (err) {
      res.send(err.name).redirect("/");
    }
  });
  return router;
};

export default homeRouter;
