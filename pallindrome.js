let x = 12421;
// palendron is a no. or string which is same when it reversed

// Using String method

let str = x+"";
let new_str = "";
let n = str.length-1;
while(n>=0){
    new_str+=str[n];
    n--;
}
if(new_str==str) console.log("pallendron no.");
else console.log("Not pallendron");