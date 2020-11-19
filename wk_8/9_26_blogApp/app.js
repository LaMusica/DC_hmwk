const express = require('express');
const app = express();
const pgp = require('pg-promise')()
const mustacheExpress = require('mustache-express');

const connectionString = "postgres://localhost:5432/blogdb"

const db = pgp(connectionString);

app.use(express.urlencoded());

app.engine('mustache', mustacheExpress());
app.set('views','./views');

app.set('view engine', "mustache");


/*
let blogEntry = [{
        //"postID":postID,
        "title":title,
        "body":body,
        "userName":userName
}]

*/



app.get('/' , (req,res) =>{
  //  db.any('SELECT * FROM blog_posts;')
      db.any('SELECT post_id,title, body FROM blog_post;')
.then(blogs => {

        res.render("index", {blogEntries:blogEntries})
})

});

app.post('/delete-post', (req,res)=> {

        const postID = req.body.postID
        console.log(postID);
        db.none("DELETE FROM blog_post WHERE post_id = $1;", [postID])
        .then(() => {
                res.redirect('/');
        })

});

app.post('/create-post', (req,res) => {

        const title = req.body.title;
        const body = req.body.body;
        db.none('INSERT INTO blog_post(title,body) VALUES($1,$2)', [title,body]) 
      //db.none('INSERT INTO blog_post(title,body) VALUES("Overcoming Adversity", "100 + Characters")  
        .then(() => {
            res.redirect("/")
        })


});

app.post('/update-post', (req,res) => {

        const postID = req.body.postID;
            res.render('update', {postID: postID})

})

app.post('/update-post/confirm', (req,res) => {

            const title = req.body.title;
            const body = req.body.body;
            const postID = req.body.postID;
            const current_time = new Date();


})

app.listen(3000, () => {
    console.log("Server is running...")
});