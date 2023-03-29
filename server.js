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
const uri = "mongodb+srv://traz08102003:vrRJOA6nqwODzFmz@cp17303.4gzmzyt.mongodb.net/Cp17303?retryWrites=true&w=majority";
const photoModal=require('./photoModal')
app.get('/', async(req, res) => {

   await mongoose.connect(uri).then(console.log('kết nối thành công'));
    let nvs = await photoModal.find({tuoi: 23});
    console.log(nvs);
    res.send(nvs);
    // res.render('home', {
    //     layout: 'page2',
    //     showTitle: false,

    //     helpers: {
    //         foo() {
    //             return 'foo.';
    //         }
    //     }
    // });
})

// app.get('/', (req, res) => {
//     res.end('hello world')
// })

// app.post("/photo", async (request, response) => {
 
//     const photo = new photoModal();
//     photo.id=1;
//     photo.albumId=1;
//     photo.title='Sơn Tùng';
//     photo.url='Sơn Tùng';
//     photo.thumbnailUrl='Sơn Tùng';
  
//     console.log('da len');
//     try {
//       await photo.save();
//       response.send(user);
//     } catch (error) {
//       response.status(500).send(error);
//     }
// });
app.get("/add-photo", async (request, res) => {
    await mongoose.connect(uri);

    arrNewNv = [];
  
    arrNewNv.push({
      ten: 'Tran Phuong Anh',
      tuoi: 24,
      diachi: 'HP'
    });
  
    arrNewNv.push({
      ten: 'Nguyen Tuan Minh',
      tuoi: 25,
      diachi: 'HG'
    });
    
    let kq = await photoModal.insertMany(arrNewNv);
  
    console.log(kq);
  
    let nvs = await photoModal.find();
  
    res.send(nvs);
  })
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})