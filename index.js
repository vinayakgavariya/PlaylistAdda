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