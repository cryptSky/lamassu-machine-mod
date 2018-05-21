'use strict'

var fs = require('fs')
var util = require('util')
var parser = require('../lib/compliance/parsepdf417')

// var licensePath = 'mock_data/compliance/fl.dat'
// var licensePath = 'mock_data/compliance/ny.dat'
var licensePath = 'scratch/mn.dat'

var data = fs.readFileSync(licensePath, 'utf8')
data = data.replace('&', '\r')

// const data = 'SIMPSON|MICHAEL|M|RSA|6512395184073|28 NOV 1976|RSA|CITIZEN|02 OCT 2018|87555|115641856|123456789112345678901234567890123456789013345678901234567894123456789012345678901234567890123456789012345678'
console.log(data)
var result = parser.parse(data)
console.log(util.inspect(result, {depth: null, colors: true}))
