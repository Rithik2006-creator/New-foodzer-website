let cart = document.getElementById("box2");
let amount = 0;
let cartCount = parseInt(localStorage.getItem("cartCount")) || 0;
let result = "";
let index = 1001;
let refresh=setInterval(function () {
    location.reload();
}, 5000)
for (let i = 0; i < cartCount; i++) {
    let foodname = localStorage.getItem(`food${i}`);
    let photo = localStorage.getItem(`foodimage${i}`);
    let price = localStorage.getItem(`price${i}`);
    let item=localStorage.getItem(`foodindex${i}`);

    if (!foodname || !price) {
        continue;
    }
    price=parseInt(price*item);

    amount += price;

    // result += `
    // <div class="items" id="ct${index}">
    //   <img src="${photo}">
    //   <div class="name">${foodname}</div>
    //   <div class="price">Price: ${price}</div>
    //   <div class="quantity">Qt: 1.0 x 1</div>
    //   <div class="close">
    //     <button type="button" class="btn-close" aria-label="Close"
    //       onclick="del(document.getElementById('ct${index}'),'${i}','${price}')"></button>
    //   </div>
    // </div>`;
result+=` <div class="item_box" id="ct${index}">
        <div class="item_image">
          <img src="${photo}" alt="" srcset="">
        </div>
        <div class="item_content">
          <h6>${foodname}</h6>
          <h6>Qt: 1.0 x ${item}</h6>
          <h6>Price: ${price}</h6>
        </div>
        <div class="close">
        <button type="button" class="btn-close" aria-label="Close"
          onclick="del(document.getElementById('ct${index}'),'${i}','${price}');setInterval(function() {
  check_value(document.getElementById('ct${index}'), '${price}',${i})
}, 5000);"></button>
      </div>
      </div>`
    index++;

}
function check_value(data,money,i) {
    console.log(money);
    if(localStorage.getItem(`price${i}`)==null){
 data.remove();
    localStorage.removeItem(`food${i}`);
    localStorage.removeItem(`foodimage${i}`);
    localStorage.removeItem(`price${i}`);
    localStorage.removeItem(`foodindex${i}`)
   let amount = parseInt(localStorage.getItem("amount")) || 0;
amount -= price;
localStorage.setItem("amount", amount);
    count=parseInt(localStorage.getItem('cartCount'));
    count=count-1
    localStorage.setItem('cartCount',count);
    }
}
cart.innerHTML = result;
localStorage.setItem("amount", amount);

function del(data, i, price) {
    data.remove();
    localStorage.removeItem(`food${i}`);
    localStorage.removeItem(`foodimage${i}`);
    localStorage.removeItem(`price${i}`);
    localStorage.removeItem(`foodindex${i}`)
   let amount = parseInt(localStorage.getItem("amount")) || 0;
amount -= price;
localStorage.setItem("amount", amount);
    count=parseInt(localStorage.getItem('cartCount'));
    count=count-1
    localStorage.setItem('cartCount',count);

}
function order_sucess() {
    if(parseInt(localStorage.getItem("amount")) == 0){
        alert("To place order you have to buy something");
    }
    else{
    window.location.replace('https://foodzerrithikfoods.free.nf/payment.html');
    clearInterval(refresh)
    
}
}


document.getElementById("total_price").value = `Total price = ${localStorage.getItem("amount")}`

// let acc = document.getElementById("account");
// acc.addEventListener("click", function () {
//     location.replace("account.html")
   
       

// })
