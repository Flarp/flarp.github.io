function getShape(sides) {
  // array indexing is successive and since we already know our shape count is within the range
  // we can just put everything into an array and access the proper index
  const ngons = ["Monogon", "Digon", "Triangle", "Quadrilateral", "Pentagon",
   "Hexagon", "Septagon", "Octogon", "Nonagon", "Decagon", "Undecagon", "Dodecagon"]
   return ngons[sides-1]
}

function validateEntry(entry) {
  const int = Math.abs(Math.round(parseFloat(entry)))
  if(isNaN(int)) {
    return [false, "Input provided was not a number"]
  } else if (int < 1 || int > 12) {
    return [false, "Input provided was not within the range 0 < x < 13"]
  } else {
    return [true, getShape(int)]
  }
}

let entry = [false, ""]
while (entry[0] == false) {
  entry = validateEntry(prompt(`${entry[1]}\nThe Earsplitting Dove asks you enter the amount of sides for the polygon you would like to name`))
}

alert(entry[1])
