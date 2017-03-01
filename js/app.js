function myFunction() {
    var x = document.createElement("DIALOG");
    var t = document.createTextNode("My phone number: 206 331 0686");
    x.setAttribute("open", "open");
    x.appendChild(t);
    document.body.appendChild(x);
}