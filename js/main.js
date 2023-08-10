function burguerMenu(){
    let icon = document.querySelector("#nav_icon");
    let menu = document.querySelector(".menu_nav");

    icon.addEventListener('click', function(){
        menu.classList.toggle('show');
    })
}

burguerMenu();