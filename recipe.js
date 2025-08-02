let main = document.getElementById("main");
send_data()
function send_data() {
  let food_name = document.getElementById("search").value;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food_name}`)
    .then((response) => response.json())
    .then((data) => {
      let result = "";
      // let meal1 = data.meals[0];
      // let meal2 = data.meals[1];
      // let meal3 = data.meals[2];
      // let name = [meal1.strMeal, meal2.strMeal, meal3.strMeal];
      // let instruction = [
      //   meal1.strInstructions,
      //   meal2.strInstructions,
      //   meal3.strInstructions,
      // ];
      // let image = [meal1.strMealThumb, meal2.strMealThumb, meal3.strMealThumb];
      for (let i = 0; i < data.meals.length; i++) {
        result += `<div class="recipes">
        <div class="food_image">
            <img src="${data.meals[i].strMealThumb}" alt="" srcset="">
        </div>
        <div class="food_content">
            <h1>Name: ${data.meals[i].strMeal}</h1>
            <h3 style="color:black;">Recipe:</h3>
            <div class="content_new">
               ${data.meals[i].strInstructions}</div>
        </div>
    </div>`;
      }
      main.innerHTML = result;
    })
    .catch(
      (err) =>
        (main.innerHTML = `<div class="recipes">
        <span><h1>Recipe not found</h1> <br>
        <h3>The recipe you where trying to find not found in our database </h3>
        
        </span>
        
        
    </div>`)
    );
}
let cc = document.getElementById("shop");
cc.addEventListener("click", function () {
    location.replace("cart.html")
   
       

})
let account = document.getElementById('account');
account.addEventListener('click',function(){
    location.replace("contact.html");
})
