const http = require('http');



var express = require('express');
var app = express();

// const compression = require('compression')
const path = require('path')


// view engine setup
app.set('views', path.join(__dirname, 'static', 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded())
app.use(express.json());
// app.use(compression())
app.use('/public', express.static(path.join(__dirname, 'static', 'public')))

var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://education-app-829f1.firebaseio.com"
});

let db = admin.firestore();
let a = db.collection('users')
let b = db.collection('totalss')

app.get('/data', async(req, res) => {
    let docRef = a.doc("Hecsssk")
    await docRef.set({
        hobby: "ds",
        age: 56,
    });
    res.send('done');
})

app.get('/get', async(req, res) => {
    let usr = []
    const users = await db.collection('users').get()
    if (users.docs.length > 0) {
        for (const user of users.docs) {
            usr.push(user.data())
        }
    }
    let total = 0;
    console.log(usr);
    usr.forEach(i => {
        console.log(i.age);

        total = total + i.age;
    });
    let docRef = b.doc("dddddd")
    await docRef.set({
        total: total,
    });
    res.json(total)
})

app.get('/', function(req, res) {
    res.send('Welcome Cowboys!');
})

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log(`Example app listening at http://localhost:${port}`)
})