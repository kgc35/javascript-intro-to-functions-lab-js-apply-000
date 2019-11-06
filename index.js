function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout(string))
}

function logWhisper(string) {
  console.log(whisper(string))
}

function sayHiToGrandma(string) {
  if string.toLowerCase() === string {
    return "I can't hear you!"
  } //checks if the string is lowercase


  string.toUpperCase() === string //checks if the string is uppercase
}
