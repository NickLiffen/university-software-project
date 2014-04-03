//Function that meand I don't have to type getElementById all the time!!
function _(el) {
    return document.getElementById(el);
}

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

function mostStockProduct() {
    var xhr, target, changeListener;
    target = _("mostStock");
    xhr = new XMLHttpRequest();

    changeListener = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            target.innerHTML = xhr.responseText;
        }
    };

    xhr.open("GET", "../CMS/SQL/maxStockSQL.php", true);
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
    mostStockProduct();
    lowStockRemaining();
    noStockRemaining();
}

window.addEventListener("load", setLoadListeners());
