$(document).ready(function() {
    $(".btn").on("click", addItem);
    $(".link-delete").on("click", deleteItem);
    $("ol").on("click", ".link-delete", deleteItem);
});

function addItem() {
  // console.log("Yes");
  var text = window.prompt("Please Add a Book!");
  var delete_link = '<a href="#" class="link-delete">(Delete)</a>'
  $("ol").append("<li>" + text + " " + delete_link + "</li>");

  var numItems = $("total").length;
  $(".total").html(numItems + " items");
  }
  if (numItems == 1) {   // grr! This now doesn't work! Hate to be grammatically incorrect //
      $(".total").html(numItems + " item");
    }
    else {
      $(".total").html(numItems + " items");
    }

function deleteItem(event) {
  console.info(event);
  // $(event.target).remove();
  $(event.target).parent().remove();
}

// function rE(element) // resizeElement
//     {
//         $(element).width(0);
//         $(element).css('width', ($(document).width() + "px"));
//     }
//
// $(window).resize(function() { rE("#footer");  rE("#header"); }); // resizing window
//
// rE("#footer");  rE("#header");  // onload the page

// function rF() // resizeFooter
//     {
//         $("#footer").css('width', ($(document).width() + "px"));
//     }
//
// $(window).resize(function() {  rF(); }); // resizing window
// rF(); // onload the page
