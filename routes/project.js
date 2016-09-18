var express = require('express');
var router = express.Router();
var Project = require("../models/project");


router.get('/new', function(request, response, next) {
    response.render("project/new", {
        categories: ["Grocery", "Tech", "Fashion", "Medicen"]
    });

});


router.delete("/:id", function(req, res){
    Project.remove({_id: req.params.id}, function(err){
    res.redirect("/");
  });
});

router.post("/", function(req, res, next){
    var project = new Project({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category
    });
    project.save(function(err, project) {
        if (err) {
            res.render('project/new', {
                errors: err.errors
            });
        } else {
            res.redirect('/project/' + project._id);
        }
    });
    // res.json( req.body);
});

router.get('/:id', function(req, res, next) {
    Project.findOne({
        _id: req.params.id
    }, function(err, project) {
        if (err) {
            next();
        } else {
            res.render('project/show', { project: project });
        }
    });
});


router.post('/:project_id/comments', function(req, res){
  Project.findOne({_id: req.params.project_id}, function(err, project){
    if (err){
      next();
    } else {
      project.comments.push({body: req.body.body})
      project.save(function(err, comment) {
        if(err){
          next();
        } else {
          res.redirect('/project/' + project._id);
        }
      });
    }
  });
});

router.get('/:project_id/edit' ,function(req, res, next){
  Project.findOne({_id: req.params.project_id},
    function(err, project){
    if(err){
      res.render('error', {message: "project not found",
      error: {status: 404}});
    } else {
        res.render('project/edit', { project: project })
      }
    });
});

router.patch('/:project_id' ,function(req, res, next){
  Project.findOne({_id: req.params.project_id}, function(err, project){
    if (err) {
      next();
    } else {
          project.title = req.body.title,
          project.description = req.body.description,
          project.price = req.body.price,
          project.save(function(err){
          if (err) {
            next();
          } else {
            res.redirect('/project/' + project._id);
        }
      })
    }
  });
});

module.exports = router;
