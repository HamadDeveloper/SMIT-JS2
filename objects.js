// var person = {
//     name : 'Hamad',
//     age : 23,
//     gender : 'Male',
// }

// console.log(person);

// var Fruits = {
//     color : 'red',
//     taste : 'sweet',
//     season : 'spring',
// }




// var Patient = {
//     id : '10',
//     name : 'Asad',
//     desease : 'Sugar',
//     hospital : 'RMI',
// }
//  delete Patient.hospital;
// console.log(Patient);

// console.log(Fruits);

var Patient1 = {id : '1', name : 'Hamad', desease : 'TB',}
var Patient2 = {id : '11', name : 'asad', desease : 'moye moye',}
var Patient3 = {id : '12', name : 'aslam', desease : 'typhoid',}
var Patient4 = {id : '13', name : 'waqas', desease : 'flu',}
var Patient5 = {id : '14', name : 'ali', desease : 'flu',}
var Patient6 = {id : '15', name : 'waqas', desease : 'moye moye',}
var Patient7 = {id : '16', name : 'jibran', desease : 'sugar',}
var Patient8 = {id : '17', name : 'khan', desease : 'aids',}

let patients = [Patient1,Patient2,Patient3,Patient4,Patient5,Patient6,Patient7,Patient7];

for (let i = 0 ; i<=patients.length; i++){
    for (key in patients[i]){
        if(key == 'desease'){
            if (patients[i][key] == 'moye moye'){
                console.log(patients[i][key], patients[i]['name'])
            }
        }
    }
}