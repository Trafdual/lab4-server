const express = require('express');
const app = express();
const port = 3000;
const mongoose =require('mongoose');
// import {
//     engine
// } from 'express-handlebars'
const expressHbs = require('express-handlebars');
const PhotoModel = require('./photoModal');
const hbs = expressHbs.create({
    helpers: {
        foo() {
            return 'FOO!';
        },
        bar() {
            return 'BAR!';
        }
    }
});
app.engine('.hbs', expressHbs.engine({
    extname: "hbs",
    defaultLayout: 'main',
    layoutsDir: "views/layouts/"
}));
app.set('view engine', '.hbs');
app.set('views', './views');
const uri = "mongodb+srv://traz08102003:vrRJOA6nqwODzFmz@cp17303.4gzmzyt.mongodb.net/baitap?retryWrites=true&w=majority";
app.get('/', (req, res) => {

    mongoose.connect(uri).then(console.log('kết nối thành công'));
   
    res.render('home', {
        layout: 'page2',
        showTitle: false,

        helpers: {
            foo() {
                return 'foo.';
            }
        }
    });
})

// app.get('/', (req, res) => {
//     res.end('hello world')
// })
const photoModal=require('./photoModal')
app.post("/photo", async (request, response) => {
 
    const photo = new photoModal();
    photo.id=1;
    photo.albumId=1;
    photo.title='Sơn Tùng';
    photo.url='Sơn Tùng';
    photo.thumbnailUrl='Sơn Tùng';
  
    console.log('da len');
    try {
      await photo.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});
app.get("/photo", async (request, response) => {
    const photos = await photoModal.find({});
  
    try {
        console.log(photos);
      response.send(photos);
    } catch (error) {
      response.status(500).send(error);
    }
  });
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})