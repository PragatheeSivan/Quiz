let cityHyderabadEl = document.getElementById("cityHyderabad");
let cityChennaiEl = document.getElementById("cityChennai");
let cityDelhiEl = document.getElementById("cityDelhi");
let cityMumbaiEl = document.getElementById("cityMumbai");

let questionsFormEl = document.getElementById("questionsForm");

let subBtnEl = document.getElementById("submitBtn");
let resultMsgEl = document.getElementById("resultMsg");

let selectItme = "";

cityHyderabadEl.addEventListener("change", function() {
    selectItme = "Hyderabad";
    resultMsgEl.textContent = ""
});
cityChennaiEl.addEventListener("change", function() {
    selectItme = "Chennai";
    resultMsgEl.textContent = ""
});
cityDelhiEl.addEventListener("change", function() {
    selectItme = "Delhi";
    resultMsgEl.textContent = ""
});
cityMumbaiEl.addEventListener("change", function() {
    selectItme = "Mumbai";
    resultMsgEl.textContent = ""
});

questionsFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    if (selectItme === "") {
        resultMsgEl.textContent = "Please select the Answer!"
    } else if (selectItme === "Delhi") {
        resultMsgEl.textContent = "Correct Answer"
        resultMsgEl.style.color = "green"
    } else {
        resultMsgEl.textContent = "Wrong Answer"
        resultMsgEl.style.color = "red"
    }
})