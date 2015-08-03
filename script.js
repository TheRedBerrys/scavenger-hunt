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

function startup() {
    alert("Hi Rachel. It's me, Jason. We're going to play a fun game!");
    alert("For each letter in the alphabet, take a selfie with something that starts with that letter, and send it to me!");
    alert("But each item has to be at the correct location! Tap the big links to get directions to each location.");
    alert("Don't forget to send me those selfies so I can see your pretty face! I love you!");
}
