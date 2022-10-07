const router = require('express').Router();
const books = require('./books_dumb');

let booksResource = books;

router.get('/books', function (req, res) {
    res.send(booksResource);
});

router.get('/books/:id', function (req, res) {
    const { id } = req.params;

    const book = booksResource.find(b => b.isbn === id);
    if (!book) return res.status(404).send('Book does not found');

    res.send(book);
});

router.post('/books', function (req, res) {
    const {
        name,
        imageUrl,
        author,
        pages,
        price
    } = req.body;

    const book = {
        name,
        imageUrl,
        author,
        pages,
        price
    };
    booksResource.push(book);

    res.send(book);
});

router.put('/books/:id', function (req, res) {
    const { id } = req.params;
    const {
        title,
        isbn,
        pageCount,
        publishedDate,
        thumbnailUrl,
        shortDescription,
        longDescription,
        status,
        authors,
        categories
    } = req.body;

    

});

module.exports = router;