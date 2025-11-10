function getEmploee(employee) {
     let highestpay = employee.reduce((prev,curr) => {
        return (prev.salary > curr.salary) ? prev : curr;
     });
 console.log(`Highest salary: ${highestpay.salary}, name: ${highestpay.name}`);
 return highestpay;
}
const employee = [
    {name: "alice", salary: 5000},
    {name: "bob", salary: 8000}
    ];
    console.log(getEmploee(employee));
