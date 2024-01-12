const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;



function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, "");
    

}


function isInvalidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
}

function addEntry() {
    const targetId = "#" + entryDropdown.ariaValueMax;
    const targetInputContainer = document.querySelector(`{targetId} .input-container`);
}



// for (let i = 0; i < strArray.length; i++) {
//     if (!strArray.includes(["+", "-", " "]))
//         cleanStrArray.push(strArray[1])
// }