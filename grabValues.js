const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  function grabKeys(obj){
    let arr = []
    for(key in obj){
        arr.push(obj[key])
    }
    return arr;
  }
  console.log(grabKeys(object1))
  //output
  //[ 'somestring', 42, false ]