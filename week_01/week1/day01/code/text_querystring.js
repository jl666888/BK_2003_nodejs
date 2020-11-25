const querystring = require('querystring');
console.log(querystring.parse('name=张三&age=18&gender=1'));
console.log(querystring.decode('name=张三&age=18&gender=1'));
console.log(querystring.stringify({name:'zhangsan',age:18,gender:1,height:190}));
console.log(querystring.encode({name:'zhangsan',age:18,gender:1,}));
