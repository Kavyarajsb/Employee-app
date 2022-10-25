const mongoose = require('mongoose')

const schema = mongoose.Schema;

const Employee_Detail = new schema({
    name: String,
    location: String,
    position: String,
    salary: Number
});

const EmployeeData = mongoose.model('employee', Employee_Detail)
module.exports = EmployeeData