// Assignment code here

// Created four variables array for UpperCaseLetter,LowerCaseLetter,Numbers and SpecialCharacters   
var abcupper= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var abclower =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numeric=[0,1,2,3,4,5,6,7,8,9];
var specialchar =[' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?',']',"[","",'@','^','_','`','{','|','}' ,'~'];
// I remove "\" from special characters

// Create array for MessageBox Dialog to show the message for every Character Array   
var message = ["Do like to add uppercase letter in you password?","Do like to add lowercase letter to your password?",
              "Do you like to add numbers in your password?","Do you like to add special charctes in your password?"];

// Created two arrays and one variable to save the status for each array if it's chosen 
var valuearray= [0,0,0,0];
var count = 0;
var functchar= [abcupper,abclower,numeric,specialchar]



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// This function generatepassword is connected to another tow functions passwordRiquarment and collectpassReq
function generatePassword()
{
  alert("          Welcom to Employee Password Generater Guide\nPlease follow all requirements" +
        "\n\tFirst: Passwword length should be between 8-128 chararcters\n\tSecond: Accept at least one of " +
        "the following password characters types :\n\t\tUppercase Letters,Lowercase Letters,Numbers and Special charcters");
  // Reset value
  valuearray=[0,0,0,0];
  count=0;
  var finalpassword = "";

  // generate password length between 8-128 characters and has validation if number less than 8 , grater than 128 or string 
  var passwordlen = prompt("Enter your password Length between 8-128 characters: ", "between 8-128 characters");
  if (passwordlen<8 || passwordlen>128 || isNaN(passwordlen))
  {
    alert("Password length should be between 8-128 characters");
    finalpassword = "Click Generate password bottom to start again"
    return finalpassword;
  }
  else 
  {
    
    passwordRequired();
    var y= collectpassReq(passwordlen);

    //this forloop generate final Password and return the new password to writepawwword function
    for(var i=0;i<y.length;i++)
    {
       var index = Math.floor(Math.random()*y.length);
       finalpassword = finalpassword + y[index];
    }
   
  }

  return finalpassword;
}


// check the password question requirment if its uppercase,lowercase,number and special character 
// this function can be update it because has array for question dielog box and valuearray as a check box accept or not
function passwordRequired()
{
  for(var i=0;i<valuearray.length;i++)
  {
    var abcu = confirm(message[i]);
    if(abcu == true)
    {
      valuearray[i]=1;
      count++
    }
    else
    {
      alert("is not include in your password");
    }
  }
      
  return;
}

// These next tow function , the first one: starting to generate the final password from the all requirment choosen
// Second function: generate random password characters for all requirments, then function send back the new random array to 
// generatePassword function
function collectpassReq(passlength)
{
  // x array is an array collecting all choosen characters on one array 
  var x=[];  

  var integernum = Math.floor(passlength/count);
  var remainum = passlength%count;

  if(count==0)
  {
    alert("No password generate because you need Accept at least one of " +
    "the following password characters types\n\tUppercase Letters,Lowercase Letters,Numbers and Special charcters");
  }

  for(var i=0;i<valuearray.length;i++)
  {
    if(valuearray[i]==1 && count != 1)
    {
      x= x.concat(collectrandomchar(i,integernum,0));
      count--;
    }
    else if( valuearray[i]==1 && count==1)
    {
      x=x.concat(collectrandomchar(i,integernum,remainum));
      count--;
    }
  }

  return x;
}


function collectrandomchar(valueindex,integernum,remainum)
{
  
  var randomspecial = [];
  var arrayneed = functchar[valueindex];

  for(var i=0;i<(integernum+remainum);i++)
  {
    var index = Math.floor(Math.random()*arrayneed.length);
    randomspecial[i] = arrayneed[index];
  }

  return randomspecial;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generatePassword() need to buil this function to generate password
//passwordText the password holder area to shows in textarea
//passwordText.value = password show this password after generate and put it in textarea
