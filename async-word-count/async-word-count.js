var fs = require('fs');
var path = require('path');

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }
    var wordCount = data.trim().split(' ').length;
    // data that I want for one of the file
    callback(null, wordCount);
  });
};

var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  // YOUR CODE HERE
  //should pass the combined word count of the files located at `filePathOne` and `filePathTwo` to the `callback` following proper node style convention
  getWordCount(filePathOne, (err, dataOne) => {
    // var count = 0
    if (err) {
      callback(err, null);
    } else {
      //count += dataOne;
      getWordCount(filePathTwo, (err, dataTwo) => {
        if (err) {
          callback(err, null);
        } else {
          //fileData has my data
          //count += dataTwo;
          // callback(null, count);
          callback(null, dataTwo + dataOne);
        }
      });
    }
  });
};

console.log(getTotalWordCount)
module.exports = getTotalWordCount;
