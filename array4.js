
//Write a JavaScript function to remove duplicate items from an array (consider case sensitivity).

// Array containing both upper and lower case letters to demonstrate case sensitivity
const myArray = ['a', 'D', 'c', 'C', 'c', 'a', 'A', 'G', 'F', 'G', 'H'];

function removeDuplicates(num) {

 //declare and empty array

   let newArray = [];

   /*write a for Loop that loops through the letters in the array and looks for these letters in the empty array, and declare that if that letter or
   its lowercase is not found in the empty array, then that letter should be pushed into the empty array.

   */
   
   for(let i=0; i<num.length; i++)  {
    if (!(newArray.includes(num[i]) || newArray.includes(num[i].toLowerCase()))) {
        
        newArray.push(num[i])
    }
   }
   return newArray; 
}
 
console.log(removeDuplicates(myArray))