console.log("A")
setTimeout(()=>{
    console.log("B");
},7)
setTimeout(()=>{
    console.log("D")
},0)
console.log("C");
function example(){
    console.log("My age is secret")
}
const example1=()=>{
    console.log("can anyone guess?")
}
const promise=new Promise((resolve,reject)=>{
    // const success=true;
    // if(success){
    //     console.log("Done")
    // }
    // else{
    //     console.log("Fail")
    // }
    setTimeout(example,0)
    setTimeout(example1,7)

})
promise.then(res=>{console.log(res)})
.catch(err=>console.log(err))
