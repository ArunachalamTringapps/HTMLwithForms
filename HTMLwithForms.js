const htmllayout=document.getElementsByClassName("htmllayout")[0]
const alertdiv=document.createElement("div")
alertdiv.className="alertbox";
alertdiv.id="alertbox";
htmllayout.insertBefore(alertdiv,htmllayout.children[1])



let alertbox=document.getElementById("alertbox")
const submitbtn=document.getElementById("submitbtn")
const resetbtn=document.getElementById("resetbtn")


const reset=()=>{
    document.getElementById("inputname").value=''
    document.getElementById("inputage").value=''
    document.getElementById("inputdate").value=''
    document.getElementById("inputaddress").value=''
    document.getElementById("inputphoneno").value=''
}

const alertTime=()=>{
    setTimeout(()=>alertbox.style.display="none",3000);
}



const alertboxclose=alertbox.style.display="none"
const inputname=document.getElementById("inputname")
const inputage=document.getElementById("inputage")
const inputdate=document.getElementById("inputdate")
const inputaddress=document.getElementById("inputaddress")
const inputphoneno=document.getElementById("inputphoneno")


submitbtn.addEventListener("click",()=>{    

  
    alertbox.style.display="flex";
    if(inputname.value==""||inputage.value==""||inputdate.value==""||inputaddress.value==""||inputphoneno.value==""){
        alertbox.innerText="❌Please fill all the fields❌"
        
    }
    else if(!isNaN(inputname.value)){
        alertbox.innerText="❌Please enter the name correctly❌"
        
    }
    else if(inputage.value<18 || inputage.value>58){
        alertbox.innerText=`${inputname.value} the required age is 18-58👀`

    }
    else if(isNaN(inputphoneno.value)){
        alertbox.innerText=`❌${inputname.value} please enter the Number❌`
    }
    else if(inputphoneno.value.toString().length!=10){
        console.log(inputphoneno.value.toString().length);
        alertbox.innerText=`❌${inputname.value} it's a Incorrect phone number❌`
    }
    else{
        alertbox.innerText="✅Successfull Submited";
        reset();
    }
    alertTime();
})


resetbtn.addEventListener("click",reset)





