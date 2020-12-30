var tags=document.getElementsByTagName("h1")
for(tg of tags){
    tg.style.color="red"
}

var lis=document.getElementsByTagName("li")
for(li of lis){
    li.style.color="lightgreen"
}

var hone=document.getElementById("one")
hone.style.color="blue"

var cls=document.getElementsByClassName("cls")
for(tg of cls){
    tg.style.color="pink"
}

var hd=document.querySelector("#uni")
hd.style.color="yellow"

var liu=document.querySelectorAll(".mul")
liu.forEach(li=>li.style.color="orange")

var dom=document.querySelector("#dom")
dom.innerHTML="<em>Document Object Method</em>"

alert(hd.textContent)