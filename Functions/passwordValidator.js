function passwordVal(password) {
    function checkLength(password) {
        if (password.length >= 6 && password.length <= 10) { return true }
        else {
            return false
        }

    }
    function checkChars(password) {
        for (let i = 0; i < password.length; i++) {
            if (password[i].charCodeAt() >= 48 && password[i].charCodeAt() <= 57) {
                continue
            }
            else if (password[i].charCodeAt() >= 65 && password[i].charCodeAt() <= 90) {
                continue
            }
            else if (password[i].charCodeAt() >= 97 && password[i].charCodeAt() <= 122) {
                continue
            }
            else {
                return false
            }
        }
        return true
    }
    function checkDigits(password) {
        let counter = 0;
        for (let i = 0; i < password.length; i++) {
            if (password[i].charCodeAt() >= 48 && password[i].charCodeAt() <= 57) {
                counter++;
            }
        }
        if(counter >= 2) {return true}
        else{
            return false
        }
            

    }

 if(checkLength(password) === false)
 {
    console.log(`Password must be between 6 and 10 characters`)
 }
 if(checkChars(password) === false){
    console.log(`Password must consist only of letters and digits`)
 }
if(checkDigits(password) === false){
    console.log(`Password must have at least 2 digits`)
}
if(checkDigits(password) === true && checkChars(password) === true && checkLength(password) === true){
    console.log(`Password is valid`)
}
}
passwordVal('logIn')