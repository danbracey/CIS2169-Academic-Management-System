class Module extends DegreeProgram {
    public id;
    private _name;
    private _hours;
    private _credits;
    private _academic;
    private _academic_year;

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

    get hours() {
        return this._hours;
    }

    set hours(value) {
        this._hours = value;
    }

    get credits() {
        return this._credits;
    }

    set credits(value) {
        this._credits = value;
    }

    get academic() {
        return this._academic;
    }

    set academic(value) {
        this._academic = value;
    }

    get academic_year() {
        return this._academic_year;
    }

    set academic_year(value) {
        this._academic_year = value;
    }

    get learning_outcomes() {
        //Return associated learning outcomes
    }

    set learning_outcomes(array) {
        //Set new associated learning outcomes
    }

    get assessments() {
        //Return associated assessments
    }

    set assessments(array) {
        //Set new associated assessments
    }
}