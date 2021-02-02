const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt')
var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;
var session = require('express-session')


const userRoute = require('./routes/userRoute')
const loginRoute = require('./routes/loginRoute')
const contactRoute = require('./routes/contactRoute')

const router = express.Router();
app.use(bodyParser.json());
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 } }))
app.use(passport.initialize());
app.use(passport.session());

userRoute.init(router)
loginRoute.init(router)
contactRoute.init(router)

app.use("/", router);

app.get('/home', (req, res) => {
    res.send('Homepage!')
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

