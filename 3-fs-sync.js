const {readFileSync, writeFileSync} = require('fs');
const path = require('path');
const first = readFileSync(path.join('content','first.txt'),'binary');
const second = readFileSync(path.join('content','second.txt'),'binary');
 
writeFileSync(
    './content/result-sync.txt'
    , `Here is the result: ${first}, ${second}`
    ,{flag: 'a'}
);