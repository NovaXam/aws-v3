var fs = require('fs')
var through = require('through2')

var rr = process.stdin.pipe(through(transformUpper)).pipe(process.stdout)

function transformUpper(buf, enc, next) {
 next(null, buf.toString().toUpperCase())
}
