import OrderModel from "../models/orderModel.js";
import OrderDetailsModel from "../models/orderDetailModel.js";
import {customer_arr, item_arr, order_arr, orderDetail_arr} from "../db/database.js";

$(document).ready(function (){
    setOrderId();

})

function generateNextOrderId(){
    let id =  order_arr.length +1;
    return "O00" + id;
}

function setOrderId(){
    $("#inputOrderId").val(generateNextOrderId());
    console.log(generateNextOrderId());
}
