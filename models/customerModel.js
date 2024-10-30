export default class CustomerModel {

    constructor(id,first_name,last_name,mobile,email,address) {
        this._id = id;
        this._first_name = first_name;
        this._last_name = last_name;
        this._mobile = mobile;
        this._email = email;
        this._address = address;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get firstName() {
        return this._first_name;
    }

    set firstName(value) {
        this._first_name = value;
    }

    get lastName() {
        return this._last_name;
    }

    set lastName(value) {
        this._last_name = value;
    }

    get mobile() {
        return this._mobile;
    }

    set mobile(value) {
        this._mobile = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }
}