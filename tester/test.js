let info = {
    name : "tomas",
    lastName : 'calle',
    age : 19,
    stage : 'student'

}


const tester = (name = "user",{lastName,age} = {})=>{
    console.log(name)
    console.log('last name: ' + lastName)
    console.log('age: ' + age)
}

tester('tomas')