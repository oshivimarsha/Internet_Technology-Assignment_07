import ItemModel from "../models/itemModel";
import {item_arr} from "../db/database.js";


// generated id ----------------------------------------------------------------------------------------------------
$(document).ready(function () {
    $("#ItemCode").val(generatedId());
});

let generatedId = function generatedId() {
    console.log(item_arr.length + 1);
    let code = item_arr.length + 1;
    return "I00" + code;
};

let setItemCode = () => {
    $("#ItemCode").val(generatedId())
};