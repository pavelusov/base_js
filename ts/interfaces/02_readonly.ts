interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = {
    x: 20,
    y: 30
};

// p1.x = 3; // don't changed

let arrayReadOnly: ReadonlyArray<number> = [1,2,3,4];
