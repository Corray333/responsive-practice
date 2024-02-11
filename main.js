let bg = document.querySelector(".background")
let logo = document.querySelector("#logo")
window.addEventListener('scroll', ()=>{
    let v = window.scrollY

    bg.style.marginTop = v * 1.5 + 'px'
    logo.style.marginTop = v * 1.5 + 'px'
})