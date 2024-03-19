const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget')
const entryDropdown = document.getElementById('entry-dropdown')
const addEntryButton = document.getElementById('add-entry')
const clearButton = document.getElementById('clear')
const output = document.getElementById('output')

let isError = false

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
function cleanInputString (str){
    const regex  = /[+-\s]/g
    return str.replace(regex,'')
}

function isIsvalidInput(str){
    const regex = /\d+e\d+/i
    return str.match(regex)
}

function addEntry(){
   const  targetId = "#"+entryDropdown.value
   const targetInputContainer = document.querySelector(targetId + ' .input-container')
}
// #lunch input-container