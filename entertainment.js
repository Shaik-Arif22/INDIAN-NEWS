
console.log("This is my index js file");

// Initialize the news api parameters
let source = 'the-times-of-india';
let apiKey = 'a1aabaafad7d4cf9b2032116a2b9c045'

// Grab the news container
let newsaccordion = document.getElementById('newsaccordion');
let slideshow = document.getElementById('slideshow');
// Create an ajax get request
const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://free-news.p.rapidapi.com/v1/search?q=entertainment%20news&lang=en`);
    xhr.setRequestHeader("X-RapidAPI-Key", "f20b085adfmsh6d413acd79aff5cp1ddcb9jsn4686aab57a79");
    xhr.setRequestHeader("X-RapidAPI-Host", "free-news.p.rapidapi.com");


// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `            <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
              <img src="${element["media"]}" onerror="this.onerror=null; this.src='imagenotfound.png'" width="28.5" height="auto padding: 10px; " class="card-img-top" alt="...">
              <h5 class="card-title">${element["title"]}
              <span class="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger">
              ${element["twitter_account"]}
              <span class="visually-hidden">unread messages</span>
            </span> </h5>
              <p class="card-text" style="overflow: hidden;
              display: -webkit-box;
              -webkit-line-clamp: 4;
              -webkit-box-orient: vertical;">${element["summary"]}
              </p>
              <p class="card-text" >${element["author"]} on ${element["published_date"]}
              </p>
                <a href="${element["link"]}" target="_blank" class="btn btn-primary"><b>Read more here</b></a>
              </div>
            </div>
          </div>
         
`;
            newsHtml += news;
        });
        newsaccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()

//grabbing the search
document.getElementById("mybutton").onclick = function (event){
    event.preventDefault()
    var search=document.getElementById("userInput").value;
    count= 1;
    console.log(search)
        // Create an ajax get request
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://newsapi.org/v2/everything?q=${search}&sortBy=popularity&apiKey=a1aabaafad7d4cf9b2032116a2b9c045`, true);
    
    // What to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            console.log(articles);
            let newsHtml = "";
            articles.forEach(function(element, index) {
            // console.log(element, index)
                let news = `<div class="accordion-item">
                <h2 class="accordion-header" id="heading${index}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                     data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                    ${element["title"]}
                    </button>
                </h2>
                <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}"
                    data-bs-parent="#newsaccordion">
                    <div class="accordion-body">
                    <img src=" ${element["urlToImage"]}" width="auto" height="200px">
                   ${element["content"]} 
                    <button style="border-radius:10px;">  
                               <a href="${element["url"]}" target="_blank"><b>Read more here</b></a> 
                               </button>
                 </div>
              </div>
         </div>`;
                newsHtml += news;
          });
            newsaccordion.innerHTML = newsHtml;
    
              }
        else {
            console.log("Some error occured")
        }
    }
    
    xhr.send()
    
    }    
