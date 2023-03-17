const express = require('express');
const app = express();
const port = 3000;
// import {
//     engine
// } from 'express-handlebars'
const expressHbs = require('express-handlebars');
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

app.get('/', (req, res) => {
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
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})