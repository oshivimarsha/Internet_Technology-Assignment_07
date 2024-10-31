import CustomerModel from "../models/customerModel.js";
import {customer_arr} from "../db/database.js";


// generated id ----------------------------------------------------------------------------------------------------
$(document).ready(function (){
    $("#CId").val(generatedId());
});

let generatedId = function generatedId(){
    console.log(customer_arr.length + 1);
    let id = customer_arr.length + 1;
    return "C00" + id;

}

let setCustomerId = () => {
    $("#CId").val(generatedId());
}

// load customer for table -------------------------------------------------------------------------------------------------------

const loadCustomerTable = () => {
    // create table row
    $("#customerTableBody").empty();
    customer_arr.map((item,index) => {
        console.log(item);

        let data = `<tr> <td>${item.id}</td> <td>${item.firstName}</td> <td>${item.lastName}</td> <td>${item.mobile}</td> <td>${item.email}</td> <td>${item.address}</td> </tr>`;
        $("#customerTableBody").append(data);
    })
}



// select customer table----------------------------------------------------------------------------------------------------
$('#customerTableBody').on('click', 'tr', function () {
    let index = $(this).index();
    console.log(index);

    //update
    selected_customer_index = $(this).index();

    let customer_data = customer_arr[index];
    console.log(customer_data);

    $('#CId').val(customer_data.id);
    $('#FirstName').val(customer_data.firstName);
    $('#LastName').val(customer_data.lastName);
    $('#Email').val(customer_data.email);
    $('#Mobile').val(customer_data.mobile);
    $('#Address').val(customer_data.address);


});


//Validation ------------------------------------------------------------------------------------------------------------------
const validateMobile = (mobile) => {
    const sriLankanMobileRegex = /^(?:\+94|0)?7[0-9]{8}$/;
    return sriLankanMobileRegex.test(mobile);
}

const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}




// save Customer--------------------------------------------------------------------------------------------------------------
$("#save_customer").on('click', function () {
    console.log("Clicked button!!!");
    let c_id = generatedId();
    let first_name = $('#FirstName').val();
    let last_name = $('#LastName').val();
    let mobile = $('#Mobile').val();
    let email = $('#Email').val();
    let address = $('#Address').val();

    // validate
    if (first_name.length===0) {
        Swal.fire({
            icon: "error",
            title: "Oops... Invalid First Name",
            text: "Something went wrong!"
        });
    } else if (last_name.length===0) {
        Swal.fire({
            icon: "error",
            title: "Oops... Invalid Last Name",
            text: "Something went wrong!"
        });
    } else if (!validateMobile(mobile)) {
        Swal.fire({
            icon: "error",
            title: "Oops... Invalid Mobile",
            text: "Something went wrong!"
        });
    } else if (!validateEmail(email)) {
        Swal.fire({
            icon: "error",
            title: "Oops... Invalid Email",
            text: "Something went wrong!"
        });
    } else if (address.length===0) {
        Swal.fire({
            icon: "error",
            title: "Oops... Invalid Address",
            text: "Something went wrong!"
        });
    } else {
        let customer = new CustomerModel(c_id, first_name, last_name, mobile, email, address);

        customer_arr.push(customer);

        loadCustomerTable();

        // Added successfully
        let timerInterval;
        Swal.fire({
            title: "Customer Added Successfully",
            timer: 1000,
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

        cleanCustomerForm();

    }

});


// update Customer-------------------------------------------------------------------------------------------------------------

let selected_customer_index = null;

$("#update_customer").on('click', function () {
    let c_id = $('#CId').val();
    let first_name = $('#FirstName').val();
    let last_name = $('#LastName').val();
    let mobile = $('#Mobile').val();
    let email = $('#Email').val();
    let address = $('#Address').val();


    // validate
    if (first_name.length===0) {
        Swal.fire({
            icon: "error",
            title: "Oops... Invalid First Name",
            text: "Something went wrong!"
        });
    } else if (last_name.length===0) {
        Swal.fire({
            icon: "error",
            title: "Oops... Invalid Last Name",
            text: "Something went wrong!"
        });
    } else if (!validateMobile(mobile)) {
        Swal.fire({
            icon: "error",
            title: "Oops... Invalid Mobile",
            text: "Something went wrong!"
        });
    } else if (!validateEmail(email)) {
        Swal.fire({
            icon: "error",
            title: "Oops... Invalid Email",
            text: "Something went wrong!"
        });
    } else if (address.length===0) {
        Swal.fire({
            icon: "error",
            title: "Oops... Invalid Address",
            text: "Something went wrong!"
        });
    } else {
        let customer = new CustomerModel(c_id, first_name, last_name, mobile, email, address);

        // update
        customer_arr[selected_customer_index] = customer;

        // reload the table
        loadCustomerTable();

        // Update successfully
        let timerInterval;
        Swal.fire({
            title: "Customer Update Successfully",
            timer: 1000,
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

        cleanCustomerForm();

    }

});


// delete Customer--------------------------------------------------------------------------------------------------------------
$("#delete_customer").on('click', function () {
    customer_arr.splice(selected_customer_index,1)

    // reload the table
    loadCustomerTable();

    // Delete successfully
    let timerInterval;
    Swal.fire({
        title: "Customer Delete Successfully",
        timer: 1000,
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

    //clean customer form
    cleanCustomerForm();
});


// clear Customer--------------------------------------------------------------------------------------------------------------------
$("#clear_customer").on('click', function () {
    cleanCustomerForm();
});

// clear data into the txt field -----------------------------------------------------------------------------------------------------
const cleanCustomerForm = () => {
    setCustomerId();
    $('#FirstName').val('');
    $('#LastName').val('');
    $('#Email').val('');
    $('#Mobile').val('');
    $('#Address').val('');
}