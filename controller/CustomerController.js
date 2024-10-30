import CustomerModel from "../models/customerModel.js";
import {customer_arr} from "../db/database.js";


// clear data into the txt field
const cleanCustomerForm = () => {
    $('#CId').val('');
    $('#FirstName').val('');
    $('#LastName').val('');
    $('#Email').val('');
    $('#Mobile').val('');
    $('#Address').val('');
}

const loadCustomerTable = () => {
    // create table row
    $("#customerTableBody").empty();
    customer_arr.map((item,index) => {
        console.log(item);

        let data = `<tr> <td>${item.cId}</td> <td>${item.firstName}</td> <td>${item.lastName}</td> <td>${item.mobile}</td> <td>${item.email}</td> <td>${item.address}</td> </tr>`;
        $("#customerTableBody").append(data);
    })
}

// save Customer------------------
$("#save_customer").on('click', function () {
    let c_id = $('#CId').val();
    let first_name = $('#FirstName').val();
    let last_name = $('#LastName').val();
    let mobile = $('#Mobile').val();
    let email = $('#Email').val();
    let address = $('#Address').val();

    let customer = {
        cId : c_id,
        firstName : first_name,
        lastName : last_name,
        mobile : mobile,
        email : email,
        address : address
    }

    customer_arr.push(customer);

    cleanCustomerForm();

    loadCustomerTable();

});


// update Customer------------------

let selected_customer_index = null;

$("#update_customer").on('click', function () {
    let c_id = $('#CId').val();
    let first_name = $('#FirstName').val();
    let last_name = $('#LastName').val();
    let mobile = $('#Mobile').val();
    let email = $('#Email').val();
    let address = $('#Address').val();

    function generate_id() {
        return customer_arr.length = 1;
    }

    let customer = {
        cId : c_id,
        firstName : first_name,
        lastName : last_name,
        mobile : mobile,
        email : email,
        address : address
    }

    // update
    customer_arr[selected_customer_index] = customer;

    // reload the table
    loadCustomerTable();

    // clear customer form
    cleanCustomerForm();

});


// delete Customer------------------
$("#delete_customer").on('click', function () {
    customer_arr.splice(selected_customer_index,1)

    // reload the table
    loadCustomerTable();

    //clean customer form
    cleanCustomerForm();
});


// clear Customer------------------
$("#clear_customer").on('click', function () {
    cleanCustomerForm();
});



$('#customerTableBody').on('click', 'tr', function () {
    let index = $(this).index();
    console.log(index);

    //update
    selected_customer_index = $(this).index();

    let customer_data = customer_arr[index];
    console.log(customer_data);

    $('#CId').val(customer_data.cId);
    $('#FirstName').val(customer_data.firstName);
    $('#LastName').val(customer_data.lastName);
    $('#Email').val(customer_data.email);
    $('#Mobile').val(customer_data.mobile);
    $('#Address').val(customer_data.address);

    let cId = customer_data.cId;
    let fName = customer_data.firstName;
    let lName = customer_data.lastName;
    let email = customer_data.email;
    let mobile = customer_data.mobile;
    let address = customer_data.address;

    // get customer data
    console.log("Customer Id : ",  customer_data.cId);
    console.log("First Name : ",  customer_data.firstName);
    console.log("Last Name : ",  customer_data.lastName);
    console.log("Email : ",  customer_data.email);
    console.log("Mobile : ",  customer_data.mobile);
    console.log("Address : ",  customer_data.address);

    // fill data into the form
    $('#CId').val(cId);
    $('#FirstName').val(fName);
    $('#LastName').val(lName);
    $('#Email').val(email);
    $('#Mobile').val(mobile);
    $('#Address').val(address);

});