var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var User = require("./models/users.js");
var Complaint = require("./models/complaints.js");

var expressSession = require("express-session");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var mongoose = require("mongoose");
var nodemailer = require('nodemailer');

// mongoose.connect("mongodb://avadacodavra:shesafe10@ds125502.mlab.com:25502/shesafe",
//   { useNewUrlParser: true }
//   )
//   .then(() => {
//     console.log("Connected to DB");
//   });

mongoose.connect("mongodb://localhost/shesafe");

app.use(expressSession({
  secret: "My name is Ekansh Bansal",
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  } else{
    res.redirect("/login");
  }
}


app.get("/", function(req, res){
  res.render("landing")
})

app.get("/secret", isLoggedIn, function(req, res){
  res.send("Secret");
})

app.get("/register", function(req, res){
  res.render("register");
})

app.post("/register", function(req, res){
  User.register(new User({username: req.body.username}), req.body.password, function(err, user){
    if(err){
      console.log("error at register route");
      return res.render("register");
    } else{
      passport.authenticate("local")(req, res, function(){
        res.redirect("/secret");
      })
    }
  })
})

app.get("/login", function(req, res){
  res.render("login");
})

app.post("/login", passport.authenticate("local", {
  successRedirect: "/secret",
  failureRedirect: "/login"
}), function(req,res){
})

app.get("/logout", function(req, res){
  req.logout();
  res.redirect("/");
});

//==============================================================================
//======================   COMPLAINT ROUTES   ==================================
//==============================================================================
app.post("/complaint", function(req, res){
  var payload = req.body.complaint;
  Complaint.create(payload, function(err, createdComplaint){
    if(err){
      console.log("Error at the complaint route.");
    } else {
      console.log(createdComplaint);

      //==========================SEND MAIL=====================================

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'switchbooks101@gmail.com',
          pass: 'switch10books@!'
        }
      });

      var mailOptions = {
        from: 'switchbooks101@gmail.com',
        to: 'iec2017016@iiita.ac.in',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      res.redirect("/");
    }
  })
})



app.listen(3000, function(){
  console.log("Server has started");
})
