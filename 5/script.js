const users = [
    { id: '1', name: 'John Smith', age: 20, hasDog: true },
    { id: '2', name: 'Ann Smith', age: 24, hasDog: false },
    { id: '3', name: 'Tom Jones', age: 31, hasDog: true },
    { id: '4', name: 'Rose Peterson', age: 17, hasDog: false },
    { id: '5', name: 'Alex John', age: 25, hasDog: true },
    { id: '6', name: 'Ronald Jones', age: 63, hasDog: true },
    { id: '7', name: 'Elton Smith', age: 16, hasDog: true },
    { id: '8', name: 'Simon Peterson', age: 30, hasDog: false },
    { id: '9', name: 'Daniel Cane', age: 51, hasDog: true },
  ];
  
  function filterDogOwers(array){
    console.log(array.filter( item => item.hasDog));
  }
  filterDogOwers(users);
  
  function filterAdults(array){
    console.log(array.filter( item => item.age >= 18))
  }
  
  filterAdults(users);