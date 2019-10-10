// to grab form: 
    // can give it an id to select that specific form.
    // <form id="myForm"></form>

// Use name attribute for forms (not ID). Name attributes only work for forms.
    // <form name="myForm">

// by default forms refresh - must put event.preventDefault() to stop this


// const form = document.getElementById('myForm')


const form = document.myForm

const fullName = form.fullName
const age = form.myAge
const email = form.myEmail

// console.log(fullName)
// console.log(myAge)
// console.log(myEmail)

// to grab a field use 
    console.log(fullName.type)
// to grab text entered use below. THIS MUST BE USED IN AN EVENT LISTENER OR IT WON'T GET THE TEXT
    console.log(fullName.value)


form.addEventListener('submit', function(){
    event.preventDefault()
    const fullName = form.fullName.value
    const myAge = form.myAge.value
    const myEmail = form.myEmail.value

    // console.log(fullName.value)

    // alert("Hello my name is " + fullName + ' I am' + myAge + ' years old, and my email address is ' + myEmail)

    // alert("Hello my name is ${fullName}. I am ${myAge} years old, and my email address is ${myEmail}")
 
    // to grab user info 
    document.getElementById('user info').textContent = `Hello my name is ${fullName}. I am ${myAge} years old, and my email address is ${myEmail}`

// innerHTML is easily hacked, use .textContent instead because it is safer 
    document.getElementById('user info').innerHTML = `<h3>Hello my name is ${fullName}. I am ${myAge} years old, and my email address is ${myEmail}</h3>`
})

// TEMPLATE LITERAL is whole package of ` xxx ${name}`