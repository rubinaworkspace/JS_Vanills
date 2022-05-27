//let marks=new Array(23,34,34,45,7,6,6,5,4)
//array can be declared this way too
let marks= [14,34,45,76,32,76,1,23,4]
console.log(marks.length)
console.log(marks)
marks.push(65)
console.log(marks)
marks.pop()
console.log(marks)
marks.unshift(455)
console.log(marks)
console.log(marks.indexOf(455))
console.log(marks.includes(45))

//reduce filter map- here sum= accumulator
console.log(marks.reduce((sum, marks)=>sum+marks,0))
console.log(marks.reduce((marks)=>marks%2==0))

//complex code to show only even numbers
let  scores=[12,65,76,8,33,11,55,88]
var evenScores=[]
for(let i=0;i<scores.length;i++)
{
    if(scores[i]%2==0)
    evenScores.push(scores[i])
}
console.log(evenScores)

//easy way to find even scores using filter
//filter performs a function if a condition is met
let newEvenScores= scores.filter(score=>score%2==0)
console.log(newEvenScores)

//easy way to find even scores using map- multiply each value by n=3
let anArray=[1,2,3,4,5,6,7,8,9,10]
const numValue= 3
let multipleArrray= anArray.map(no=>no*3)
console.log(multipleArrray)

let sumValue= scores.filter(no=> no%2==0).map(no=>no*3).reduce((sum, no)=> no+sum,0)
console.log("The sum val is: "+sumValue)

var studentMarks= [34,67,0045,87,90,23,0056,003]
console.log(studentMarks.sort())
console.log(studentMarks.sort((a,b)=>a-b))
console.log(studentMarks.sort((a,b)=>b-a))



