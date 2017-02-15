#! /bin/node

var express = require('express')
var nunjucks = require('nunjucks')
var path = require('path')

global.express_app = express()

express_app.use('/static', express.static(path.join(__dirname, '..', 'public')))
require('./views')

nunjucks.configure([path.join(__dirname, '../templates')], {
  express: express_app
})

express_app.listen(3000, function() {
  console.log('server started')
})
