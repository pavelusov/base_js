/**
 * 1. Функция должна получать как минимум один аргумент.
 * 2. Функция должна возвращать значение или другую функцию.
 * 3. Функция не должна вносить какие-либо изменения в переданные ей аргументы.
 * */

const pavel = {
    name: "Pavel",
    canRead: false,
    canWrite: false
};

const openAccess = (person) => ({
    ...person,
    canRead: true,
    canWrite: true
});

const pavelOpenAccess = openAccess(pavel);
