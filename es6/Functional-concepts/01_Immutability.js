const colorRed = {
    color: '#ff0000',
    name: 'red',
    rating: 0
};
const rateColor = (color, rating) => {
    return {
        ...color,
        rating
    };
};

const colorRed1 = rateColor(colorRed, 3);

const list = [
    {title: 'red'},
    {title: 'green'}
];

const addColor = (title, colors) => {
    return [{title}, ...colors];
};

const myList1 = addColor('blue', list);
