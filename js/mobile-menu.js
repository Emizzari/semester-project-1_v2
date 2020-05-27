function mobileMenuToggle(){
    const menu = document.querySelector(".nav__block--menu");

    const hamburgerIcon = document.querySelector(".nav__block--hamburger-icon");
    const line1 = document.querySelector(".line-1");
    const line2 = document.querySelector(".line-2");
    const line3 = document.querySelector(".line-3");
    

    if (menu.style.right === "0px"){
        menu.style.right = "-300px"


        line1.style.transform = "rotate(0deg)"
        line1.style.position = "relative"
        

        line2.style.opacity = "1"

        line3.style.transform = "rotate(0deg)"
        line3.style.position = "relative"

    } else {
        menu.style.right = "0px"


        line1.style.transform = "rotate(45deg)"
        line1.style.position = "absolute"
        line1.style.top = "0px"

        line2.style.opacity = "0"

        line3.style.transform = "rotate(-45deg)"
        line3.style.position = "absolute"
        line3.style.top = "0px"
    }
}