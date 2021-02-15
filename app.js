// import all packages use in noejs
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const cookieParser = require('cookie-parser')


// config app
const app = express();
require('dotenv').config();
app.use(express.json())
app.use(cors())
app.use(cookieParser())

// import all routers
const authRouter = require('./routers/authRouter')
const bookRouter = require('./routers/bookRouter')


// data base connect
mongoose.connect(process.env.DATABASE, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('db is connected'))
  .catch(err => console.log('not connect to the database'))

app.use('/api', authRouter)
app.use('/api/book', bookRouter)


// run server
const port  = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server is running in port ${port}`);
})