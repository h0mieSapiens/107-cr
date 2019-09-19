var catalog=[];

function getCatalog(){
    console.log("started")
    var serverURL= "http://restclass.azurewebsites.net/API/points";
    $.ajax({
      url: serverURL,
      type: "GET",
      success: function(res){
      console.log("req succeed",res);
      for(let i=0; i<res.length; i++){
      var item=res[i];
      if(item.user=="Miguelito"){
      catalog.push(item);
      displayItem(item);
      }
    }
    displayCatalog();
      },
      error: function(error){
          console.error("error on req",error);
      }
    });
  }

function displayCatalog(){
   
//este ciclo es para la posicion de cada item
    for(let i=0; i<catalog.length; i++){
var item= catalog[i];
        displayItem(item)
    }
}
function displayItem(item) {
    // get the reference to UL
    var ul = $("#catalog");

    // create an LI
    var li =
        `
<div class="card" style="width: 18rem;">
<img src="${item.image}" class="card-img-top">
<div class="card-body">
<h5 class="card-title">${item.title}</h5>
<p class="card-text">${item.description}</p>
<h6>${item.price}</h6>
<a href="#" class="btn btn-primary">Add to cart</a>
</div>
</div>`;

    // add the li to ul
    ul.append(li);
}

function search(){
    var text= $("#txts").val().toLowerCase();
    console.log("user wants to search for:" + text);
    //pasos para buscar
    $("#catalog").html('');

    for(let i=0; i<catalog.length;i++){
        var item= catalog[i];
    if(item.title.toLowerCase().indexOf(text) >= 0 ||item.description.toLowerCase().indexOf(text) >= 0 ){
        displayItem(item)
       }
    }
}


function init(){
    console.log("init admi page");

getCatalog();
displayCatalog();
//eventos
$("#search").click(search);
$("#txts").keypress(function(args){
    if(args.keyCode == 13){
     search();
    }
});
$(".cat-filter").click(function(){
var category= $(this).attr('catname');
console.log("filter by cat", category);

});


}
window.onload = init;



// http methods
// http status codes