const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());

const categories = require('./data/categories.json');
const news = require('./data/news.json');


app.get('/', (req, res) => {
    res.send('bd-news serverSide response send. success');
});


app.get('/news-categories', (req, res) => {
    res.send(categories);
});

app.get('/news', (req, res) => {
    res.send(news);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(news);
    }
    else {
        const category_news = news.filter(n => n.category_id === id);
        res.send(category_news);
    }
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
});




app.listen(port, () => {
    console.log(`bd-news server running on port ${port}`);
});

