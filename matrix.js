function matrix(n)
{
 for(let  i = 0; i < n; i++)
 { let rowString = ''
    for(let j = 0 ;  j < n ; j ++)
    {
      rowString += `${n} `
    }
    console.log(rowString)
 }
}
matrix(5)