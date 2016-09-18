var mongoose = require('mongoose');


var CommentSchema = mongoose.Schema({
  body: {type: String}
});

var ProjectSchema = mongoose.Schema({
  title: {type: String, require: true},
  description: {type: String, require: true},
  price: {type: Number, require: true},
  category: {type: String},
  comments: [CommentSchema]
});


var Project = mongoose.model('Project', ProjectSchema)



module.exports= Project;
