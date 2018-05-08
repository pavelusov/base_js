// https://habrahabr.ru/company/ruvds/blog/322850/

var books = [
    {
        title: 'javascript',
        price: 300
    },
    {
        title: 'php',
        price: 250
    },
    {
        title: 'python',
        price: 350
    },
    {
        title: 't-sql',
        price: 500
    }
];

var maxPrice = books.reduce(function (prev, current) {
    if (prev < current.price) {
        prev = current.price;
    }
    return prev;
}, 0);

var minPrice = books.reduce(function (prev, current) {
    if (current.price < prev.price) {
        return current;
    }
    return prev;
});
