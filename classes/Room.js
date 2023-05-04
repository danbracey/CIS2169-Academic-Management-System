class Room extends Building {
    public id;
    private name;
    private building_id;

    constructor(id, name, building_id, building_name) {
        super(building_id, building_name);
        this.id = id;
        this._name = name;
        this._building_id = building_id;
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

    get building_id() {
        return this._building_id;
    }

    set building_id(value) {
        this._building_id = value;
    }
}