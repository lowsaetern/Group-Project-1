// GLOBAL VARIABLES
var todayBtn = document.getElementById("today-Btn")
var thisWeekBtn = document.getElementById("this-week-Btn")
var thisMonthBtn = document.getElementById("this-month-Btn")
var stuffSearchBtn = document.getElementById("search-stuff")
var myKey = "4591EDE1B7CE49AEB4BDD4631503A1CC"
var yelpKey = "dUJs6RmTFhXg_LpfFZdZ8g2ur2grHni6hJA0ucA8avz_358XpiAqaQ89lIbJ0eVRPmnalNz69RTk6pNYE5kgczF_8wEPlaUoqqCD0cZS_90GGXRGzHxCvrGg-s31YnYx"
var myYelpClientID = "NYv4yWFnhs_jumHwLKxoIw"

// FUNCTIONS

// TASK INPUT: wrap in one big mega-function for
function taskInput {
    // Text Input for "Need Something Done?"
    var inputTask = document.getElementById("input-task")
    
        //date selection - either today/this week/this month button OR specific date selection
        function selectDate {

        // Today Button clicked and current date stored with task
            if(
                var todayClick = document.getElementById("today-Btn")
            )
        // This Week Button clicked and end-of-week date stored with task
            if else(
                var thisWeekClick = document.getElementById("this-week-Btn")
            )
        // This Month Button clicked and end-of-month date stored with task
            if else(
                var thisMonthClick = document.getElementById("this-month-button")
            )
        // specific date selection
            else
                var specificDate
        }
    //save inputted task and selected date to local storage - SUBMIT BUTTON
    window.localStorage.setItem(inputTask, )
}
//



// Amazon search API
function searchStuff(e) {
    e.preventDefault()
    var inputStuff = document.getElementById("input-stuff")

    fetch("https://api.rainforestapi.com/request?api_key=" + myKey + "&type=search&amazon_domain=amazon.com&search_term=" + inputStuff.value)
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

// Amazon search event listener
stuffSearchBtn.addEventListener('click', searchStuff)

// Date button event listeners
todayClick.addEventListener('click')
thisWeekClick.addEventListener('click')
thisMonthClick.addEventListener('click')
