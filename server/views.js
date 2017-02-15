var express = require('express')

express_app.get('/', function(req, res) {
  return res.render('index.html', {
    "location": "index" 
  })
})

express_app.get('/about', function(req, res) {
  return res.render('about.html', {
    "location": "about" 
  })
})

express_app.get('/blog', function(req, res) {
  return res.render('blog.html', {
    "location": "blog" 
  })
})
