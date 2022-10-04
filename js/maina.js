let btn = document.querySelector(".navbar-toggler")
let linkes = document.querySelector(".navbar-collapse")

btn.onclick = function(e) {

        // stop propragetion
        e.stopPropagation()

        this.classList.toggle("collapsed")
        linkes.classList.toggle("show")
    } //

// click anywhere outside menu and toggle button
document.addEventListener("click", (e) => {

        if (e.target !== btn && e.target !== linkes) {

            //check if menu open
            if (linkes.classList.contains("show")) {

                btn.classList.toggle("collapsed")
                linkes.classList.toggle("show")
            }
        }
    })
    // stop proparation on menu
linkes.onclick = function(e) {

    e.stopPropagation()
}

// Stat navbar-nav remove class active

let NavBar = document.querySelectorAll(".navbar-nav a")

NavBar.forEach((a) => {
  
    a.addEventListener("click", removeActive)
})

// remover class active
function removeActive() {
    NavBar.forEach((a) => {
        a.classList.remove("active")
        this.classList.add("active")
    })
}
// End navbar-nav remove class active

// Stat navbar-nav for scrool
function secrolTo(elements) {

    elements.forEach(ele => {

        ele.addEventListener("click", (e) => {
            e.preventDefault();
           

            document.querySelector(e.target.dataset.section).scrollIntoView({

                behavior: 'smooth'
                
            })
            
        })
        
    })
    
   
}
secrolTo(NavBar)

// End navbar-nav for scrool




// our work creat our work filters
let LinkesLi = document.querySelectorAll(".list-unstyled li")
let imgs = document.querySelectorAll(".our-work img") 
let Boxing = document.querySelectorAll(".our-work .box") 


LinkesLi.forEach((li) => {

    li.addEventListener("click", removerActive);
    li.addEventListener("click", manageImgs);
    li.addEventListener("click", removepadd);



})
// Remove paddind
function removepadd() {
    Boxing.forEach((box) => {
        box.style.padding = 0
    })
}/////// end Remove paddind



// remover class active
function removerActive() {
    LinkesLi.forEach((li) => {
        li.classList.remove("active")
        this.classList.add("active")
    })
}

// manage Imgs
function manageImgs() {
    imgs.forEach((img) => {
        img.style.display = "none"
    })
    document.querySelectorAll(this.dataset.cat).forEach((el) => {

        el.style.display = "block"
        
    })
}/////// end our work filter
