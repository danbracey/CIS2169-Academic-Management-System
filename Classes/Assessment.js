class Assessment {
    public id;
    private _title;
    private _volume;
    private _weighting;


    constructor(id, title, volume, weighting) {
        this._title = title;
        this._volume = volume;
        this._weighting = weighting;
        this._id = id;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get volume() {
        return this._volume;
    }

    set volume(value) {
        this._volume = value;
    }

    get weighting() {
        return this._weighting;
    }

    set weighting(value) {
        this._weighting = value;
    }
}