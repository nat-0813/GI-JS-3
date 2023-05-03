// HARD: Data security exercise. Inside of a closure, 
// create an object called pii (Personally Identifiable Information)that cannot be accessed directly. 
// The object should have at least two properties: name and ssn. 
// Only the name property should be accessible, 
// and it should be called through a public function. The ssn property should not be accessible at all.
// Creating private objects and private properties helps you control who has access to what data and helps you prevent people who shouldn't see important info like social security numbers from getting access to the data.
// You can use 'getName' or other get methods to access data that people might need. For example, people addressing a package or email may need a customer's name, but they definitely shouldn't have access to their ssn.

function createPerson(name, ssn) { //function with parameters, "name" and "ssn" and returns an object with a "getName"
    var pii = {name: name, ssn: ssn};// inside createPerson function an object named 'pii' is created with two properties "name" and "ssn"
    
    return {//"getname" on  object returned by 'create person', 
      getName: function() {
        return pii.name;//returns name and property of pii object
      }
    };
  }
  
  var person = createPerson("John Doe", "123-45-6789");
  console.log(person.getName()); // prints "John Doe"
  console.log(person.ssn); // prints "undefined"
  