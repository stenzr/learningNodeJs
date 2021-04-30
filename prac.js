// using Native node modules
// nodejs.org/api/

// to use file system module

const fs = require("fs");

// to copy the file from soure to destination

fs.copyFileSync("assets/file1.txt", "assets/file2.txt");