 //4
 function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    console.log(currentYear);
  }
  getCurrentYear()
  
  
  //6
  
  function personalGreeting(name)
  {
      console.log("Hi , ",name,"  how are you")
  }
  //let myname = prompt("enter your name");
  personalGreeting("semo")
  
  function ageInMonths(age)
  {
  
  console.log("your age ",age,"   so you have ",age*12," months")
  }
  let myage = 25
  ageInMonths(myage)
  
  
  //12
  
  function findMax(num1,num2)
  {
  if(num1>num2)
  {
      console.log(num1,"is bigger")
  }
  else if(num2>num1)
  {
      console.log(num2,"is bigger")
  
  }
  else if(num1===num2)
  {
  console.log("both numbers are qual");
  }
  else
  {
      console.log("error .. check the numbers")
  }
  }
  
  findMax(6,10)
  
  
  
  
  //13
  function countVowels(str)
  {
     vowels =  ["A", "E", "I", "O", "U","Y" ]
      let count = 0;
      for(i=0;i<str.length;i++)
  {
      if(vowels.includes(str[i]))
      count++;
  }
  console.log(count)
  }
  
  countVowels("Yamo")
  
  
  //intermedite 
  //1
  function isPalindrome(str)
  {
  let reverseStr = "";
  for(let i = str.length-1; i>=0; i--)
  {
      reverseStr = reverseStr + str[i];
     
  }
  console.log(reverseStr)
  if(str==reverseStr)
  {
      return true;
      
  }
  else
  {
      return false;
  }
  }
  // let check = isPalindrome("mom");
  // if(check)
  // {
  //     console.log("the string is a palindrome")
  
  // }
  // else
  // {
  //     console.log("it is not")
  // }
  
  
  //2
  function fizzBuzz(num)
  {
   if(num%5==0&&num%3==0)
  {
  return "FizzBuzz"
  }
  else if(num%3==0)
  {
      return "fizz"
      
  }
  
  else if(num%5==0)
  {
  return "Buzz"
  }
  else
  {
      return " ",num
  }
  }
  const isfuzz = fizzBuzz(1);
  console.log(isfuzz)
  
  //3
  
  function factorial(num)
  {
      let fac= 1;
  for(let i =1 ; i<=num;i++)
  {
  fac = fac*i;  
  }
  return fac;
  }
  
  const fact = factorial(5);
  console.log(fact);
  
  //4
  function findLongestWord(sentence)
  {
  const words = sentence.split(' ');
  let longestword = " "
  for(word of words)
  {
      if(word.length > longestword.length)
  {
      longestword = word;
  
      }
  }
  return  longestword;
  
  
  }
  const longword = findLongestWord("Lions do like icecreams");
  
  //5
  function calculateAverage(numbers)
  {
  let  sum = 0;
  for(let i=0;i<numbers.length;i++)
  {
      sum=sum+numbers[i]
  }
  let avg = sum/numbers.length;
  return avg;
  }
  
  const arr = [1,2,3,4,5]
  
  let average = calculateAverage(arr)
  console.log(average);
  
  //6
  
  function removeDuplicates(arr1)
  {
  const duparr =  new Set(arr1);
  return duparr;
  }
  
  function removeDuplicates1(arr1)
  {
  
      return arr1.filter((item , index)=> arr1.indexOf(item)==index);
  }
  
  
  const array1 = [1, 1, 2, 3, 5, 2,7];
  console.log(removeDuplicates1(array1));
  
  
  
  //7
  function capitalizeFirstLetter(str)
  {
  
      return str.charAt(0).toUpperCase()+str.slice(1);
  }
  const newstr = capitalizeFirstLetter("semo");
  
  //8
  function countOccurrences(str , char)
  {
      count = 0;
      for(s of str)
  {
      if(s ===char)
  {
      count  = count+1;
  }
  
  }
  return count;
  }
  
  
  function countOccurrences1(str , char)
  {
     
  return str.split('').filter(c=> c==char).length
  
  
  }
  
  let howmany = countOccurrences("semo saif","s");
  console.log(howmany);
  howmany = countOccurrences1("semo saif","s");
  console.log(howmany);
  
  
   function mergeArrays(arrays1,arrays2)
  {
  let botharrays = [...arrays1, ...arrays2];
  botharrays=removeDuplicates1(botharrays);
  return botharrays;
  }
  let arr3 = [1,2,4,6,2];
  let arr4 = [0,3,5,6,2];
  let testarray  = mergeArrays(arr3,arr4);
  testarray.sort();
  console.log(testarray);
  
  
  
  function genratepassword(length)
  {
      uppercase = "ABCDEFG"
      lowercase = "abcdefg"
     let numbers = "0123456789"
     allcharacters = uppercase+lowercase+numbers;
  let password = "";
     for(let i = 0; i<length;i++)
     {
      const randomIndex = Math.floor(Math.random()*allcharacters.length) 
      password = password + allcharacters[randomIndex];
     }
  return password;
  }
  console.log(genratepassword(4));
