class LearningOutcome {
    public id;
    private _name;
    private _outcome;

    constructor(id, name, outcome) {
        this._id = id;
        this._name = name;
        this._outcome = outcome;
    }


    get id() {
        return this.id;
    }

    set id(value) {
        this.id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get outcome() {
        return this._outcome;
    }

    set outcome(value) {
        this._outcome = value;
    }
}