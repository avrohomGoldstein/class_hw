const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        first: String,
        last: String
    },
    salary: Number,
    department: String

});

employeeSchema.methods.print = function () {
    console.log(this.department, +'\n' + this.name.first, this.name.last, this.salary);
    console.log(this.name.full, this.email, this.phone);
};

employeeSchema.virtual('name.full').get(function () {
    return this.name.first + ' ' + this.name.last;
});

employeeSchema.virtual('name.full').set(function (fullname) {
    const parts = fullname.split(' ');
    this.name.first = parts[0];
    this.name.last = parts[1];
});

module.exports = mongoose.model('employee', employeeSchema);