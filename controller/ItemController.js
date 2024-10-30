import ItemModel from "../models/itemModel.js";
import {item_arr} from "../db/database.js";


// generated id ----------------------------------------------------------------------------------------------------
$(document).ready(function () {
    $("#ItemCode").val(generatedItemId());
});

let generatedItemId = function generatedItemId() {
    console.log(item_arr.length + 1);
    let code = item_arr.length + 1;
    return "I00" + code;
};

let setItemCode = () => {
    $("#ItemCode").val(generatedItemId())
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


// select item table----------------------------------------------------------------------------------------------------
$('#itemTableBody').on('click', 'tr', function () {
    let index = $(this).index();
    console.log(index);

    // update
    selected_item_index = $(this).index();

    let item_data = item_arr[index];
    console.log(item_data);

    $('#ItemCode').val(item_data.itemCode);
    $('#ItemName').val(item_data.itemName);
    $('#ItemPrice').val(item_data.itemPrice);
    $('#ItemQty').val(item_data.itemQty);

});


// save Item --------------------------------------------------------------------------------------------------------------
$("#save_item").on('click', function () {
    console.log("Click button");
    let item_code = generatedItemId();
    let item_name = $('#ItemName').val();
    let item_price = $('#ItemPrice').val();
    let item_qty = $('#ItemQty').val();

    let item = {
        itemCode : item_code,
        itemName : item_name,
        itemPrice : item_price,
        itemQty : item_qty
    }

    item_arr.push(item);

    cleanItemForm();

    loadItemTable();

});


// clear data into the txt field -----------------------------------------------------------------------------------------------------
const cleanItemForm = () => {
    setItemCode();
    $("#ItemName").val('');
    $("#ItemPrice").val('');
    $("#ItemQty").val('');
}
