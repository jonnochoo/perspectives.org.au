var express = require('express');
var fs = require('fs');
var path = require('path');

module.exports = function(viewsFolder, staticFolder) {
  
  staticFolder = staticFolder || 'static';
  viewsFolder = path.join('.', viewsFolder, staticFolder);

  var finder = require('findit')(viewsFolder);
  var router = express.Router();
  
  finder.on('file', function (file, stat) {
    var jadeExtension = ".jade";  
    if(path.extname(file) === jadeExtension) {

      var relativeName = path.relative(viewsFolder, file)
        .replace(jadeExtension, '')
        .replace('\\', '/');
      var routeName = '/' + relativeName.replace('index', '');
      var templatePath = path.join(staticFolder, relativeName);
      
      router.get(routeName, function(req, res){ res.render(templatePath, {}) });  
    }
  });

  return router;
};