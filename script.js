function about(event){
    event.preventDefault()

    document.querySelector(".About").scrollIntoView({behaviour : "smooth"})
}

function amazon(){

    
    let link = document.querySelector("#link2") 
    link.style.display = 'block'
    
}
function amazon1(){
    let link = document.querySelector("#link2") 

    link.style.display = 'none'
}

function idCard(){
    let link_1 = document.querySelector("#link3")
    link_1.style.display = 'block'


}
function idCard1(){
    let link_1 = document.querySelector("#link3")
    link_1.style.display = 'none'

    
}

function API(){
    let link_1 = document.querySelector("#link4")
    link_1.style.display = 'block'


}
function API1(){
    let link_1 = document.querySelector("#link4")
    link_1.style.display = 'none'

    
}
function Wheather(){
    let link_1 = document.querySelector("#link5")
    link_1.style.display = 'block'


}
function Wheather1(){
    let link_1 = document.querySelector("#link5")
    link_1.style.display = 'none'

    
}

function hello(event){
    event.preventDefault()

    document.querySelector(".Portfolio").scrollIntoView({behaviour : "smooth"})
}

let array = ["Linkedin", "Facebook" , "Instagram"]
let index = 0

setInterval(() => {
    index = (index + 1) % array.length
    let text = document.querySelector(".text")
    text.innerHTML = array[index]
    
}, 3000);


function hi(event){
    event.preventDefault()

    document.querySelector(".Contact").scrollIntoView({behaviour : "smooth"})
}
