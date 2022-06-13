var fs = require('fs')
var Transform = require('stream').Transform

var rr = process.stdin.pipe(new Transform({ transform: transformUpper})).pipe(process.stdout)

function transformUpper(chunk, enc, next) {
 next(null, chunk.toString().toUpperCase())
}
