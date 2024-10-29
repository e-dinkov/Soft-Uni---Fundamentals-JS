function employes(employeesInfo){
 for(let employee of employeesInfo)
 {

    let person = {
        name : employee,
        personalNumber : employee.length
    }
    console.log(`Name: ${person.name} -- Personal Number: ${person.personalNumber}`)
 }
}
employes([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]	)