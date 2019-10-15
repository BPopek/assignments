const employees = []

function Employee(name, jobTitle, salary, status = 'Full Time') {
    this.Name = name
    this.Job_Title = jobTitle
    this.Salary = salary
    this.Status = status
    this.printEmployeeForm = function(){
        console.log('Name: ' + this.name + ', ', 'Job Title: ' + this.jobTitle + ', ', 'Salary: ' + this.salary + ', ', 'Work Status: ' + this.status)
    }
}

const newEmployee1 = new Employee('Jane', 'Designer', '$75000 per year', status = 'Contract')
const newEmployee2 = new Employee('Bob', 'Inventory', '$50000 per year', status = 'Part Time') 
const newEmployee3 = new Employee('Steve', 'Sales', '$80000 per year', status) 

newEmployee1.printEmployeeForm()
newEmployee2.printEmployeeForm()
newEmployee3.printEmployeeForm()

employees.push(newEmployee1, newEmployee2, newEmployee3)
console.log(employees)


// other option than push
function addEmployee(newEmp){
    employees.push(newEmp)
}
addEmployee(newEmployee1)
addEmployee(newEmployee2)
addEmployee(newEmployee3)

console.log(employees)

// console.log(newEmployee1)
// console.log(newEmployee2)
// console.log(newEmployee3)