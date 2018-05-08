interface Source {
    save(value: string): void;
    fetchAll(): Array<string>;
    fetchLine(): string;
}

class SourceDB implements Source {
    save(value: string): void {
        console.log(`"${value}" is saved to the DB"`);
    }

    fetchAll(): Array<string> {
        return ['line 1 from the DB', 'line 2 from the DB', 'line 3 from the DB'];
    }

    fetchLine(): string {
        return "I'm string from DB";
    }
}

class SourceFile implements Source {
    save(value: string): void {
        console.log(`"${value}" is saved to the file`);
    }

    fetchAll(): Array<string> {
        return ['line 1 from the File', 'line 2 from the File', 'line 3 from the File'];
    }

    fetchLine(): string {
        return "I'm string from File";
    }
}

class SelectSource {
    // singleton
    protected static instance: SelectSource = new SelectSource;
    private constructor() {}
    public static getInstance(): SelectSource {
        return SelectSource.instance;
    }
    // factory method
    public getSource(source: string) {
        switch (source) {
            case "DB":
                return new SourceDB();
            case "file":
                return new SourceFile();
        }
    }
}

const sources = SelectSource.getInstance();
const fileSource = sources.getSource('file');
fileSource.save("My value");

const DBSource = sources.getSource('DB');
DBSource.save("My value");
