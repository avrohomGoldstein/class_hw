const mongoose = require('mongoose'),
    Employee = require('./employees2'),
    Department = require('./department');

mongoose.connect('mongodb://127.0.0.1:27017/employeeDocs');

mongoose.connection.on('error', err => {
    console.error(err);
});

mongoose.connection.on('open', () => {
    console.log('connected');

    const donald = new Employee({
        name: {
            first: 'Donald',
            last: 'Trump'
        },
        salary: 120000,
        department: 'White House'
    });

    donald.print();
    /* donald.name.full = 'Hillary Clinton';*/
    donald.save();
    /*(err, result) => {
         const friends = new ContactList({
             name: 'Friends'
         }),
             employees = new ContactList({
                 name: 'Employees'
             });
 
         friends.contacts.push(donald);
         employees.contacts.push(donald);
 
         friends.save((err, res) => {
             employees.save((e, r) => {
 
                 ContactList.find().populate('contacts').exec((err, lists) => {
                     lists.forEach(list => {
                         list.print();
                     });
                 });
             });
         });
     });
     //donald.print();
 
     /*const noLastName = new Contact({
         name: {
             first: 'Donald'
         },
         email: 'dtrump@whitehouse.gov',
         phone: '123-456-7890'
     });
 
     noLastName.save((err, res) => {
         console.error(err);
     });*/

    /*Contact.find({ 'name.last': 'Clinton' }, (err, contacts) => {
        if (err) {
            console.error(err);
        } else {
            contacts.forEach(contact => {
                console.log(contact);
            });
        }
    });*/

    /*Contact.find({ 'name.last': 'Clinton' }).limit(2).exec((err, contacts) => {
        if (err) {
            console.error(err);
        } else {
            contacts.forEach(contact => {
                console.log(contact);
            });
        }
    });*/
});