//basic data model
let userObj = {
  personalData: {
    name: 'alireza',
    family: null,
    age: 27,
  },
  job: 'programmer',
};

let userArray = ['ahmad', 'hasan'];

//Export Data From Array
let [ahmadName, hasanName, abbasName = 'abbas'] = userArray;

//Change And Import Data In Obj With Rest And Destructure
copyUserArray = ['taha', ...userArray];

//Export Data From Object
const {
  personalData: { name, family: userFamily = 'babaei', age },
  job,
} = userObj;

//Change And Import Data In Array With Rest And Destructure
const copyUser = {
  ...userObj,
  personalData: {
    ...userObj.personalData,
    family: 'babaei',
    age: 25,
  },
};

//show result
// console.log(ahmadName, hasanName, abbasName);
// console.log(copyUserArray);
// console.log(name, userFamily, age, job);
// console.log(userObj);
// console.log(copyUser);
