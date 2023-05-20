export function checkFields(object) {
  let entries = Object.entries(object)
  let result = true
  entries.map((entry) => {
    const value = entry[1]
    if (
      value === "" || !value
    ) {
      result = false;
    }
    return result
  })
  
  console.log({object})
  result === false && alert("All fields are required !")
  return result;
}