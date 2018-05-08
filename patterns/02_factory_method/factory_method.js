var SourceDB = /** @class */ (function () {
    function SourceDB() {
    }
    SourceDB.prototype.save = function (value) {
        console.log("\"" + value + "\" is saved to the DB\"");
    };
    SourceDB.prototype.fetchAll = function () {
        return ['line 1 from the DB', 'line 2 from the DB', 'line 3 from the DB'];
    };
    SourceDB.prototype.fetchLine = function () {
        return "I'm string from DB";
    };
    return SourceDB;
}());
var SourceFile = /** @class */ (function () {
    function SourceFile() {
    }
    SourceFile.prototype.save = function (value) {
        console.log("\"" + value + "\" is saved to the file");
    };
    SourceFile.prototype.fetchAll = function () {
        return ['line 1 from the File', 'line 2 from the File', 'line 3 from the File'];
    };
    SourceFile.prototype.fetchLine = function () {
        return "I'm string from File";
    };
    return SourceFile;
}());
var SelectSource = /** @class */ (function () {
    function SelectSource() {
    }
    SelectSource.getInstance = function () {
        return SelectSource.instance;
    };
    // factory method
    SelectSource.prototype.getSource = function (source) {
        switch (source) {
            case "DB":
                return new SourceDB();
            case "file":
                return new SourceFile();
        }
    };
    // singleton
    SelectSource.instance = new SelectSource;
    return SelectSource;
}());
var sources = SelectSource.getInstance();
var fileSource = sources.getSource('file');
fileSource.save("My value");
var DBSource = sources.getSource('DB');
DBSource.save("My value");
