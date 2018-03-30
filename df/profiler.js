
function get_information(link, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", link, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}


get_information("pattishih.github.io/index.html", function(text) {
    var div = document.createElement("div");
    div.innerHTML = text;
    // Do something with the div here, like inserting it into the page
});
