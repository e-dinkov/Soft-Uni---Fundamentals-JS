function encryptingPassword(input) {
    let pattern = /(\S+)>(?<firstGroup>[\d]{3})\|(?<secondGroup>[a-z]{3})\|(?<thirdGroup>[A-Z]{3})\|(?<fourthGroup>[^><]{3})<\1/
    let n = Number(input.shift())
    for (let currentPassword of input) {
        if (pattern.test(currentPassword) === false) {
            console.log(`Try another password!`)
        }
        else {
            let match = pattern.exec(currentPassword)
            let matchGroups = match.groups
            let concatedGroups = matchGroups['firstGroup'] + matchGroups['secondGroup'] + matchGroups['thirdGroup'] + matchGroups['fourthGroup']

            console.log(`Password: ${concatedGroups}`)
        }
    }
}
encryptingPassword((["5",
    "aa>111|mqu|BAU|mqu<aa",
    "()>111!aaa!AAA!^&*<()",
    "o>088|abc|AAA|***<o",
    "asd>asd|asd|ASD|asd<asd",
    "*>088|zzzz|ZzZ|123<*"])
    )