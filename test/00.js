var obj = {
    a: {
        b: {
            c: 'd'
        },
        e: 'f '
    }
};

get(obj, 'a.b');   // { c : 'd' }
get(obj, 'a.b.c'); // 'd'
get(obj, 'a.e');   // 'f'

function get(obj, path) {
    var pathSplit = path.split('.'); // [a, b]
    var temp =  obj;
    pathSplit.forEach(function (val) {
        temp = temp[val];
    });
    return temp;
}
