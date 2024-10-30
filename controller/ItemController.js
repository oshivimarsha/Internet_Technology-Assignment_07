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


// load item for table ----------------------------------------------------------------------------------------------------
const loadItemTable = () => {
    // create table row
    $("#itemTableBody").empty();
    item_arr.map((item,index) => {
        console.log(item);

        let data = `<tr> <td>${item.itemCode}</td> <td>${item.itemName}</td> <td>${item.itemPrice}</td> <td>${item.itemQty}</td> </tr>`;
        $("#itemTableBody").append(data);
    })
}


