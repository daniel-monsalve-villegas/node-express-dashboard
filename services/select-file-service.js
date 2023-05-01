const fs = require('fs');
const path = require('path');

function getDirectoryContents(files, currentDir, query) {}

function isDirectory(currentDir, file) {
  const fileInfo = fs.statSync(path.join(currentDir, file));
  fileInfo.isDirectory();
}

function readDir(currentDir, res, query) {}

exports.get = (req, res) => {};
