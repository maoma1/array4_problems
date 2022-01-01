
///Write a JavaScript function to remove duplicate items from an array (consider case sensitivity).

// Array containing both upper and lower case letters to demonstrate case sensitivity
const myArray = ['a', 'D', 'c', 'C', 'c', 'a', 'A', 'G', 'F', 'G', 'H'];

function removeDuplicates(letters) {

 //declare and empty array

   let newArray = [];

   /*write a for Loop that loops through the letters in the array and looks for these letters in the empty array, and declare that if that letter or
   its lowercase is not found in the empty array, then that letter should be pushed into the empty array.

   */
   
   for(let i=0; i<letters.length; i++)  {
    if (!(newArray.includes(letters[i]) || newArray.includes(letters[i].toLowerCase()))) {
        
        newArray.push(letters[i])
    }
   }
   return newArray; 
}
 
console.log(removeDuplicates(myArray))