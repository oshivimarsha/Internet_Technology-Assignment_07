export default class ItemModel {

    constructor(item_code, item_name, item_price, item_qty) {
        this._item_code = item_code;
        this._item_name = item_name;
        this._item_price = item_price;
        this._item_qty = item_qty;
    }


    get itemCode() {
        return this._item_code;
    }

    set itemCode(value) {
        this._item_code = value;
    }

    get itemName() {
        return this._item_name;
    }

    set itemName(value) {
        this._item_name = value;
    }

    get itemPrice() {
        return this._item_price;
    }

    set itemPrice(value) {
        this._item_price = value;
    }

    get itemQty() {
        return this._item_qty;
    }

    set itemQty(value) {
        this._item_qty = value;
    }
}