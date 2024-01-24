
const tinderUser=new Object() //Singleton object

    tinderUser.id="12345abs"
    tinderUser.name="king"
    tinderUser.isLoggedin=false

// console.log(tinderUser);

const regularUser={
    email:"Sum@gmail.com",
    fullName:{
        userFullname:{
            firstName:"HAsrsh",
            lastname:"Vardhan"
        }
    }
}

// console.log(regularUser.fullName.userFullname.firstName);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3= {obj1,obj2}

// const obj3= Object.assign({},obj1,obj2) //If we not use singlton than all value merges in obj1 USE krna Is GOOD

const obj3={...obj1,...obj2} //Spread the values of objects


// console.log(obj3);

const user=[
    {
        id:1,
        email:"ki@hjahj.com"
    },
    {

    }
]

user[1].email

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedin'));

const course={
    coursename:"Js in Hindi",
    price:"333",
    courseInstructor:"Hitesh"
}
// course.courseInstructor

const{courseInstructor:instuctor}=course
// console.log(courseInstructor);

// console.log(instuctor);


//JSON
// {
//     "name":"Hitesh",
//     "coursename":"JS in Hindi",
//     "Price":"Free"
// }