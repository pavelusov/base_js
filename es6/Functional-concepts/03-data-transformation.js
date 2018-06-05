// Object.keys
const books = {
    javascript: 200,
    java: 300,
    kotlin: 250
};

const arrayBooks = Object.keys(books).map(key => ({
    name: key,
    price: books[key]
}));

// filter
const colors = ["red", "green", "blue"];

const red = colors.filter(color => color === 'red');
// const redValue = colors.find(color => color === 'red'); // get value

// map
const lightColors = colors.map(color => `Light ${color}`);

// reduce
const ages = [34,2,89,44,23,52,88];

const max = ages.reduce(
    (max, value) => (value > max) ? value : max, 0);
const min = ages.reduce(
    (max, value) => (value < max) ? value : max);

const colors2 = ["red", "red", "green", "blue", "green"];

const uniqueColors = colors2.reduce((unique, color, i, colors) => {
    if (unique.indexOf(color) !== -1) {
        return unique;
    } else {
        return [...unique, color];
    }
}, []);
