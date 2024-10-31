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

    // validate
    if (item_name.length===0) {
        Swal.fire({
            icon: "error",
            title: "Oops... Invalid Item Name",
            text: "Something went wrong!"
        });
    } else if (item_price.length===0) {
        Swal.fire({
            icon: "error",
            title: "Oops... Invalid Item Price",
            text: "Something went wrong!"
        });
    } else if (item_qty.length===0) {
        Swal.fire({
            icon: "error",
            title: "Oops... Invalid Item Qty",
            text: "Something went wrong!"
        });
    } else {
        let item = new ItemModel(item_code, item_name, item_price, item_qty);

        item_arr.push(item);

        loadItemTable();

        // Added successfully
        let timerInterval;
        Swal.fire({
            title: "Item Added Successfully",
            timer: 500,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            /!* Read more about handling dismissals below *!/
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("");
            }
        });

        cleanItemForm();

    }

  /*  let item = new ItemModel(item_code, item_name, item_price, item_qty);

    item_arr.push(item);

    loadItemTable();

    cleanItemForm();*/
});


// update Item -------------------------------------------------------------------------------------------------------------
let selected_item_index = null;

$("#update_item").on('click', function () {
    let item_code = $('#ItemCode').val();
    let item_name = $('#ItemName').val();
    let item_price = $('#ItemPrice').val();
    let item_qty = $('#ItemQty').val();


    // validate
    if (item_name.length===0) {
        Swal.fire({
            icon: "error",
            title: "Oops... Invalid First Name",
            text: "Something went wrong!"
        });
    } else if (item_qty.length===0) {
        Swal.fire({
            icon: "error",
            title: "Oops... Invalid Last Name",
            text: "Something went wrong!"
        });
    } else if (item_qty.length===0) {
        Swal.fire({
            icon: "error",
            title: "Oops... Invalid Mobile",
            text: "Something went wrong!"
        });
    } else {
        let item = new ItemModel(item_code, item_name, item_price, item_qty)

        // update
        item_arr[selected_item_index] = item;

        // reload the table
        loadItemTable();

        // Update successfully
        let timerInterval;
        Swal.fire({
            title: "Item Update Successfully",
            timer: 500,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("");
            }
        });

        cleanItemForm();

    }


    /*
        let item = new ItemModel(item_code, item_name, item_price, item_qty)

        item_arr[selected_item_index] = item;

        cleanItemForm();

        loadItemTable();
    */

});

// delete Item-------------------------------------------------------------------------------------------------------------
$("#delete_item").on('click', function () {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            item_arr.splice(selected_item_index,1);
            loadItemTable();
            cleanItemForm();
            setItemCode();
            Swal.fire({
                title: "Deleted!",
                text: "Item has been deleted.",
                icon: "success"
            });
        }
    });
});



// clear Item-------------------------------------------------------------------------------------------------------------
$("#clean_item").on('click', function () {
    cleanItemForm();
});

// clear data into the txt field -----------------------------------------------------------------------------------------------------
const cleanItemForm = () => {
    setItemCode();
    $("#ItemName").val('');
    $("#ItemPrice").val('');
    $("#ItemQty").val('');
}
