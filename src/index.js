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
  newStr = newStr.slice(0, -1)
  return newStr
}

function removeExtraSpaces(str) {
  const chars = str.trim().split('')
  console.log(chars)
  let newStr = ''
  for (char in chars) {
    if (char != chars.length) {
      if (chars[char] == ' ') {
        if (chars[parseInt(char) + 1] == ' ') {
          continue;
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
  for (char in chars) {
    if (chars[char] == ' ') {
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
  for (char in chars) {
    if (chars[char] == ' ') {
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

function shift(str, nChars = 1) {
  let str1 = str.slice(0, nChars)
  let str2 = str.slice(nChars)
  return str2 + str1
}

function makeHashTag(str) {
  let operStr = str.split(' ')
  if (length(operStr) <= 3) {
    let hashtags = []
    for (word in operStr) {
      hashtags.append(`#${operStr[word]}`)
    }
    return hashtags
  }
  operStr = operStr.sort((a, b) => b.length - a.length).slice(0, 3)
  let hashtags = []
  for (word in operStr) {
    hashtags.append(`#${operStr[word]}`)
  }
  return hashtags
}

function isEmpty(str) {
  let chars = str.trim().split('')
  for (char in chars) {
    if (chars[char] != '\n') {
      if (chars[char] != '\r') {
        if (chars[char] != '\t') {
          if (chars[char] != ' ') {
            return false
          }
        }
      }
    }
  }
  return true
}
module.exports.isEmpty = isEmpty
module.exports.allCaps = allCaps
module.exports.camelCase = camelCase
module.exports.capitalize = capitalize
module.exports.capitalizeWords = capitalizeWords
module.exports.kebabCase = kebabCase
module.exports.makeHashTag = makeHashTag
module.exports.removeExtraSpaces = removeExtraSpaces
module.exports.snakeCase = snakeCase
module.exports.shift = shift