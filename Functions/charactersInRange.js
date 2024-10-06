
function chars(letter1, letter2) {
    let startOfAscii = letter1.charCodeAt()
    let endOfAscii = letter2.charCodeAt()
    if (startOfAscii > endOfAscii) {
        [startOfAscii, endOfAscii] = [endOfAscii, startOfAscii]
    }
    let output = ''
    for (let i = startOfAscii + 1; i < endOfAscii; i++) {
        let currentElement = String.fromCharCode(i);
        output += currentElement + " "
    }
    console.log(output)

}
chars('c', '#')