import OrderModel from "../models/orderModel.js";
import OrderDetailsModel from "../models/orderDetailModel.js";
import {customer_arr, item_arr, order_arr, orderDetail_arr} from "../db/database.js";

let itemIndex;
let total;
let cId;

$(document).ready(function () {
    $("#order-nav").on().click(function () {
        console.log("Order Nav Clicked");
        loadCustomerSelector();
        loadItemSelector();
    })
});

const loadCustomerSelector = () => {
    $("#selectCustomer").empty();
    $("#selectCustomer").append(`<option value="" >Select a Customer</option>`);

    customer_arr.map((item) => {
        $("#selectCustomer").append(`<option >${item.id}</option>`);
    })
}

$("#selectCustomer").on("change", function () {
    let index = $(this).prop("selectedIndex");
    if (index>0) {
        $("#customerFirstName").val(customer_arr[index - 1].firstName);
        $("#customerLastName").val(customer_arr[index - 1].lastName);
    }
})

const loadItemSelector = () => {
    $("#selectItem").empty();
    $("#selectItem").append(`<option value="" >Select a Item</option>`);

    item_arr.map((item) => {
        $("#selectItem").append(`<option >${item.itemCode}</option>`);
    })
}

$("#selectItem").on("change", function () {
    itemIndex = $(this).prop("selectedIndex");
    if (itemIndex>0) {
        $("#description").val(item_arr[itemIndex - 1].itemName);
        $("#qtyOnHand").val(item_arr[itemIndex - 1].itemQty);
        $("#unitPrice").val(item_arr[itemIndex - 1].itemPrice);
    }
})

const loadCartTable = () => {
    $("#cartTableBody").empty();
    orderDetail_arr.map((item) => {
        let data = `
            <tr>
                <td>${item.itemId}</td>
                <td>${item.description}</td>
                <td>${item.unitPrice}</td>
                <td>${item.qty}</td>
                <td>${item.total}</td>
            </tr>`;
        $("#cartTableBody ").append(data);
    });
}

const cleanCartForm = () => {
    $("#selectCustomer").val("")
    $("#customerName2").val("")
    $("#selectItem").val("")
    $("#description").val("")
    $("#qtyOnHand").val("")
    $("#quantity").val("")
    $("#unitPrice").val("")
}

$("#addToCart").on("click", function () {
    let i_code = $("#selectItem").val();
    let description = $("#description").val();
    let unitPrice = parseFloat($("#unitPrice").val());
    let qtyOnHand = parseInt($("#qtyOnHand").val());
    let qty = parseInt($("#quantity").val());
    let tot = unitPrice * qty;
    cId = $("#selectCustomer").val();

    if (qty > qtyOnHand){
        alert("Not enough stock");
    }else{
        let cartData = new OrderDetailsModel(i_code, description, unitPrice, qty, tot);

        updateItem(i_code, qty);
        console.log(cartData)
        orderDetail_arr.push(cartData)

        total += tot;
        $("#totalAmount").empty()
        $("#totalAmount").append(total+"/=");

        loadCartTable();
        cleanCartForm()

    }

})

function updateItem(i_code, quantity) {
    for (let i = 0; i < item_arr.length; i++) {
        if (i_code === item_arr[i].itemCode) {
            item_arr[i].itemQty = item_arr[i].itemQty - quantity;
        }
    }
}

$("#placeOrder").on().click(function () {
    console.log("place order clicked");
    $("#cartTableBody tr").each(function () {
        let i_code = $(this).find("td").eq(0).text();
        let description = $(this).find("td").eq(1).text();
        let unitPrice = parseFloat($(this).find("td").eq(2).text());
        let qty = parseInt($(this).find("td").eq(3).text());
        let tot = parseFloat($(this).find("td").eq(4).text());
        let orderData = new OrderModel(order_arr.length+1,cId, i_code, description, qty, tot);
        order_arr.push(orderData);
        cId = null
    })

    $("#cartTableBody").empty();
    $("#totalAmount").empty();
    $("#totalAmount").append("0.00");

    cleanCartForm()
    orderDetail_arr.splice(0,orderDetail_arr.length)
    console.log(orderDetail_arr)

    Swal.fire({
        position: "succ",
        icon: 'success',
        title: 'Order Placed Successfully',
        showConfirmButton: false,
        timer: 1500
    })
})
