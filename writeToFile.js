import fs, { createWriteStream } from "fs";
const writeFile = async (filepath, content) => {
  return new Promise((resolve, reject) => {
    const file = createWriteStream(filepath);
    file.write(content);
    file.end(resolve());
    file.on("error", reject);
  });
};

export default writeFile;
