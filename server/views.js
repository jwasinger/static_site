var express = require('express')

express_app.get('/', function(req, res) {
  return res.render('blog.html')
})

express_app.get('/about', function(req, res) {
  return res.render('about.html')
})

express_app.get('/blog', function(req, res) {
  return res.render('blog.html')
})

express_app.get('/blog/tmux_tutorial', function(req, res) {
  return res.render('blog/blog_tmux_tutorial.html')
})

express_app.get('/blog/tic_tac_toe', function(req, res) {
  return res.render('blog/blog_tic_tac_toe.html')
})

express_app.get('/blog/ci_pipeline', function(req, res) {
  return res.render('blog/ci_pipeline.html') 
})

express_app.get('/blog/nodejs_app_on_systemd', function(req, res) {
  return res.render('blog/setting_up_nodejs_app_with_systemd.html')
})
