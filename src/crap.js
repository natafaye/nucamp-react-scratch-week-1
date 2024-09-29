function addNumbers1(a, b) {
    return a + b
  }
  
  
  const variable = number => number + 1
  
  
  
  
  
  function mySpecialFunction(a, b) {
    console.log(a, b)
  }
  
  const addNumbers = (a, b) => a + b
  
  const greeting = "hello"
  
  mySpecialFunction(addNumbers, greeting) // mySpecialFunction((a, b) => a + b, "hello")
  
  
  
  
  function anotherSpecialFunction() {
    return (number) => number + 1
  }
  
  //console.log(anotherSpecialFunction())
  
  
  
  // map Array Method = (array, callback) => {
  //   const mappedArray = []
  //   for(let i = 0; i < array.length; i++) {
  //     const newVersionOfItem = callback(array[i])
  //     mappedArray.push(newVersionOfItem)
  //   }
  //   return mappedArray
  // }