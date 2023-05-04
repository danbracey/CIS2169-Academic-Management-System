class User {
    public id;
    private _name;
    private _role;


    constructor(id, name, role) {
        this.id = id;
        this._name = name;
        this._role = role;
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

    get role() {
        return this._role;
    }

    set role(value) {
        this._role = value;
    }
}