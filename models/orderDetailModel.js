export default class OrderDetailsModel{
    constructor(itemId, description, unitPrice, qty, total ) {
        this._itemId = itemId;
        this._description = description;
        this._unitPrice = unitPrice;
        this._qty = qty;
        this._total = total;

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

    get unitPrice() {
        return this._unitPrice;
    }

    set unitPrice(value) {
        this._unitPrice = value;
    }

    get qty() {
        return this._qty;
    }

    set qty(value) {
        this._qty = value;
    }

    get total() {
        return this._total;
    }

    set total(value) {
        this._total = value;
    }
}