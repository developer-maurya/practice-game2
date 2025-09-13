let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turn0 = true;
// let arr =["apple", "banana", "litchi"]

// let arr2 = [["apple", "litchi"], ["patato", "mushuroom"],["pants","shirt"]]

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("click");
        
    })
   
})


document.addEventListener("DOMContentLoaded", () => {
  const btn1 = document.querySelector("#btn1");
  const btn2 = document.querySelector("#btn2");

  btn1.addEventListener("click", () => {
    console.log("hello");
    alert("hello");
  });

  btn2.addEventListener("dblclick", () => {
    console.log("hello2");
    alert("hello");
  });
});







