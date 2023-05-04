class AcademicYear extends Module {
    public id;
    private _start_date;
    private _end_date;

    constructor(id, start_date, end_date) {
        super();
        this._start_date = start_date;
        this._end_date = end_date;
        this.id = id;
    }

    get id() {
        return this.id;
    }

    set id(value) {
        this.id = value;
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
}