//setting up Express
const express = require('express');
const app = express();

const {db, Page, User} = require('./models');


//varifying db connection is working
db.authenticate().then(() => {
    console.log('conneted to the database');
});



app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));




app.get('/', (req, res) => {

    res.send('<h1> main page</h1>');
})




const PORT = 3000;

const init = async () =>{
    await db.sync({force: true});
    app.listen(PORT, () => {
        console.log('app listening in port: ' + PORT);
    })
}

init();
