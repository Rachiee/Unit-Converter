/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputFld = document.getElementById("input-fld")
let convBtn = document.getElementById("conv-btn")
let resultEl1 = document.getElementById("result-el1")
let resultEl2 = document.getElementById("result-el2")
let resultEl3 = document.getElementById("result-el3")

const meterToFeet = 3.281
const litreToGallon = 0.264
const kiloToPound = 2.204


convBtn.addEventListener("click" , function() {
    resultEl1.textContent = ""
    resultEl2.textContent = ""
    resultEl3.textContent = ""
    let productLth1 = (inputFld.value * meterToFeet).toFixed(3)
    let productLth2 = (inputFld.value / meterToFeet).toFixed(3)
    let productVol1 = (inputFld.value * litreToGallon).toFixed(3)
    let productVol2 = (inputFld.value / litreToGallon).toFixed(3)
    let productMass1 = (inputFld.value * kiloToPound).toFixed(3)
    let productMass2 = (inputFld.value / kiloToPound).toFixed(3)
    if (inputFld.value === "1") {
        resultEl1.textContent += `${inputFld.value} metre = ${productLth1} feet | ${inputFld.value} foot = ${productLth2} metres`
        resultEl2.textContent += `${inputFld.value} litre = ${productVol1} gallons | ${inputFld.value} gallon = ${productVol2} litres`
        resultEl3.textContent += `${inputFld.value} kilo = ${productMass1} pounds | ${inputFld.value} pound = ${productMass2} kilos`
    } else {
        resultEl1.textContent += `${inputFld.value} metres = ${productLth1} feet | ${inputFld.value} feet = ${productLth2} metres`
        resultEl2.textContent += `${inputFld.value} litres = ${productVol1} gallons | ${inputFld.value} gallons = ${productVol2} litres`
        resultEl3.textContent += `${inputFld.value} kilos = ${productMass1} pounds | ${inputFld.value} pounds = ${productMass2} kilos`
    }
    
})