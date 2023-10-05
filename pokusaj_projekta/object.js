class Person{
    constructor(name, surname, nin, birthday){
        this._name = name;
        this._surname=surname;
        this._nin=nin;
        this._birthday=birthday;
    }
    age(){
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let yearOfBirth = this._birthday.getFullYear();
        return currentYear - yearOfBirth;
    }
    angeIn(year){
        let yearOfBirth = this._birthday.getFullYear();
        return year - yearOfBirth;
    }
}


