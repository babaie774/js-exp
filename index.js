function* numbers() {
    yield 1;
    yield 2;
    yield 3;
  
    return 4;
  }
  
  const items = numbers();
  
  for (num of items) {
    console.log(num)
  }