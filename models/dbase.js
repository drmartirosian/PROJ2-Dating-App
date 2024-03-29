var mongoose = require('mongoose');

var resumeSchema = new mongoose.Schema({
   header: String,
   body: String,
   footer: String,
});

var badgeSchema = new mongoose.Schema({
   fullname: String, 
   codertype: String, 
   phone: Number,
});

var blogSchema = new mongoose.Schema({ 
  text: String, 
});

var profileSchema = new mongoose.Schema({
  name: String, 
  avatar: String,
  googleId: String, 
  aboutme: [blogSchema],
  badge: [badgeSchema],
  resume: [resumeSchema],
});


module.exports = mongoose.model('Dbase', profileSchema);