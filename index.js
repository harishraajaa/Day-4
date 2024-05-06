console.log("Welcome Harish!!!")

// function sum(a,b){
//     return a+b
// }

//  let a=[1,2]
// a.push(6)

// let b=a
// console.log(a)
// console.log(...a)

//console.log(sum(a))

// let candidate={
//     name:"Harish",
//     email:"rvhar@gmail.com"
// }

// function Display(name,email)
// {
//     console.log("Name:"+name+"Gmail:"+email)
// }
// let copycan={...candidate}

// Display(copycan.name,copycan.email)


function display(...input)
{
    console.log(input)
}

display("Harish",10,"Raajaa",20,30.56)


//Array Destructure

// let marks=[99,95]

// //let tamil=marks[0]
// //let english=marks[1]

// // Other simple way

// let[tamil,english]=marks

//Object Destructure

let candidate={
    name:"Harish",
    email:"rvhar@gmail.com",
    address:{
        No:"9",
        Street:"lakshmi Nagar",
        City:"Madurai"
    }
}


//let{name,email}=candidate

//option-1
//let{No,Street,City}=candidate.address

//option-2
// let{address}=candidate
// let{No,Street,City}=address

// console.log(name,email)
// console.log(No,Street,City)


//Object shorthand

// let name="Harish"
// let husof="Pavi"

// let details={name,husof}

// console.log(details)

//Template iterals

// let name="Harish"
// let city="Madurai"

// console.log(`${name} is from ${city}`)

let userdetails=[
    {name:"Harish",email:"rvharish@gmail.com"},
    {name:"Pavithra",email:"pavi@gmail.com"}

]

// for(let i in userdetails){
//     console.log(`User Name ${userdetails[i].name} and his/her Email address is ${userdetails[i].email}`)
// }

userdetails.forEach(e => {
    console.log(`User Name ${e.name} and his/her Email address is ${e.email}`)
});