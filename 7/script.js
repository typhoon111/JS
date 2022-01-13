const audi = {
    make: 'audi',
    model: 'A6',
    year: 2005,
    color: 'white',
  };
 
  function showObjectKeys(object) {
    let keys = [];
  
    for (i in object) {
      keys.push(i)
    }
    return keys
  }