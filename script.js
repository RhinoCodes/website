window.addEventListener(
    "message",
    (event) => {
        console.log("HELLO?")
        console.log(event.data)
        document.getElementById("sudo16").height = event.data + 20;
    }, 
false);

builtwith = document.getElementsByClassName("builtwith")

for (item  in builtwith) {
    item = builtwith[item];
    console.log(item)
    size = (360/item.textContent.length)/7.6;
    size = size > 1.35 ? 1.35 :  size;
    item.style.fontSize = size + 'em'
}