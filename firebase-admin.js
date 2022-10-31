const fs = require('firebase-admin');

var serviceAccount = require("./serviceAccountKey.json");

fs.initializeApp({
    credential: fs.credential.cert(serviceAccount),
    databaseURL: "https://education-app-829f1.asia-south1.firebasedatabase.app" //
});

const db = fs.firestore();

let a = db.collection('users')
app.get('/read/:id', async(req, res) => {
    try {
        const userRef = db.collection("users").doc(req.params.id);
        const response = await userRef.get();
        res.send(response.data());
    } catch (error) {
        res.send(error);
    }
});
app.get('/get', async(req, res) => {
    let usr = []
    const users = await db.collection('user').get()
    if (users.docs.length > 0) {
        for (const user of users.docs) {
            usr.push(user.data())
        }
    }
    res.json(usr)
})
app.post('/data', async(req, res) => {
    let docRef = a.doc(req.body.user.name)
    await docRef.set({
        hobby: req.body.user.hobby,
        age: req.body.user.age,
    });
    res.send('done');
})