if (!localStorage.getItem("cartCount")) {
  localStorage.setItem("cartCount", 0);
}
send_data()
function add_to_cart(name, image, p, i) {
  let count = parseInt(localStorage.getItem("cartCount")) || 0;
  if (count < 5) {
    localStorage.setItem(`food${count}`, name);
    localStorage.setItem(`foodimage${count}`, image);
    localStorage.setItem(`price${count}`, p);
    localStorage.setItem(`foodindex${count}`, 1);

    count += 1;
    localStorage.setItem("cartCount", count);
    let a = document.getElementById(`added${i}`)
    a.innerText = "Added";
    a.style.backgroundColor = "Green";
  }
  else {
    alert("Maximum cart limit is reached");

  }
}
let buttons = document.querySelectorAll(".added");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    btn.innerText = "Added";
    btn.style.backgroundColor = "green";
    btn.style.color = "white";
    btn.style.borderRadius = "5px";
  });
});

function send_data() {
  let menu = document.getElementById("card_boxer");
  result = ""
  let search = document.getElementById("search").value;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then((res) => res.json()).then((data) => {
    let item = data.meals
    console.log(item)
    for (let i = 0; i < item.length; i++) {
      let price = Math.floor(Math.random() * 101) + 150;
      let rating = parseFloat(Math.round(Math.random() * 5) + 5);
      let name = item[i].strMeal;
      let trimmed_name = name.substring(0, 30);

      result += ` <div class="foods_card">
        <div class="imagen">
            <img src="${item[i].strMealThumb}" alt="" srcset="">
        </div>
        <div class="contentn">
            <h3 style="color: red;">Name: ${trimmed_name}</h3>
            <h3>Price: <i class="fa-solid fa-indian-rupee-sign"></i> ${price}</h3>
            <h3>
                Rating: <i class="fa-solid fa-star" style="color: gold;"></i>
            ${rating}</h3>
   <div class="btn">         
<button 
  onclick="add_to_cart('${item[i].strMeal}', '${item[i].strMealThumb}', ${price}, '${i}'); setInterval(function() { cart_check(${i}); }, 10000);show_btn(${i})" 
  id="added${i}"
>
  Buy
</button>
   <button class="inc_dec" id="inc_dec${i}" onclick="increment(${i})">+</button>
   <button class="inc_dec" id="inc_dec${i}"onclick="decrement(${i})">-</button>
</div>
        </div>
    </div>`;

    }
    menu.innerHTML = result;


  }).catch((err) => menu.innerHTML = `${search} not found we will try to add this food item soon in the next updates`);

}
let cc = document.getElementById("shop");
cc.addEventListener("click", function () {
  location.replace("cart.html")



})
let account = document.getElementById('account');
account.addEventListener('click', function () {
  location.replace("contact.html");
})
function increment(val) {
  let value = parseInt(localStorage.getItem(`foodindex${val}`));
  value += 1;
  localStorage.setItem(`foodindex${val}`, value);
  localStorage.setItem(`foodindex${val}`, value);
  let a = document.getElementById(`added${val}`)
  a.innerText = "Added";
  a.style.backgroundColor = "Green";
}
function decrement(val) {
  let value = parseInt(localStorage.getItem(`foodindex${val}`));
  if (value == 0) {
    alert("The item is not selected in cart");
    

  }
  else {
    value -= 1;
  }
  localStorage.setItem(`foodindex${val}`, value);
  let a = document.getElementById(`added${val}`)
  a.innerText = "Buy";
  a.style.backgroundColor = "Red";
  if(value==0){

     localStorage.removeItem(`food${val}`);
    localStorage.removeItem(`foodimage${val}`);
    localStorage.removeItem(`price${val}`);
    
    localStorage.removeItem(`foodindex${val}`)
   
    let count=parseInt(localStorage.getItem('cartCount'));
    count=0;
    localStorage.setItem("cartCount", count);
let inc_dec=document.querySelectorAll(`#inc_dec${val}`);
  inc_dec.forEach(function(el) {
    el.style.display = "none";
  });

location.reload();
  }
}
function cart_check(val) {
  let foodname = localStorage.getItem(`food${val}`);
  if (foodname == null) {
    let a = document.getElementById(`added${val}`)
    a.innerText = "Buy";
    a.style.backgroundColor = "Red";
  }

}
//  <button onclick="add_to_cart('${item[i].strMeal}', '${item[i].strMealThumb}', ${price},'${i}')" id="added${i};setInterval(cart_check(${i})),10);">Buy</button>
function show_btn(val){
  let inc_dec=document.querySelectorAll(`#inc_dec${val}`);
  inc_dec.forEach(function(el) {
    el.style.display = "block";
  });

}
