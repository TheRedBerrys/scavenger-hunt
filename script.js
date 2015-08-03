function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}

function answer(id) {
    var textbox = document.getElementById(id);
    if (textbox.value.length == 0) {
        alert("Try again.");
        return false;
    }
    var value = textbox.value.substring(0,1).toLowerCase();
    if (value == id) {
        var nextid = "div" + nextChar(id);
        var div = document.getElementById(nextid);
        if (div !== null) {
            div.className = "show";
        }
    } else {
      alert("Try again.");
    }
}
