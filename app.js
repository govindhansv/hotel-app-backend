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

app.get('/get/:table', async(req, res) => {
    let table = req.params.table
    console.log("table: ",table);
    let usr = []
    const users = await db.collection('orders').get()
    if (users.docs.length > 0) {
        for (const user of users.docs) {
            usr.push(user.data())
        }
    }

    let total = 0;
    console.log(usr);
    usr.forEach(i => {
        
        if (i.table == table) {
            console.log(i);
            total = total + i.price;
        }
    });
    let docRef = b.doc()
    await docRef.set({
        table:table,
        total: total,
    });
    res.json(total)
})

app.get('/', function(req, res) {
    res.send('Welcome Cowboys!');
})

var server = app.listen(process.env.PORT || 8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log(`Example app listening at http://localhost:${port}`)
})
