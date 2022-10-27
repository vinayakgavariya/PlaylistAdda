function searchPlaylist() {

    var filter_text = document.getElementById("search_bar").value.toUpperCase();
    var card = document.getElementsByClassName("card");

    for (var i = 0; i < card.length; i++) {

        var title = card[i].getElementsByClassName("title")[0];
        var str = title.innerText || title.textContent;

        if (str.toUpperCase().indexOf(filter_text) > -1) {

            card[i].style.display = "";
        } else {

            card[i].style.display = "none";
        }
    }
}


$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 20) {
        $("#toTopBtn").fadeIn();
      } else {
        $("#toTopBtn").fadeOut();
      }

      if ($(this).scrollTop() > 20) {
        $("#toBotBtn").fadeIn();
      } else {
        $("#toBotBtn").fadeOut();
      }
    });
  
    $("#toTopBtn").click(function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1000
      );
      return false;
    });

    $("#toBotBtn").click(function () {
        $("html, body").animate({ scrollTop: $(document).height() }, 1000);
      return false;
    });


});
  
function show_bar() {
  $("#search-icon").hide();
  $("#search_bar").show();
}