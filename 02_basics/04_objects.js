//declaring objects using constructor
//(singleton objects)

// const tinderUser = new Object() //this is singleton
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Jahan"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "ihhfs@gmail.com",
    fullname:{
        userfullname:{
            firstname:"indrayani",
            lastname:"Verulkar"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
//we can merge objects using assign 
//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


//many objects inside the array
const users = [
    {id: 1,
    email:"h@gmail.com",
    },
    {id: 1,
        email:"h@gmail.com",

    },
    {id: 1,
        email:"h@gmail.com",

    },
    {id: 1,
        email:"h@gmail.com",

    },
    {id: 1,
        email:"h@gmail.com",

    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));



const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "histesh sir"
}

//course.courseInstructor
const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);


//API JAson syntax
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
