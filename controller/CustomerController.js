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