function passwordValidator(input){
    let password = input.shift()
    let falsePattern1 = /[^\W]+/
    let truePattern1 = /[A-Z]+/
    let truePattern2 = /[a-z]+/
    let truePattern3 = /[\d]+/
    for(let command of input){
        if(command.includes("Lower")){
            let [useless1,useless2, index] = command.split(" ")
            index = +index
            if(index < password.length && index >=0){
            let replaceChar = password[index].toLowerCase()
            password = password.substring(0,index) + replaceChar + password.substring(index + 1)
            }
        }
        if(command.includes("Upper")){
            let [useless1,useless2, index] = command.split(" ")
            index = +index
            if(index < password.length && index >=0){
            let replaceChar = password[index].toUpperCase()
            password = password.substring(0,index) + replaceChar + password.substring(index + 1)
            }
            
        }
    }
    console.log(password)


    
}
passwordValidator(['invalidpassword*',
    'Add 2 p',
    'Replace i -50',
    'Replace * 10',
    'Make Upper 2',
    'Validation',
    'Complete'])
    