// GLOBAL VARIABLES
var todayBtn = document.getElementById("today-Btn")
var thisWeekBtn = document.getElementById("this-week-Btn")
var thisMonthBtn = document.getElementById("this-month-Btn")
var stuffSearchBtn = document.getElementById("search-stuff")
var amazonKey = "4591EDE1B7CE49AEB4BDD4631503A1CC"
var excuseBtn = document.getElementById("excuse-btn")
var excuse = document.getElementById("excuse")



// FUNCTIONS

// Today Button clicked and current date stored with task

// This Week Button clicked and end-of-week date stored with task

// This Month Button clicked and end-of-month date stored with task


// Amazon search API
function searchStuff(e) {
    e.preventDefault()
    var inputStuff = document.getElementById("input-stuff")

    fetch("https://api.rainforestapi.com/request?api_key=" + amazonKey + "&type=search&amazon_domain=amazon.com&search_term=" + inputStuff.value)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            var getImageURL = data.search_results[0].image
            var getLinkURL = data.search_results[0].link
            var searchImage = document.getElementById("search-image")
            var clickImage = document.getElementById("click-image")
            searchImage.setAttribute("src", getImageURL)
            clickImage.setAttribute("href", getLinkURL)
        })

}

// Excuse API
excuseBtn.addEventListener('click', function() {
    fetch("https://excuser.herokuapp.com/v1/excuse")
.then((res) => res.json())
.then((data) => {
    console.log(data[0].excuse)
    excuse.textContent=data[0].excuse
})
})


stuffSearchBtn.addEventListener('click', searchStuff)
