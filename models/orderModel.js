export default class OrderModel{
    constructor(id,cusId,itemId,description,quantity,total,) {
        this._id = id;
        this._cusId = cusId;
        this._itemId = itemId;
        this._description = description;
        this._quantity = quantity;
        this._total = total;

    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get itemId() {
        return this._itemId;
    }

    set itemId(value) {
        this._itemId = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        this._quantity = value;
    }


    get total() {
        return this._total;
    }

    set total(value) {
        this._total = value;
    }

    get cusId() {
        return this._cusId;
    }

    set cusId(value) {
        this._cusId = value;
    }
}