const fs = require("fs");

const filePath = process.argv[2];

fs.stat(filePath, (err, stats) => {
  if (err) {
    // 文件路径不正确或文件不存在
    console.error(err);
  } else {
    if (stats.isFile()) {
      // 文件存在且是一个文件
      console.log("文件存在");
    } else if (stats.isDirectory()) {
      // 文件存在且是一个文件夹
      console.log("文件夹存在");
    } else {
      // 既不是文件也不是文件夹
      console.log("文件路径不正确");
    }
  }
});
