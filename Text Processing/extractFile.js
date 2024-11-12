function extractFile(file){
file = file.split("\\").pop()
let lastDotIndex = file.lastIndexOf(".")
let fileName = file.substring(0,lastDotIndex)
let Extension = file.substring(lastDotIndex + 1)

console.log(`File name: ${fileName}`)
console.log(`File extension: ${Extension}`)
}
extractFile('C:\\Internal\\training-internal\\Template.pptx')