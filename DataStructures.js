// <!-- Javascript data structure questions -->

// <!-- level 2: -->
// <!-- 1. Write a function to remove all even numbers from an Array. -->

const arr1=[1, 3, 4, 6, 7, 8];


function evenNumber(arr1){
      const arr2=[];
      for(var i=0; i<arr1.length; i++){
            if(arr[i] / 2 == 0){
                  arr2.push(arr1[i]);
            }
      }
      return arr2;
}

// <!--2  Replace all the vowels in a string with uppercase vowels. -->

var input="Elie";

function vowelUpperCase(input){

var str2="";
      for(var i=0; i<input.length; i++)
      {
            if(input.charAt(i)== 97 || input.charAt(i)== 101 || input.charAt(i)== 105 || input.charAt(i) == 111 || input.charAt(i) == 117)
            {
                  str2=srt2+input.charAt(i).toUpperCase() ;
            }
      }
      return str2;

}

// <!-- 3 .Write a function to find the maximum number in an array. -->

const array= [1, 3, 4, 6, 7, 8, 2, 5];

function maxNumber(array)
{
      var n =0;
      for(var i=0 ;i<array.length; i++)
      {
            if(n < array[i]){
                  n=array[i];

            }
      }
      return n;
}