const express = require('express');
// const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')

const PORT = 3000;
const app = express();


// connect to mongoDb
const dbURI = 'mongodb+srv://frankjnr:admin212711@nodecluster.2etne.mongodb.net/myNodeDB?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(PORT))
  .catch(err => {console.log(err)})

app.set('view engine', 'ejs');

    // middlewares & static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true }))
// app.use(morgan('tiny'));     


  // routes
  app.get('/', (req, res) => {
    res.redirect('/blogs');
  });


    // blog routes
  app.use('/blogs', blogRoutes)


app.get('/about', (req, res) => {
  res.render('about', {title: 'About'});
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', {title: '404 Error'});
});




  
// app.get('/about-us', (req, res) => {
//   res.redirect('about');
// });
