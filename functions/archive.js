import archiver from "archiver";
import fs from "fs";

const archive = () => {
  const output = fs.createWriteStream("missionFiles.zip");
  const archive = archiver("zip");
  output.on("close", () => {
    console.log(archive.pointer() + "total bytes");
    console.log("Archiver is finalized");
  });
  output.on("end", () => {
    console.log("Data has Drained");
  });
  archive.on("warning", (err) => {
    if (err.code === "ENOENT") {
      console.log("Te file don exit");
    } else {
      throw err;
    }
  });
  archive.on("error", (err) => {
    throw err;
  });

  archive.pipe(output);
  archive.directory("hosted", false);
  archive.finalize();
};

export default archive;
