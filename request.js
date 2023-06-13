import pkg from 'request';
const { post } = pkg;

pkg({
  url: "https://httpbin.org/post",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify({foo: "bar"})
}, function (error, response, body){
  console.log(body);
});
