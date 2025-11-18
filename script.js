// footer mein learn more ke liye
let learn_more=document.querySelector(".learn_more")
let footer_p2=document.querySelector(".footer_5_p2")
learn_more.addEventListener("click",()=>{
    footer_p2.style.display="block"
    learn_more.style.display="none"
})


// input ke liye
let input=document.querySelector(".xyz")
let label=document.querySelector(".label")
input.addEventListener("focus",()=>{
    label.classList.add("active")
})
input.addEventListener("blur",()=>{
    if(input.value==""){
        label.classList.remove("active")
    }
})


// get started button ke liye
let get_started=document.querySelector(".get_started")
get_started.addEventListener("click",()=>{
    input.focus()
})
let get_started2=document.querySelector(".get_started2")
let input2=document.querySelector(".input_afg")
get_started2.addEventListener("click",()=>{
    input2.focus()
})



// movies scroll
let greater_than=document.querySelector(".greater_than")
let less_than=document.querySelector(".less_than")
let movie_box=document.querySelector(".movies")
greater_than.addEventListener("click",()=>{
    movie_box.scrollBy({ left: 1350, behavior: "smooth" });
})
less_than.addEventListener("click",()=>{
    movie_box.scrollBy({ left: -1350, behavior: "smooth" });
})


