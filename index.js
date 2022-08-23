class name {
  _name;
  // constructor() {
  //   _name = 'alireza';
  // }

  set fullName(name) {
    this._name = name;
  }

  getName() {
    console.log(this._name);
  }
}

const alireza = new name();
alireza.fullName = 'alireza';
alireza.getName();

