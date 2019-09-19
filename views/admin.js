function Item(title, desc, price, img, cat,stock,priority) {
    this.title = title;
    this.description = desc;
    this.price = price;
    this.image = img;
    this.category = cat;
    this.user = "Miguelito";
    this.stock = stock;
    this.priority= priority;

}



function saveItem() {
    var title = $("#txtt").val();
    var desc = $("#desc").val();
    var price = $("#price").val();
    var img = $("#img").val();
    var cat = $("#cat").val();
    var stock = $("#txts").val();
    var pri = $("#txtp").val();
    console.log(title);
    console.log(desc);
    console.log(price);
    console.log(img);
    console.log(cat);
    //adquirir la info

    var theItem = new Item(title, desc, price, img, cat,stock, pri);
    console.log(theItem); //el objeto
    var serverURL = "http:/127.0.0.1:8080/api/products";
    $.ajax({
        url: serverURL,
        type: "POST",
        data: JSON.stringify(theItem),
        contentType: "application/json",
        success: function (res) {
            console.log("req succeed", res);
        },
        error: function (error) {
            console.error("error on req", error);
        }
    });

}

function testAjax() {
    var serverURL = "http://restclass.azurewebsites.net/API/test";
    $.ajax({
        url: serverURL,
        type: "GET",
        success: function (res) {
            console.log("req succeed", res);
        },
        error: function (error) {
            console.error("error on req", error);
        }
    });
}



function init() {
    console.log("init admi page")

    $("#btnsave").click(saveItem)
}
window.onload = init;