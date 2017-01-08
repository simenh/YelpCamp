var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name : "Salmon Creek", 
        image: "https://farm9.staticflickr.com/8577/16263386718_c019b13f77.jpg",
        description: "Don’t fucking lie to yourself. Can we all just agree as the greater design community to stop fucking talking about Comic Sans altogether? It’s getting fucking old. Form follows fucking function. Creativity is a fucking work-ethic. Use your fucking hands. Learn from fucking criticism. Design is all about fucking relationships—the relationship of form and content, the relationship of elements, the relationship of designer and user. Don’t get hung up on things that don’t fucking work. Why are you fucking reading all of this?"


    },
    {
      name: "Granite Hill", 
      image: "https://farm9.staticflickr.com/8309/7968772438_3e0935fab7.jpg",
      description: "Don’t fucking lie to yourself. Can we all just agree as the greater design community to stop fucking talking about Comic Sans altogether? It’s getting fucking old. Form follows fucking function. Creativity is a fucking work-ethic. Use your fucking hands. Learn from fucking criticism. Design is all about fucking relationships—the relationship of form and content, the relationship of elements, the relationship of designer and user. Don’t get hung up on things that don’t fucking work. Why are you fucking reading all of this?"
    },
    {
        name: "Cloud's Rest",
        image : "https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg",
        description: "Don’t fucking lie to yourself. Can we all just agree as the greater design community to stop fucking talking about Comic Sans altogether? It’s getting fucking old. Form follows fucking function. Creativity is a fucking work-ethic. Use your fucking hands. Learn from fucking criticism. Design is all about fucking relationships—the relationship of form and content, the relationship of elements, the relationship of designer and user. Don’t get hung up on things that don’t fucking work. Why are you fucking reading all of this?"
    }
]

function seedDB(){
    Campground.remove({}, function(err){
    //     if(err){
    //         console.log(err);
    //     } else {
    //         console.log("removed campgrounds!");
    //     }
        
    //     data.forEach(function(seed){
    //         Campground.create(seed, function(err, campground){
    //             if(err){
    //                 console.log(err);
    //             } else { 
    //                 console.log("added a campground");
    //                 Comment.create(
    //                     {
    //                         text: "This place is great but I wish there was internet",
    //                         author: "Homer"
    //                     }, function(err, comment){
    //                         if(err){
    //                             console.log(err)
    //                         } else {
    //                             campground.comments.push(comment);
    //                             campground.save();
    //                             console.log("New comment created");
    //                         }
    //                     });
    //             }
    //         });
    //     });
    });
}

module.exports = seedDB;