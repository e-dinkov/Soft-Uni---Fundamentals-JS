function averageGrade(arr)
{
let studentBoook = new Map()
for(const element of arr)
{
    let [name, ...grades] = element.split(' ')
    grades = grades.map(x=> Number(x))
    if(studentBoook.has(name) === false)
    {
        studentBoook.set(name,[])
    }
    for(const grade of grades)
    {
        studentBoook.get(name).push(grade)
    }

}
for(let [name,grades] of studentBoook)
{   let averageGrade = 0
    for(let grade of grades)
    {
      averageGrade += grade
    }
    averageGrade = averageGrade / grades.length
    studentBoook.set(name,averageGrade)
    
}
let outputNames =  Array.from(studentBoook.keys())
                      .sort((a,b) =>{
                        return a.localeCompare(b)
                      } )
for(const name of outputNames)
    {
        console.log(`${name}: ${studentBoook.get(name).toFixed(2)}`)
    }                      
                

}
averageGrade(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
    )