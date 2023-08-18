console.log("hello chanda")
// var n=5
// string="";
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i+1;j++){
//         string+=" ";
//     }
//     for(let k=1;k<=i;k++){
//         string+="* "
//     }
//     string+="\n";
//    }
//    for(let i=n;i>=1;i--){
//     for(let j=1;j<=n-i+1;j++){
//         string+=" ";
//     }
//     for(let k=1;k<=i;k++){
//         string+="* "
//     }
//     string+="\n";
//    }
//    console.log(string)
// console.log("==========================================")

var a=4;
string="";
for(let i=1;i<=a;i++){
    for(let j=1;j<=a;j++){
        if(j==1||i==1||i==j||i==a||j==a||j+1==i-a){
            string+="* "
        }
        else{
            string+=" "
        }
    }
    string+="\n"
}
console.log(string);