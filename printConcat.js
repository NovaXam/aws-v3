var concat = require('concat-stream')
var http = require('http')
var through = require('through2')
var qs = require('querystring')

const server = http.createServer(function(req, res) {
 req
    .pipe(checkSize())
    .pipe(concat({ encoding: 'string' }, concatRes))


 function checkSize() {
  var size = 0
  return through(function(buf, enc, next){
   console.log(buf.length)
   if (buf.length < 20) next(null, buf)
   else next(null, null) 
  })
 }

 function concatRes(body) {
  const param = qs.parse(body)
  console.log(param)
  res.end('ok\n') 
 }
})

server.listen(5000)

