function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1)
}

function allCaps(str) {
  return str.toUpperCase()
}

function capitalizeWords(str) {
  let operStr = str.split(" ")
  let newStr = ""
  for (word in operStr) {
    newStr += `${capitalize(operStr[word])} `
  }
  newStr = newStr.slice(0,-1)
  return newStr
}

function removeExtraSpaces(str) {
  const chars = str.split('')
  let newStr = ''
  for (char in chars) {
    if (char != length(chars)) {
      if (chars[char] == ' ') {
        if (chars[char + 1] == ' ') {
          continue
        }
      }
    }
    newStr += chars[char]
  }
  return newStr
}

function kebabCase(str) {
  const operStr = removeExtraSpaces(str)
  const chars = operStr.split('')
  let newStr = ''
  for(char in chars){
    if (chars[char] == ' '){
      newStr += '-'
      continue
    }
    newStr += chars[char]
  }
  return newStr
}
function snakeCase(str) {
  const operStr = removeExtraSpaces(str)
  const chars = operStr.split('')
  let newStr = ''
  for(char in chars){
    if (chars[char] == ' '){
      newStr += '_'
      continue
    }
    newStr += chars[char]
  }
  return newStr
}
function camelCase(str) {
  let operStr = str.split(" ")
  let newStr = ""
  for (word in operStr) {
    newStr += `${capitalize(operStr[word])}`
  }
  return newStr
}
function shift(str, nChars) {
  return
}
function makeHashTag(str) {
  return
}
function isEmpty(str) {
  return
}