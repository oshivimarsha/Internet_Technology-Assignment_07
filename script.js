

// -------------------------------------------- Customer Page --------------------------------------------------------------------












// -------------------------------------------- Customer Page --------------------------------------------------------------------
// save item------------------



const cleanItemForm = () => {
    $('#ItemCode').val('');
    $('#ItemName').val('');
    $('#ItemPrice').val('');
    $('#ItemQty').val('');
}

const loadItemTable = () => {
    // create table row
    $("#itemTableBody").empty();
    item_arr.map((item,index) => {
        console.log(item);

        let data = `<tr> <td>${item.itemCode}</td> <td>${item.itemName}</td> <td>${item.itemPrice}</td> <td>${item.itemQty}</td> </tr>`;
        $("#itemTableBody").append(data);
    })
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

    let iCode = item_data.itemCode;
    let iName = item_data.itemName;
    let iPrice = item_data.itemPrice;
    let iQty = item_data.itemQty;

    // get customer data
    console.log("Item Code : ",  item_data.itemCode);
    console.log("Item Name : ",  item_data.itemName);
    console.log("Item Price : ",  item_data.itemPrice);
    console.log("Item Qty : ",  item_data.itemQty);

    // fill data into the form
    $('#ItemCode').val(iCode);
    $('#ItemName').val(iName);
    $('#ItemPrice').val(iPrice);
    $('#ItemQty').val(iQty);

    const clean_form = () => {
        $("#ItemCode").val('');
        $("#ItemName").val('');
        $("#ItemPrice").val('');
        $("#ItemQty").val('');
    }
});



















