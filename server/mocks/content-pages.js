/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var pagesRouter = express.Router();

  pagesRouter.get('/', function(req, res) {
    res.send(
            
            {
  "content.pages": [
    {
      id: 151,
      title: 'Test1',
      parent: 0,
      template: 0,
      params: {
        title: "",
        keywords: "",
        description: ""
      },
      children:[153]
    },
    {
      id: 153,
      title: 'SubTest1',
      parent: 151,
      template: 0,
      params: {
        title: "",
        keywords: "",
        description: ""
      },
      children:[156]
    },
    {
      id: 156,
      title: 'SubSubTest1',
      parent: 153,
      template: 2,
      params: {
        title: "",
        keywords: "",
        description: ""
      },
      children:[]
    }
  ]
}
        
            );
  });

  pagesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  pagesRouter.get('/:id', function(req, res) {
    res.send({
      'contentPages': {
        id: req.params.id
      }
    });
  });

  pagesRouter.put('/:id', function(req, res) {
    res.send({
      'pages': {
        id: req.params.id
      }
    });
  });

  pagesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/pages', require('body-parser').json());
  app.use('/admin/api/contentPages', pagesRouter);
};
