
let mybutton= document.getElementById("batan");
mybutton.addEventListener("click",function(){ 
    let myamount = document.getElementById("billPay").value;
    let mypeople = document.getElementById("people").value;
if(isNaN(myamount) ||document.getElementById("billPay").value=="" ){
    alert("Valid amount")
}else if(isNaN(mypeople) ||document.getElementById("people").value==""){
  alert("Valid number of peoples")
}
else{
    let myamount = document.getElementById("billPay").value;
  myamount = parseInt(myamount);
    let myservice = document.getElementById("serviceRate").value;
  myservice = parseInt(myservice);
  let mypeople = document.getElementById("people").value;
  mypeople = parseInt(mypeople)
  let tip = ((myamount*myservice)/100)/mypeople;
  let myTipAmount = document.getElementById("tipAmount");
  myTipAmount.innerText= tip;
  let myOutPut = document.getElementById("result");
  myOutPut.style.display = "flex";
  document.getElementById("billPay").value = ""
  document.getElementById("people").value = ""
}
})

