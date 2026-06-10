const first=1;
const second=2;
const str='priya'
console.log(first);
console.log(str);
const fruits=["apple","pine","fig","grape"]
console.log(fruits[0])
fruits[1]="orange"
console.log(fruits[1])
const arr=[1,"name",true,3.5]
console.log(arr)
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
const third=document.getElementById("ptag")
third.innerHTML="This is my third class"
function newFunction(){
    console.log("I am a student")
}

const input=document.getElementById("eventListener")
const output=document.getElementById("ptag")
input.addEventListener("input", ()=>{
    output.textContent=input.value
})
const newvar=document.createElement("h1");
newvar.textContent="New Paragraph";
document.body.appendChild(newvar);
newvar.remove()