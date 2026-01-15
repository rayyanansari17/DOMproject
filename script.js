var isStatus = document.querySelector("h5")
var btn = document.querySelector("#add")
// var removefrnd = document.querySelector("#remove")
var check = 0
var changeimg = document.querySelector("img")
var fname = document.querySelector("h1")

var body = document.querySelector("body")

// var img1 = document.createAttribute("url","/assets/bg.png")




btn.addEventListener("click",function(){
    if(check == 0){
    isStatus.innerHTML = "SUPERHERO"
    isStatus.style.color = "green"
    btn.style.backgroundColor = "red"

    check = 1
    btn.innerHTML = "Remove"
    fname.innerHTML = "Iron Man"
    changeimg.setAttribute("src","/assets/ironman.png")
    // body.style.backgroundColor = "red"
    body.style.backgroundImage = "url(./assets/bg.png)"

    }else{

        btn.innerHTML = "Transform"
        isStatus.innerHTML = "Person"
        isStatus.style.color = "red"
        btn.style.backgroundColor = "green"
        check = 0
        fname.innerHTML = "Rayyan Ansari"
        changeimg.setAttribute("src","/assets/image1.png")
        body.style.backgroundColor = "rgb(94, 2, 2)"
        body.style.backgroundImage = ""


    }
})






// removefrnd.addEventListener("click",function(){
//     isStatus.innerHTML = "Person"
//     isStatus.style = "red"
// })