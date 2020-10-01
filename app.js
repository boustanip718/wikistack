//setting up Express
const express = require('express');
const app = express();

const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users');

const {db, Page, User} = require('./models');


app.use(express.urlencoded({extended: false}));
app.use('/wiki', wikiRouter);

//varifying db connection is working
db.authenticate().then(() => {
    console.log('conneted to the database');
});


app.use(express.static(__dirname + '/public'));




app.get('/', (req, res) => {

    res.redirect('/wiki');
})




const PORT = 3000;

const init = async () =>{
    await db.sync({force: true});
    app.listen(PORT, () => {
        console.log('app listening in port: ' + PORT);
    })
}

init();
