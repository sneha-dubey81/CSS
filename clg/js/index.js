// var a=                  //null

// var a 
// console.log(a);            //undefined

// var a=5
// var a=10
// console.log(a);

// let b=5
// b=6
// console.log(b);

// console.log(5==5);               //compare
// console.log([]==[]);             //false
// console.log(5==='5');            //checks datatype 

// let a=100
// let to=a==100
// console.log(to)

// const c=2
// console.log(c);   //cant be changed or reassigned

// console.log(s=true)  //assignment

// let userName="Sneha"
// let lastName="dubey"
// console.log(`${userName} ${lastName}`)

// //ternary operator
// let a=false 
// a?console.log("hiiii"):console.log("byeee");

// if(a=true){
//     console.log("hello");
// }
// else{
//     console.log("hiii");
// }

// sum()
// let sum=()=>{
//     console.log("hii");
// }
// let h1=  document.getElementById("one")
// console.log(h1);

// let h1= document.getElementsByClassName("two")
// // h1[0].style.color='red'

// for(let i of h1){
//     i.style.color='red'
// }

// let h1= document.querySelector('#one')
// h1.innerText="hii"

// let a= document.querySelector("a")
// a.setAttribute("href","https://flipkart.com")

// let arr=[
//    "https://images.unsplash.com/photo-1755397271926-3681d11c16e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
//    "https://images.unsplash.com/photo-1755870190504-fd73e944bcc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
//    "https://images.unsplash.com/photo-1756752358819-23f00a84ee7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
//    "https://plus.unsplash.com/premium_photo-1757100707908-80af72fdcf10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D"
// ];

// const imageEl= document.querySelector('img')
// let num=0;
// setInterval(function(){
//     imageEl.setAttribute('src',arr[num]);
//     num=(num+1)%arr.length;
// },2000)

////first method
// let body= document.querySelector("body")
// function hello(){
//     body.style.backgroundColor="red"
// }

// let btn= document.querySelector("button")
// let body= document.querySelector("body")

// ////second method
// btn.addEventListener("click",function(){
//     body.style.backgroundColor="red"
// })

// ////third method
// btn.onclick=function(){
//     console.log("hello");
//     body.style.backgroundColor="red"
// }

// let inp= document.querySelector("input")
// let h2= document.querySelector("h2")
// inp.addEventListener("input",(e)=>{
//     //console.log("hello");
//     //console.log(e.target.value);
//     h2.innerText=e.target.value

// })

//form
let formEl= document.querySelector("form")
 formEl.addEventListener("submit",(e)=>{
    e.preventDefault()
    // console.log(formEl[0].value)
    // console.log(formEl[1].value)
    // console.log(formEl[2].value)
    let data={
        name:formEl[0].value,
        email:formEl[1].value,
        pass:formEl[2].value
    }
    console.log(data);
    localStorage.setItem("formData",JSON.stringify(data))    //to store all the form data
 })

//  formEl.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     let data={
//         name:formEl[0],
//         email:formEl[1],
//         pass:formEl[2]
//     }
//     console.log(data);
//     localStorage.removeItem("formData",JSON.stringify(data))  //to remove
//  })
 
let form2= document.querySelector("#form2")
form2.addEventListener("submit",(e)=>{
    e.preventDefault()
    let saveData= localStorage.getItem("formData")
    let dataObj= JSON.parse(saveData)
    let loginObj={
        email:form2[0].value,
        pass:form2[1].value
    }
    if(dataObj.email==loginObj.email && dataObj.pass==loginObj.pass){
        prompt("login doneee")
    }else{
        prompt("errrrrr")
    }
})