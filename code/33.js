var path = require('path');
console.log(__dirname+'2.txt');
console.log(path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile'));