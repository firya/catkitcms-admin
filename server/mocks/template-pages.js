/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var templatePagesRouter = express.Router();

  templatePagesRouter.get('/', function(req, res) {
    res.send({
      'template.pages': [
        {
          id:0,
          title: 'tpl 0'
        }
      ]
    });
  });

  templatePagesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  templatePagesRouter.get('/:id', function(req, res) {
    res.send({
      'template.pages': {
        id: req.params.id,
        title: 'Template title '+req.params.id
      }
    });
  });

  templatePagesRouter.put('/:id', function(req, res) {
    res.send({
      'template.pages': {
        id: req.params.id
      }
    });
  });

  templatePagesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/template_pages', require('body-parser').json());
  app.use('/admin/api/templatePages', templatePagesRouter);
};
