

// -------------------------------------------- Customer Page --------------------------------------------------------------------












// -------------------------------------------- Customer Page --------------------------------------------------------------------
// save item------------------



const cleanItemForm = () => {
    $('#ItemCode').val('');
    $('#ItemName').val('');
    $('#ItemPrice').val('');
    $('#ItemQty').val('');
}




$("#save_item").on('click', function () {
    let item_code = $('#ItemCode').val();
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

// update item------------------
let selected_item_index = null;

$("#update_item").on('click', function () {
    let item_code = $('#ItemCode').val();
    let item_name = $('#ItemName').val();
    let item_price = $('#ItemPrice').val();
    let item_qty = $('#ItemQty').val();

    let item = {
        itemCode : item_code,
        itemName : item_name,
        itemPrice : item_price,
        itemQty : item_qty
    }

    item_arr[selected_item_index] = item;

    cleanItemForm();

    loadItemTable();

});

// delete item------------------
$("#delete_item").on('click', function () {
    item_arr.splice(selected_item_index, 1);

    cleanItemForm();

    loadItemTable();
});

// clear item------------------
$("#clean_item").on('click', function () {
   cleanItemForm();
});



const clean_form = () => {
    $("#ItemCode").val('');
    $("#ItemName").val('');
    $("#ItemPrice").val('');
    $("#ItemQty").val('');
}



















