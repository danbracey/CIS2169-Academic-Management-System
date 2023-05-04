class DegreeProgram {
    public id;
    private _name;
    private _academic;

    constructor(id, name, academic) {
        this._name = name;
        this._academic = academic;
        this._id = id;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get academic() {
        return this._academic;
    }

    set academic(value) {
        this._academic = value;
    }
}