var books = [];
var id = 0;

module.exports = {
    create: (req, res) => {
        const {title, author} = req.body;
        books.push({id:id, title: title, author: author})
        id++
        res.status(200).send(books);
    },
    read: (req, res) => {
        res.status(200).send(books);
    },
    update: (req, res) => {
        const updateID = req.params.id;
        let index = books.findIndex(book => book.id == updateID);

        books[index] = {
            id: books[index].id,
            title: req.body.title || req[index].title,
            author: req.body.author || req[index].author
        }
        res.status(200).send(books)
    },
    delete:(req, res) => {
        const deleteID = req.params.id;
        let removeBook = books.indexOf(book => book.id == deleteID);
        books.splice(removeBook, 1);
        res.status(200).send(books);
    }
}