export default function myOwnScript() {
    let dayOrNight = 0;
    let theme = document.querySelector(".theme");
    theme.addEventListener('click', () => {
        if(dayOrNight == 0) {
            //Тут тёмная тема
            document.querySelector("#logo_site").src = "img/Group 45.svg";
            document.querySelector("#menu_header").src = "img/iconamoon_menu-burger-horizontal-light (1).svg";
            document.querySelector(".block_menu").style.background = "url('img/Group 46.png') no-repeat";
            document.querySelector(".block_menu").style.backgroundSize = "cover";
            document.querySelector(".theme img").src = "img/Vector (2).svg";
            document.querySelector(".schedule").style.background = "url('img/Group 47.svg') no-repeat";
            document.querySelector(".schedule").style.backgroundSize = "cover";
            $a = document.querySelectorAll(".main_menu a")
            for($i = 0; $i < $a.length; $i++){
                $a[$i].style.color  = "#fff";
            }
            document.body.style.backgroundColor = "#202020";
            
            dayOrNight = 1;
        } else {
            //Тут светлая тема
            document.querySelector("#logo_site").src = "img/Group 1.svg";
            document.querySelector("#menu_header").src = "img/iconamoon_menu-burger-horizontal-light.svg";
            document.querySelector(".block_menu").style.background = "url('img/image 1.png') no-repeat";
            document.querySelector(".block_menu").style.backgroundSize = "cover";
            document.querySelector(".theme img").src = "img/Mask group.svg";
            document.querySelector(".schedule").style.background = "url('img/Group 24 (2).png') no-repeat";
            document.querySelector(".schedule").style.backgroundSize = "cover";
            $a = document.querySelectorAll(".main_menu a")
            for($i = 0; $i < $a.length; $i++){
                $a[$i].style.color  = "black";
            }
            document.body.style.backgroundColor = "#E9E5FF";
            dayOrNight = 0;
        }
    })
    
    let blackMenu = document.querySelector(".black_menu");
    let blockMenu = document.querySelector(".block_menu");
    blackMenu.addEventListener("mouseover", () => {
        document.body.style.cursor = "url('img/Group\ 27\ \(4\).png'), auto";
    })
    blackMenu.addEventListener("mousedown", () => {
        blackMenu.style.animationName = "closeMenuBlack";
        blockMenu.style.animationName = "closeMenu";
        document.body.style.cursor = "auto";
    
    })
    blackMenu.addEventListener("mouseout", () => {
        document.body.style.cursor = "auto";
    })
    
    
    
    let menu = document.querySelector(".menu");
    menu.addEventListener('click', () => {
        blackMenu.style.animationName = "openMenuBlack";
        blockMenu.style.animationName = "openMenu";
        blockMenu.style.display = "block";
        blackMenu.style.display = "block";
    })
    
    
    let close = document.querySelector(".close");
    close.addEventListener('click', () => {
        blackMenu.style.animationName = "closeMenuBlack";
        blockMenu.style.animationName = "closeMenu";
        document.body.style.cursor = "auto";
    })
}
