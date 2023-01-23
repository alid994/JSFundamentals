
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.get('/', (req, res) => {
    res.render('index.html');
  });
  

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/socialmedia', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

const postsRouter = require('./routes/posts');
const messagesRouter = require('./routes/messages');
const contactsRouter = require('./routes/contacts');

app.use('/posts', postsRouter);
app.use('/messages', messagesRouter);
app.use('/contacts', contactsRouter);

app.listen(4000, function() {
    console.log("Server is running on Port: 4000");
});
