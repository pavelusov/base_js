class Singleton {
    protected static instance: Singleton = new Singleton;

    private constructor() {}

    public static getInstance(): Singleton {
        return Singleton.instance;

    }

    public dbName = "mainDB";
    public speak(): void {
        console.log("I speak!");
        console.log(this);
    }
}

let singletone1 = Singleton.getInstance();
let singletone2 = Singleton.getInstance();
