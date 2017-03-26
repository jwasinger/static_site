#! /bin/node

var express = require('express')
var nunjucks = require('nunjucks')
var path = require('path')

global.express_app = express()

express_app.use('/static', express.static(path.join(__dirname, '..', 'public')))

express_app.get('/*', (function(req, res, next) {
	res.setHeader("Cache-Control", " no-cache, no-store, must-revalidate")
	res.setHeader("Pragma", "no-cache")
	res.setHeader("Expires", "0")
	next()
}))

require('./views')

nunjucks.configure([path.join(__dirname, '../templates')], {
  express: express_app
})

express_app.listen(80, function() {
  console.log('server started on port 80')
})
