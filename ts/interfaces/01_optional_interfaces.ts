interface BookConfig {
    name: string;
    price: number;
    desc?: string; // optional
}
interface Book {
    name: string;
    price: number;
    desc: string;
}
function createBook(bookValue: BookConfig): Book {
    let book: Book = {
        name: bookValue.name,
        price: bookValue.price,
        desc: "This is a default book"
    };
    if (bookValue.desc) {
        book.desc = bookValue.desc;
    }
    return book;
}

let book1 = createBook({
    name: "TypeScript Handbook",
    price: 200
});
console.log(book1);

// Excess Property Checks
enum Colors {
    white = 'white',
    black = 'black'
}
interface Goods {
    name: string;
    color: Colors;
    price: number;
}

function createGood(good: Goods): Goods {
    return good;
}

let good1: Goods = createGood({
    name: "Milk",
    color: Colors.white,
    price: 50
});

console.log(good1);
