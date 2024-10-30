

// -------------------------------------------- Customer Page --------------------------------------------------------------------












// -------------------------------------------- Customer Page --------------------------------------------------------------------
// save item------------------



const cleanItemForm = () => {
    $('#ItemCode').val('');
    $('#ItemName').val('');
    $('#ItemPrice').val('');
    $('#ItemQty').val('');
}





// update item------------------

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























