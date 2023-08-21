function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1)
}

function allCaps(str){
  return str.toUpperCase()
}

function capitalizeWords(str) {
  let operStr = str.split(" ")
  let newStr = ""
  for (word in operStr) {
    newStr += `${capitalize(operStr[word])} `
  }
  return newStr
}

function capitalizeHeadline(str){
  return
}
function removeExtraSpaces(str){
  return
}
function kebabCase(str){
  return
}
function snakeCase(str){
  return
}
function camelCase(str){
  return
}
function shift(str){
  return
}
function makeHashTag(str){
  return
}
function isEmpty(str){
  return
}