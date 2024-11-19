function extractEmails(input) {
    let splittingPattern = /\s+/
    let usernamePattern = /^(?:[a-zA-Z0-9]+(?:[_\.\-]?[a-zA-Z0-9]+)*)+(?:[_\.\-]?[a-zA-Z0-9]+)+$/
    let hostPattern = /^(?:[a-zA-Z]+(?:-?[a-zA-Z]+)*\.)+(?:-?[a-zA-Z]+)+$/
    let words = input.split(splittingPattern)
    //console.log(words)
    for (let currentWord of words) {
        if (currentWord.includes("@")) {
            let emailParts = currentWord.split("@")
            if (emailParts.length === 2) {
                let username = emailParts[0]
                let host = emailParts[1]
                let isWord = /[a-zA-Z]/
                if (isWord.test(host[host.length - 1]) === false) {
                    host = host.slice(0, host.length - 1)
                }
                //console.log(host)
                if (usernamePattern.test(username) === true && hostPattern.test(host) === true) {
                    console.log(`${username}@${host}`)
                }
            }


        }
    }
}
extractEmails("Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.")
extractEmails("Please contact us at: support@github.com.")