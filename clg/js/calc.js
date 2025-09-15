let inp= document.querySelector("input")
let button= document.querySelectorAll('button')

for(let btn of button){
    let txt= btn.innerText
    btn.addEventListener("click",()=>{
        if(txt=='C'){
            inp.value=" "
        }else if(txt=='='){
            inp.value= eval(inp.value)
        }else{
            inp.value= inp.value+txt
        }
    })
}