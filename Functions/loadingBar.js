function loading(number)
{
 let battery = new Array(10).fill('.')
 for(let  i = 0; i < number/10; i++)
 {
    battery[i] = '%';
 }
 if(number === 100)
 {
    console.log('100% Complete!')
    console.log(`[${battery.join('')}]`)
 }
 else 
 {
    console.log(`${number}% [${battery.join('')}]`)
    console.log('Still loading...')
 }
}
loading (90)