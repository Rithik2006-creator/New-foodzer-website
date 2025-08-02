let extender = document.getElementById("btn_extend");
let btn = document.getElementById("btn_cred");
let ul = document.getElementById("ul");
let count=0;
let increase = document.getElementById("increase");
extender.addEventListener('click',function(){
    if(count==0){
increase.style.height="16vh";
ul.style.visibility="visible";
btn.style.visibility="visible";
count+=1
    }
    else{
        increase.style.height="0vh";
        ul.style.visibility="hidden";
btn.style.visibility="hidden";
count-=1
    }
})
let bill = document.getElementById("bill");
bill.addEventListener('click',function(){
    location.replace('cart.html')
})
let phone = document.getElementById("phone");
phone.addEventListener('click',function(){
    location.replace('contact.html')
})