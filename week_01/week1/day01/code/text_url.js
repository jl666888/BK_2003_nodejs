const url = require('url');

const href = 'https://www.xxx.com:8080/foo/bar?username=zs&age=12';

console.log(url.parse(href,true));

console.log(url.resolve(href,'/bar'));

console.log(url.parse(href));

