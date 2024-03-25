/*
task:
mencari huruf tengah,
> kalo total length ganjil return 1 chara,
> kalo genap return 2 middle chara

input -> output
"test" -> "es"
"testing" -> "t"

penyelesaiannya:
a. fokus ke satu problem dulu
b. cari cara untuk ambil nilai tengahnya, yaitu dengan formula(total length / 2)
c. buat perkondisian kalo ganjil langsung return middle nya
d. ketika total length genap , lakukan perulangan dimulai dari i = middle - 1 dan i < middle

*/

function getMiddle(s){
    let middle =  Math.floor( s.length / 2) ;
    let result = '' ;
   if(s.length % 2 === 1 ){
     result +=  s[middle]
   }else if(s.length % 2 === 0){
        for (let i = middle - 1; i <= middle; i++) {
        result += s[i]; 
   }
  }
  return result ;
  }
  
  console.log(getMiddle("testing")) //t
  