const AYS = require('./comp_data.json')
const fs = require('fs')







// console.log(AYS.employees)

// class main{
//     constructor(AYS){

//     }

//     add_employee(id, name, email, designation, salery, AYS){
//         let eId = id; 
//         let eName = name; 
//         let eEmail = email;
//         let eDesignation = designation;
//         let eSalary = salery;

//         for (let i = 0 ; i < AYS.employees.length; i++){
//             if(this.eId == AYS.employees[i].eId){
//                 console.log("employee alreay exists ! ")
//             } else {
//                 AYS.employees.push(
//                     eId = this.eId,
//                     eName =  this.eName,
//                     eEmail = this.eEmail,
//                     eDesignation = this.eDesignation,
//                     eSalary = this.eSalary
//                 )
//             }
//         }
//         console.log(AYS.employees)


//     }
// }

// let obj = new main();
// obj.add_employee(110, "aman", "amankaziak@gmail.com", "SDE", 10000, AYS);




// class emp {
//     add_emp(name, pos,  AYS){
//         this.name = name;
//         for (let i = 0; i< AYS.employees.length; i++){
//             if(AYS.employees[i].eName == pos){
//                 AYS.employees[i].eName = name;
//             }
//         }

//     }
// }

// let shay = new emp("amn", 0, AYS);





// class AYS_employes {
//     constructor(id, name, email, desig, sal){
//         this.id = id;
//         this.name = name;
//         this.email = email;
//         this.designation = desig;
//         this.sal = sal;
//     }
// }

// class employees{
//     constructor(id, name, email, desig, sal){
//         this.employees = []
//     }

//     newEmployee(){
//         let newemp = new newEmployee({
//             eId: this.id,
//             eName: this.name,
//             eEmail: this.email,
//             eDesignation: this.designation,
//             eSalary: sal
//         })

//         this.employees.push(newemp)
//     }
// }

// let new_data = new  employees()

// new_data.newEmployee(110, "aman kazi", "amankazi@gmail.com", "intern", 10000)




// class employee {
//     constructor(id, name, email, designation, salery) {



//     }
// }

// class EmpControll{
//     // add_employee(id, name, email, designation, salery, pos) {
//         add_employee(employee) {
//         const myData = {
//             "id": employee.id,
//             "name": name,
//             "email": email,
//             "designation": designation,
//             "salery": salery

//         }
//             for (let i = AYS.employees.length - 1; i >= pos; i--) {
//                 if(AYS.employees[i].eId === id|| AYS.employees[i].eEmail === email || AYS.employees[i].name === eName ){
//                     AYS.employees[i + 1] = AYS.employees[i];
//                     AYS.employees[i] = myData;
//                 }else {
//                     console.log("employee already exists !")
//                 }

//         }
//     }


//     del_emp(del_data) {
//         // let data = del_data;

//         for (let i = 0; i < AYS.employees.length; i++) {
//             if (AYS.employees[i].eId ===  del_data || AYS.employees[i].eEmail === del_data || AYS.employees[i].eName === del_data) {
//                 AYS.employees.pop(AYS.employees[i])
//                 //AYS.employees[i + 1] = AYS.employees[i];
//             }
//         }
//     }

//     search_emp(ser_id) {
//         // let search_id = ser_id;

//         for (let i = 0; i < AYS.employees.length; i++) {
//             if (AYS.employees[i].eId === ser_id || AYS.employees[i].eEmail || AYS.employees[i].eName | AYS.employees[i].eSalary == ser_id) {
//                 console.log(AYS.employees[i]);
//             }
//         }
//     }

//     update_emp() {
//         // check if you can add code in the add new obj function 
//     }




    // commit(Y) {
    //     if (Y) {
    //         fs.writeFile('./comp_data.json', JSON.stringify(AYS), err => {
    //             if (err) {
    //                 console.log("compnay name not cahnge")
    //             }
    //             else {
    //                 console.log("succ")
    //             }
    //         })
    //     }
    //     else {
    //         console.log("err")
    //     }
    // }


// }

// let comp = new AYS_softs()
// comp.add_employee(110, "aman kazi", "aman.kazi@com", "intern", 10000, 0)
// comp.del_emp("aman")
// comp.search_emp("aman")






// console.log(AYS.employees)






// NEW CODE FOR CRUDE OPERATIONS *****************************************************************************





comp.commit(true);