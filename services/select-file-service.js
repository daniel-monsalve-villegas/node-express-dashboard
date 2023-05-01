const fs = require('fs');
const path = require('path');

function getDirectoryContents(files, currentDir, query) {
  const data = [];
  files.forEach((file) => {
    if (isDirectory(currentDir, file)) {
      data.push({
        name: file,
        isDirectory: true,
        path: path.join(query, file),
      });
    } else {
      data.push({
        name: file,
        isDirectory: false,
        path: path.join(query, file),
        currentDir,
      });
    }
  });
  return data;
}

function isDirectory(currentDir, file) {
  const fileInfo = fs.statSync(path.join(currentDir, file));
  return fileInfo.isDirectory();
}

function readDir(currentDir, res, query) {
  fs.readdir(currentDir, (err, files) => {
    const directoryContents = [];
    if (err === false) {
      directoryContents = getDirectoryContents(files, currentDir, query);
    }
    res.json(directoryContents);
  });
}

exports.get = (req, res) => {};
