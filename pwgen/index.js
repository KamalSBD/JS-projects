
const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUpperElement = document.getElementById('includeupper') // corrected spelling
const includeNumberElement = document.getElementById('includenumber')
const includeSymbolElement = document.getElementById('includesymbol')

const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('pw-display')

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWER_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeupper = includeUpperElement.checked // corrected spelling
  const includenumber = includeNumberElement.checked
  const includesymbol = includeSymbolElement.checked
  const password = generatePassword(characterAmount, includeupper, includenumber, includesymbol)
  passwordDisplay.innerText = password
})

function generatePassword(characterAmount, includeupper, includenumber, includesymbol) {
  let charCodes = LOWER_CHAR_CODES
  if (includeupper) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includesymbol) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  if (includenumber) charCodes = charCodes.concat(NUMBER_CHAR_CODES)

  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++){
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high){
  const array = []
  for (let i = low; i <= high; i++){
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) { 
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}
