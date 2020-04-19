var express = require('express'),
    MongoClient = require('mongodb').MongoClient,
    url = "mongodb://localhost:27017/",
    router = express.Router();

router.get('/',function(req,res,next){
    MongoClient.connect(url,function(err,db){
        if(err) throw err ;
        var dbo = db.db("music");
        dbo.collection("songs").find().toArray(function(er,result){
            if(er) throw er ;
            res.render('home',{songList:result});
        });
    }); 
});
module.exports = router;