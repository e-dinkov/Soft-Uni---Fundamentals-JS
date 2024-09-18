function fundamentals(passwords) {
    //const password=  username.split('').reverse().join('');
  let username= passwords[0];
    let password = "";
    for(let i = (username.length) - 1; i>=0; i --)
    {
        password += username [i];
    }
   let counter = 0 ;
   let index = 1;

     while(counter <=3)
     { 
      if(passwords[index] === password)
      {
        console.log(`User ${username} logged in.`)
        return;


      }
      else
      {
        if(counter === 3 || counter === 4) 
        {
            break;
        }
            else{counter +=1;
        console.log(`Incorrect password. Try again.`)
        index++;}
      }
     }
     console.log(`User ${username} blocked!`)
  

  

    }