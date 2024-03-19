const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");

let isError = false;

// funçao antiga(usa muito mais memoria , queremos otimizar !)
// function cleanInputString(str){
//     const strArray = str.split('')
//     const cleanStrArray = []

//     for (let i = 0; i < strArray.length; i++) {

//         if(!["+","-"," "].includes(strArray[i])){
//             cleanStrArray.push(strArray[i])
//         }

//     }
// }

// atualizada com regex (menos memória e mais otimizado)
function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, "");
}

function isIsvalidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
}
// nao entendi o que essa função faz ainda
function addEntry() {
    //  const  targetId = "#"+entryDropdown.value
    const targetInputContainer = document.querySelector(
        `#${entryDropdown.value} .input-container`
    ); // #lunch input-container(exemplo de saída)
    const entryNumber =
        targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
    const HTMLString = `<label  for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
   <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name">
   <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
   <input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories">`;

   targetInputContainer.insertAdjacentHTML("beforeend",HTMLString)
}

addEntryButton.addEventListener('click',addEntry)

function getCaloriesFromInputs(list){
let calories = 0
}