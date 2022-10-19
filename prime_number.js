let num = 13 ;
let prime = true;
for(let i=2;i<=num**0.5;i++){
    if(num%i==0) {
        prime = false;
        break;
    }
}
console.log(prime);