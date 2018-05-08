let db = [
    {
        id: 1,
        name: 'Pavel'
    },
    {
        id: 2,
        name: 'Darya'
    }
];

function student(db) {
    return function (id) {
        return db.find(function (student) {
            return student.id === id;
        });
    };
}

let pavel = student(db)(3);
console.log(pavel);
