function textCutter(text, amount){

  // we split the text into words stored in a array
  const words = text.split(" ");

  // we join the first "amount" words in a single text
  let _text = words.splice(0, amount || 15).join(" ");

  // We add "..." at the end if the result is différent from the original text, and return the final result
  if(text !== _text){
    return _text+"..."
  } else {
    return _text
  }
}

export default textCutter();