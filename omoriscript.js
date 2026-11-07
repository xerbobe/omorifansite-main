let button = document.getElementById("explorebtn");
let menu = document.getElementById("menu");

let show = false;

button.onclick = showMenu;

function showMenu(event) {
    event.stopPropagation();
    
    if (show === false) {
        button.style.transform = "translateY(-20px)";
        menu.style.display = "flex";
        button.style.transform = "translateY(-20px)"
        show = true;
    } 
    else {
        menu.style.display = "none";
        button.style.transform = "translateY(0px)";
        show = false;
    }

}
document.body.onclick = hideMenu;

function hideMenu() {
    menu.style.display = "none";
    button.style.transform = "translateY(0px)";
    show = false;
}