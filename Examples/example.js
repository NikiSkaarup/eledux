
// Example for Id
var redbox = $("#redbox");
redbox.onclick = function () {
        this.style.border = "2px solid #f00";
};

// Example for Class
var bluebox = $(".bluebox");
for (var i = 0; i < bluebox.length; i++) {
    bluebox[i].onclick = function () {
        this.style.border = "2px solid #00f";
    };
}

// Example for TagName
var div = $("div");
for (var i = 0; i < div.length; i++) {
    div[i].onclick = function () {
        this.style.border = "2px solid #00f";
    };
}

