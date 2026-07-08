let codingLang = ["js", "python", "c++", "java", "c", "ruby"];

// for(let key in codingLang){
//     console.log(codingLang[key]);
// }

// for-each
// codingLang.forEach(function(item){
//     console.log(item);
// })

//using arrow function
// codingLang.forEach((item) =>{
//     console.log(item);
// })

let myArr = [
    {
        langname: "C++",
        langext: "cpp"
    },
    {
        langname: "JavaScript",
        langext: "js"
    },
    {
        langname: "Java",
        langext: "java"
    },
    {
        langname: "Python",
        langext: "py"
    }
]

myArr.forEach((item) => {
    console.log(item.langext);
})
