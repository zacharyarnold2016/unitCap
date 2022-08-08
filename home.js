import express from "express";
import fs from "fs";
import validate from "./validate.js";

import writeFile from "./writeToFile.js";

const router = express.Router();
let path;

const homeRouter = () => {
  router.get("/", (req, res) => {
    console.log("first");
    res.render("index");
  });
  router.post("/", validate, async (req, res) => {
    try {
      const { move, pew, name } = req.body;
      path = `./hosted/${name}.sqf`;

      const script = `_${name}movedata = ${move};\n
    _${name}pewdata = ${pew};\n
    _${name}dothings = [${name}, _${name}movedata] spawn BIS_fnc_UnitPlay;\n
    [${name}, _${name}pewdata] spawn BIS_fnc_UnitPlayFiring;\n`;

      await writeFile(path, script);
      setTimeout(() => {
        res.download(path);
      }, 500);

    } catch (err) {
      res.send(err);
    }

  });
  return router;
}

export default homeRouter;
