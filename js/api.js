const apiURL = "https://api.edamam.com/search?q="
const apiKey = "&app_key=d4ae9bdc6158817f5c96ed9329278132";
const apiId = "&app_id=74ac8e21"
const type = "&dishType=dessert"

APP_ID = "74ac8e21"
APP_KEY = "d4ae9bdc6158817f5c96ed9329278132"


const generateHtml = (label, imageLink, url)=>{
  const htmText =`
  <div class="card">
  <img class="recipie_img" src="${imageLink}"  alt="Denim Jeans">
  <h1 class="recipie_label style=""> ${label} </h1>
  <p><button onclick="location.href='${url}'" >Click here for recipie</button></p>
  </div>`



const element = document.createElement('div')
element.innerHTML=htmText
return element
}

const fetchRecipes = async (search, exclude) => {

  const callback = (response)=>{
    const recipiesDiv = document.getElementById('recipie_cont')
    recipiesDiv.innerHTML=''
    console.log(response)
    for(recipe of response.hits){
      const recipeField = recipe.recipe
      recipiesDiv.appendChild(generateHtml(recipeField.label, recipeField.image, recipeField.url))
    }
  }

  if(search.length!=0){
    search=`+${search.split(" ").join("+")}`
  }
  if(exclude.length!=0){
    exclude=`&excluded=${exclude.split(" ").join("+")}`
  }
  
  const endpoint = `${apiURL}dessert${search}${type}${apiId}${apiKey}${exclude}&to=10`
  fetch(endpoint).then(response=>response.json()).then(callback)
};

const sendFormData = async ()=>{
    let searchText = document.getElementById('searchBar').value

    console.log(searchText.length)

    fetchRecipes(searchText, "")
}







