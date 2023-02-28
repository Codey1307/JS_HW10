
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

