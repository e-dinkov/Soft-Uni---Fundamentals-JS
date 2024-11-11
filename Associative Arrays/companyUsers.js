function companyArranger(input) {
    let companyWorkers = new Map()
    for (let element of input) {
        let [company, workerID] = element.split(" -> ")
        if (!companyWorkers.has(company)) {

            companyWorkers.set(company, [])
        } companyWorkers.get(company).push(workerID)
        companyWorkers.set(company, companyWorkers.get(company))

    }
    let output = Array.from(companyWorkers).sort((a, b) => {
        return a[0].localeCompare(b[0])
    })
    for (let [company, workers] of output) {
        console.log(company)
        let workersSet = new Set(workers)
        workersSet.forEach((worker) => {
            console.log(`-- ${worker}`)
        })
    }

}

companyArranger(['SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]
)