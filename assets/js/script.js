// GLOBAL VARIABLES
var todayBtn = document.getElementById("today-Btn")
var thisWeekBtn = document.getElementById("this-week-Btn")
var thisMonthBtn = document.getElementById("this-month-Btn")
var stuffSearchBtn = document.getElementById("search-stuff")
var amazonKey = "4591EDE1B7CE49AEB4BDD4631503A1CC"
var mapQuestKey = "OcKnsyCp8AyFKJFn7FCK6vjD4eihKGIv"
var locationSearchBtn = document.getElementById("search-location")


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

// MapQuest search API
function searchLocation(e) {
    e.preventDefault()
    var inputLocation = document.getElementById("location")

    fetch("http://www.mapquestapi.com/search/v2/radius?api_key=" + mapQuestKey)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    })
}


stuffSearchBtn.addEventListener('click', searchStuff)
locationSearchBtn.addEventListener('click', searchLocation)