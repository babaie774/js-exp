let user = {
  personalData: {
    name: 'alireza',
    family: null,
    age: 27,
  },
  job: 'programmer',
};

user = {
  ...user,
  personalData: {
    ...user.personalData,
    age: 25,
  },
};

console.log(user);
