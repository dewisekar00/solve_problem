/*
note:Palindrom itu kayak kalimat atau kata yang bisa dibaca sama dari depan maupun dari belakang
input:katak, level, malam
output:true
task:mencari kata yang ketika dibaca dari depan maupun belakang sama
penyelesaain:
- approach with two pointer
- dengan mengecek 2 huruf dari depan dan belakang bersamaan

*/

function isPalindrome(str) {
    str = str.toLowerCase();
     let left = 0;
     let right = str.length - 1;
 
     while (left < right) {
         if (str[left] !== str[right]) {
             return false;
         }
         left++;
         right--;
     }
     return true;
 }
 
 
 console.log(isPalindrome('katak')) // true