const deepPeak = (keys, obj) => {
    let [key, ...other] = keys.split('.');
    return other.length === 0 ?
        obj[key] :
        deepPeak(other.join('.') , obj[key]);
};

const obj = {
    a: {
        b: {
            c: {
                d: "end"
            }
        }
    }
};

const c = deepPeak('a.b.c', obj);
