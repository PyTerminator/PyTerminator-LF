let switchery = document.querySelector(".switchery")
switchery.addEventListener("click", function(e){
    if(switchery.getAttribute("data-val")=="0"){
        switchery.setAttribute("data-val", "1")
        switchery.querySelector("span").style.left = "1.4rem"

        document.documentElement.style.setProperty("--bg","#fff")
        document.documentElement.style.setProperty("--white","#1f1f1f")


    } else {
        switchery.setAttribute("data-val", "0")
        switchery.querySelector("span").style.left = ".2rem"
        document.documentElement.style.setProperty("--bg","#1f1f1f")
        document.documentElement.style.setProperty("--white","#fff")

    }
})


let eye_icon = document.querySelector("input[name=password]+i")
eye_icon.addEventListener("click", function(e){
    if(eye_icon.getAttribute("data-val")=="0"){
        eye_icon.setAttribute("data-val","1")
        eye_icon.previousElementSibling.setAttribute("type","text")
        eye_icon.className = "fa-solid fa-eye-slash"
    } else {
        eye_icon.setAttribute("data-val","0")
        eye_icon.className = "fa-solid fa-eye"
        eye_icon.previousElementSibling.setAttribute("type","password")
    }
})