//Function that collects the total number of products which are selling
function totalProducts() {
    var xhr, target, changeListener;
    target = _("totalProducts");
    xhr = new XMLHttpRequest();

    changeListener = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            target.innerHTML = xhr.responseText;
        }
    };

    xhr.open("GET", "../CMS/SQL/totalProductsSQL.php", true);
    xhr.onreadystatechange = changeListener;
    xhr.send();
}
//Function that collects the total number of products which have sold.
function totalSold() {
    var xhr, target, changeListener;
    target = _("totalSoldProducts");
    xhr = new XMLHttpRequest();

    changeListener = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            target.innerHTML = xhr.responseText;
        }
    };

    xhr.open("GET", "SQL/totalSoldProductsSQL.php", true);
    xhr.onreadystatechange = changeListener;
    xhr.send();
}
//Counts the total number of open orders.
function countOpenOrders() {
    var xhr, target, changeListener;
    target = _("countOpenOrders");
    xhr = new XMLHttpRequest();

    changeListener = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            target.innerHTML = xhr.responseText;
        }
    };

    xhr.open("GET", "SQL/countOpenOrdersSQL.php", true);
    xhr.onreadystatechange = changeListener;
    xhr.send();
}
//Function that collects the products left with
function lowStockRemaining() {
    var xhr, target, changeListener;
    target = _("countFewStock");
    xhr = new XMLHttpRequest();

    changeListener = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            target.innerHTML = xhr.responseText;
        }
    };

    xhr.open("GET", "SQL/FewStockSQL.php", true);
    xhr.onreadystatechange = changeListener;
    xhr.send();
}
//Function that collects all the stock with 0 left.
function noStockRemaining() {
    var xhr, target, changeListener;
    target = _("countNoStock");
    xhr = new XMLHttpRequest();

    changeListener = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            target.innerHTML = xhr.responseText;
        }
    };

    xhr.open("GET", "SQL/noStock.php", true);
    xhr.onreadystatechange = changeListener;
    xhr.send();
}
//Sets the listeners on load
function setLoadListeners() {
    totalProducts();
    totalSold();
    countOpenOrders();
    lowStockRemaining();
    noStockRemaining();
}

window.addEventListener("load", setLoadListeners());
