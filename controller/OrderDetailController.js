import { order_arr} from "../db/database.js";
const loadOrderDetailTable=() => {
    console.log("Order Detail Table")

    $("#orderDetail-table-body").empty();
    order_arr.map((item) => {
        let data = `
            <tr>
                <td>${item.id}</td>
                <td>${item.cusId}</td>
                <td>${item.itemId}</td>
                <td>${item.description}</td>
                <td>${item.quantity}</td>
                <td>${item.total}</td>
            </tr>`;
        $("#orderDetail-table-body").append(data);
    })
}

$(document).ready(function () {
    $("#orderDetail-nav").on().click(function () {
        console.log("Order Detail Nav Clicked");
        loadOrderDetailTable();
    })

})
