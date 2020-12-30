var clk=document.querySelector("#clk")

clk.addEventListener("click",()=>{
    clk.textContent="clicked"
    clk.style.color="red"
})

var dbl=document.querySelector("#dbl")
dbl.addEventListener("dblclick",()=>{
    dbl.textContent="doubleclicked"
    dbl.style.color="blue"
})

var ove=document.querySelector("#ove")
ove.addEventListener("mouseover",()=>{
    ove.textContent="mouse currently over"
    ove.style.color="yellow"
})
ove.addEventListener("mouseout",()=>{
    ove.textContent="mouse currently not over me"
    ove.style.color="pink"
})