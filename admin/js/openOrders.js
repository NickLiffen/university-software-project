//Function that counts the number of open orders
function countOpenOrders() {
    var target;
    target = _("totalOrders");
    ajaxGet("SQL/countOpenOrdersSQL.php", checkInput, target, null);
}
//Function that checks the number and tells the webiste what to do with it
function checkInput(jsonObj, target) {
  var newTarget, toNumber, json_output, output;
  json_output = JSON.parse(jsonObj);
  for (var i = 0; i < json_output.length; i++) {
      output = json_output[i].id;
    }
    newTarget = _("openOrdersTarget");
    target.innerHTML = output;
    if (output < 1) {
        newTarget.innerHTML = "You have no products in the open order status";
    } else {
        collectOpenOrders(newTarget);
    }
}
//If number is greater then 0 it collects them products
function collectOpenOrders(newTarget) {
    ajaxGet("SQL/openOrdersSQL.php", jsonOutputOpenOrders, newTarget, null);
}
//Outputs it the way I want it.
function jsonOutputOpenOrders(jsonObj, newTarget) {
  var json_output, output;
    newTarget.innerHTML = "";
    json_output = JSON.parse(jsonObj);
    //Starts the loop
    for (var i = 0; i < json_output.length; i++) {
        output = "<div id='item" + json_output[i].id + "' class='item'>" +
            '<p> Address Line One: ' + json_output[i].addressLineOne + '</p>' +
            "<p> Address Line Two: " + json_output[i].addressLineTwo + '</p>' +
            '<p> County: ' + json_output[i].county + '</p>' +
            '<p> Post Code: ' + json_output[i].postCode + '</p>' +
            '<p> Contact Number: ' + json_output[i].contactNumber + '</p>' +
            '<p> Number of products in sale: ' + json_output[i].noOfProducts + '</p>' +
            "<p> Update the Order Status: <select class='orderstatusSelect'>" +
              "<option value=  " + json_output[i].orderStatus + " > " + json_output[i].orderStatus +  "</option>" +
              "<option value='OrderProccess'>Order Being Proccessed</option>" +
              "<option value='OrderTogether'>Order Being Merged</option>" +
              "<option value='OrderDusparch'>Order Dispatched</option>" +
              "<option value='OrderCanceled'>Order Canceled</option>" +
              "<option value='OrderProblem'>Order Problem</option>" +
          "</select></p>" +
            "</div>";

        //This outputs the array
        newTarget.innerHTML += output;
        orderStatusChange();

    }
}
//Collects the new valye of the order and sends the ID of the Order and the new status
function orderStatusChange(){
  var statusChange;
  statusChange = _c('orderstatusSelect');
  for (var i = 0, j = statusChange.length; i < j; i++) {
      statusChange[i].addEventListener("change", function (event) {
        var e, productID, newID, statusChangeUpdate, test;
        e = event.target;
        while (e.id.indexOf('item') == -1) {
            e = e.parentNode;
        }
        productID = e.id;
        //Removes everything but the numbers.
        newID = productID.replace(/[^0-9.]/g, "");
        test = newID - 1
        statusChangeUpdate = statusChange[test].options[statusChange[test].selectedIndex].text;
        updateStatus(newID, statusChangeUpdate);
  });
}
}

function updateStatus(newID, statusChangeUpdate){
  var formdata;
  formdata = new FormData();
  formdata.append("newID", newID);
  formdata.append("statusChangeUpdate", statusChangeUpdate);
  ajaxPost("SQL/updatedOrderStatusSQL.php", formdata, modifyMessage, null, null);
}

function modifyMessage(jsonObj){
  var message;
    message = _("orderUpdateSuccess");
    message.style.display = "block";
    window.setTimeout(vanishText, 1000);
}

function vanishText(){
  var message;
    message = _("orderUpdateSuccess");
    message.style.display = "none";
}


//Set the listeners
function setListeners() {
    countOpenOrders();
}

window.addEventListener("load", setListeners());
