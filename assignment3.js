//answer 1
let SOI = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal"
];
let filtersoi=SOI.filter(s=>!"aeiouAEIOU".includes(s[0]));
console.log(filtersoi);

//answer 2
let str="I Love My India";
let j=str.split(" ").reverse().join("");
console.log(j);

//answer 3
let c="INDIA";
let sp=c.split("");
sp.splice(3,0,'O','N','E','S');
let o=sp.join("");
console.log(o);

//answer 4
let q="Indian space Research organisation ";
let vow="aeiouAEIOU";
let vc=0;
let cc=0;
for(let i=0;i<q.length;i++){
  let ch=q[i];
  if((ch>='A'&&ch<='Z')||(ch>='a'&&ch<='z')){
    if(vow.includes(ch)){
      vc++;
    }
    else{
      cc++;
    }
  }
}
console.log("vowel count is:",vc);
console.log("consonant count is:",cc);

//answer 5
function cfn(sen,ww,cw){
  return sen.replace(ww,cw);
}
sen="science and technology is helping humans for their development";
console.log(cfn(sen,"development","destruction"));

//answer 6
let inputarr=[1,2,3,9,10,7,5,4,3];
let af=inputarr.filter(n => n>5);
console.log(af);

//answer 7
const students= [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];
const res=students.map(s => ({
  name:s.name,
  average:s.scores.reduce((a,b)=>a+b)/s.scores.length
}));
console.log(res);

//answer 8
function rsod(n) {
  return n===0?0:1+(n-1)%9;
}
console.log(rsod(456));

//answer 9

function cnow(para){
  return para.trim().split(/\s+/).length;
}
console.log("Total words in para is:",cnow("where  ok there is will there is a way"));

//answer 10

function revstr(str){
  return str.split("").reverse().join("");
}
console.log("reverse string is:",revstr("hello"));

//answer 11
const stu = {
  student1: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  },
  student2: {
    subject1: 74,
    subject2: 66,
    subject3: 67,
    subject4: 57,
    subject5: 77
  },
  student3: {
    subject1: 84,
    subject2: 96,
    subject3: 87,
    subject4: 67,
    subject5: 47
  }
};
const result = Object.fromEntries(
  Object.entries(stu).map(([student, subjects]) => {
    const marks = Object.values(subjects);
    const average = marks.reduce((sum, val) => sum + val, 0) / marks.length;
    return [student, { average }];
  })
);
console.log(result);


