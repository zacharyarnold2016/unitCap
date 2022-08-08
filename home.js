import express from "express";
import fs from "fs";

import writeFile from "./writeToFile.js";

const router = express.Router();
let path;

const homeRouter = () => {
  router.get("/", (req, res) => {
    console.log("first");
    res.render("index");
  });
  router.post("/", async (req, res) => {
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
  });

  return router;
};

export default homeRouter;
