const express = require('express');
const mongoose = require('mongoose')

require('dotenv').config();

// app
const app = express();

// database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database is connected')
}).catch((err) => {
    console.log(err)
})

// routes
app.get('/', (req, res) => {
	res.send('hello from node');
});

// port
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`API server is running on port ${port}`)
})