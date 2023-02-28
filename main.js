// let AkaliPage = document.getElementById("akaliTab")
// let AniviaPage = document.getElementById("aniviaTab")
// let AniviaTitle = document.getElementById("aniviaTitle")
// let DravenPage = document.getElementById("dravenTab")
// let GarenPage = document.getElementById("garenTab")
// let KatarinaPage = document.getElementById("katarinaTab")
// let tabsContent = document.querySelector(".tabs-content")

// AniviaTitle.addEventListener("click", () => {
//     tabsContent.innerHTML = AniviaPage.innerHTML
// })


// let elements = document.querySelectorAll(".tabs-title")
// let active = document.querySelector(".active")
// for(let li of elements){
// li.addEventListener("click", () => {
//     li.classList.add("active");
// })
// }

function openTab(evt, tabName) {
let i, tabTitle, tabContent

tabContent = document.getElementsByClassName("tabs-content-item")
for(i = 0; i < tabContent.length; i++){
tabContent[i].classList.remove("active");
}

tabTitle = document.getElementsByClassName("tabs-title")
for(i = 0; i < tabTitle.length; i++){
tabTitle[i].classList.remove("active");
}

document.getElementById(tabName).classList.add("active")
evt.currentTarget.classList.add("active")


}

