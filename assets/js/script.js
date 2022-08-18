// GLOBAL VARIABLES
var todayBtn = document.getElementById("today-Btn")
var thisWeekBtn = document.getElementById("this-week-Btn")
var thisMonthBtn = document.getElementById("this-month-Btn")
var stuffSearchBtn = document.getElementById("search-stuff")
var amazonKey = "4591EDE1B7CE49AEB4BDD4631503A1CC"
var excuseBtn = document.getElementById("excuse-btn")
var excuse = document.getElementById("excuse")


// FUNCTIONS
const inputVal = document.getElementsByClassName('inputVal') [0];
const addTaskButton = document.getElementsByClassName('submit-task') [0];
const inputDate = document.getElementsByClassName('inputDate') [0];
const inputTask = document.querySelector('#input-task');
const clearTask = document.getElementById("clearBtn");


$(".submit-task").click(function() {

    var value = $(".inputVal").val() + " due " + $(".inputDate").val();
    while ($(".inputVal").val() !='' && $(".inputDate").val() !='') {
    $('.display-box').append(value);
    $(".inputVal").val('');
    $(".inputDate").val('');
    };

    //localStorage.setItem('Task', JSON.stringify(value));
})

clearTask.addEventListener('click', function() {
    ('.display-box').remove(value);
})

//window.addEventListener('load', function() {
    //value = JSON.parse(localStorage.getItem('Task'));
    //$('.display-box').append(value);
//})

addTaskButton.addEventListener('click' , () => {
    
//inputTask.addEventListener('input', e => {
    //e.preventDefault();

let localItems = JSON.parse(localStorage.getItem('localItem'))
if (localItems === null) {
    taskList = []

} else{
    taskList = localItems;
}
taskList.push(inputVal.value)
taskList.push(inputDate.value)
localStorage.setItem('localItem', JSON.stringify(taskList))


})
inputDate.addEventListener('input', () => {
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    if(localItems === null) {
        taskList = []
    
    } else{
        taskList = localItems;
    }
    taskList.push(inputDate.value)
    localStorage.setItem('localItem', JSON.stringify(taskList))
})

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
//localStorage.clear();
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
