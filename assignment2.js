//answer1  to display even numbers b/w 1 to 100
for(let j=1;j<=100;j++){
    if(j%2==0){
        console.log(j);
    }
} 

//answer2 to calculate add mul div sub two numbers using switch case
function cal(x,y,opr){
    switch(opr){
        case '+':
            console.log(x+y);
            break;
        case '-':
            console.log(x-y);
            break;
        case '*':
            console.log(x*y);
            break;
        case '/':
            console.log(x/y);
            break;
        default:
            console.log("enter valid operation");
            break;                
    }
}
cal(5,4,'*');


//answer3 to calculate TAX on salary of a person using switch control flow
function saltax(sal){
    let t=0;
    switch(true){
        case (sal>=0&&sal<=500000):
            t=0;
            return t;
        case (sal>500000&&sal<=1000000):
            t=sal*0.10;
            return t;
        case(sal>1000000&&sal<=1500000):
            t=sal*0.20;
            return t;
        case(sal>1500000):
            t=sal*0.30;
            return t;
        default:
            return"invalid salary";        
    }
}
console.log("Your tax is:",saltax(550000));


//answer4 to find SOP of two numbers of their corresponding digits
function SOP(n1,n2){
    let s=0;
    while(n1>0||n2>0){
        let a=n1%10;
        let b=n2%10;
        s+=a*b;
        n1=Math.floor(n1/10);
        n2=Math.floor(n2/10);
    }
    return s;
    
}
console.log("the SOP is:",SOP(66,33));