let arr = [1,2,3,4,5,6];

// let acc=0;

// for(let key in arr){
//     acc+=arr[key];
// }

// let total = arr.reduce((acc, curr) => {
//     return acc+curr;
// },20)

// console.log(total)

let shop = [
    {
        itemname: "tshirt",
        price: 2999
    },
    {
        itemname: "jeans",
        price: 3999
    },
    {
        itemname: "sneakers",
        price: 4999
    },
    {
        itemname: "jacket",
        price: 5999
    },
    {
        itemname: "cap",
        price: 999
    }
]

let totalPrice = shop.reduce((acc, curr) => acc+curr.price , 0);

console.log(totalPrice);