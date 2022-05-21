const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")
const button = document.querySelector("button")
const inputEl = document.getElementById("number-input")

button.addEventListener("click", function() {
    renderResults()
})

function renderResults() {
    let inputNum = inputEl.value
    lengthEl.textContent = `${inputNum} meters = ${metersToFeet(inputNum)} feet | ${inputNum} feet = ${feetToMeters(inputNum)} meters`
    volumeEl.textContent = `${inputNum} liters = ${litersToGallons(inputNum)} gallons | ${inputNum} gallons = ${gallonsToLiters(inputNum)} liters`
    massEl.textContent = `${inputNum} kilograms = ${kilogramsToPounds(inputNum)} pounds | ${inputNum} pounds = ${poundsToKilograms(inputNum)} kilograms`
    inputEl.value = ""
}

function metersToFeet(num) {
    return (num * 3.2808399).toFixed(3)
}

function feetToMeters(num) {
    return (num / 3.2808399).toFixed(3)
}

function litersToGallons(num) {
    return (num / 3.78541178).toFixed(3)
}

function gallonsToLiters(num) {
    return (num * 3.78541178).toFixed(3)
}

function kilogramsToPounds(num) {
    return (num * 2.20462262).toFixed(3)
}

function poundsToKilograms(num) {
    return (num / 2.20462262).toFixed(3)
}