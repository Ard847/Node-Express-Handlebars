const submit = document.querySelector("#submit")
const burger = document.querySelector("#burger")
const toBeDevoured = document.querySelectorAll(".non")
const toBeDeleted = document.querySelectorAll(".dev")
const div1 = document.querySelector("#nonDevoured")
const ul1 = document.querySelector("#first")
const div2 = document.querySelector("#devoured")
const ul2 = document.querySelector("#second") 

 if(ul1.innerText == ""){
    div1.style.display = "none"
}

if(ul2.innerText == ""){
    div2.style.display = "none"
}


submit.addEventListener("click", () => {
    $.ajax({
        method:"post",
        url:"/",
        data: {
            "textArea" : burger.value
        }
    }).then(() => {
        location.reload()
    }).catch((e) => {console.log(e)})
})
for(let i = 0; i < toBeDevoured.length; i++){
    toBeDevoured[i].addEventListener("click", () =>{
        $.ajax({
            method:"put",
            url:"/" + toBeDevoured[i].dataset.id,
             data: {
                "burger_name" : toBeDevoured.innerHTML,
                "devoured" : 1,
            }, 
        }).then(() => {
            location.reload()
        }).catch((e) => {console.log(e)})
    })
}

for(let i = 0; i < toBeDeleted.length; i++){
    toBeDeleted[i].addEventListener("click", () =>{
        $.ajax({
            method:"delete",
            url:"/" + toBeDeleted[i].dataset.id,
        }).then(() => {
            location.reload()
        }).catch((e) => {console.log(e)})
    })

}