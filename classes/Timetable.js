class Timetable extends Module {
    public id;
    private _name;
    private _room;
    private _start_date;
    private _end_date;
    private _academic;


    constructor(id, name, room, start_date, end_date, academic) {
        super();
        this._name = name;
        this._room = room;
        this._start_date = start_date;
        this._end_date = end_date;
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

    get room() {
        return this._room;
    }

    set room(value) {
        this._room = value;
    }

    get start_date() {
        return this._start_date;
    }

    set start_date(value) {
        this._start_date = value;
    }

    get end_date() {
        return this._end_date;
    }

    set end_date(value) {
        this._end_date = value;
    }

    get academic() {
        return this._academic;
    }

    set academic(value) {
        this._academic = value;
    }
}