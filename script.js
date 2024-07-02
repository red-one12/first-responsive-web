let menuIcon = document.querySelector('.menuIcon')
let crossIcon = document.querySelector('.crossIcon')
let menuBox = document.querySelector('.menuBox')

menuIcon.addEventListener("click", function(){
    menuIcon.style.display = "None"
    setTimeout(() => {
        crossIcon.style.display = "Block"
        menuBox.style.display = "Block"
    }, 100);
})

crossIcon.addEventListener("click", function(){
    crossIcon.style.display = "None"
    setTimeout(() => {
        menuIcon.style.display = "Block"
        menuBox.style.display = "None"
    }, 100);
})