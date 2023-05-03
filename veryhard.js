class Person {//"person" constructor takes 3 arguments "name", "job",and "age"
    constructor(name, job, age) {
      this.name = name; // set properties on "person" object
      this.job = job; // "person" constructor defines "exercise"
      this.age = age;// "fetchJob" to log messages to console
    }
    
    exercise() {
      console.log('Running is fun! - said no one ever');
    }
    
    fetchJob() {
      console.log(`${this.name} is a ${this.job}`);
    }
  }
  
  class Programmer extends Person { // extend programmer and person with 'extends'
    constructor(name, job, age, languages) { // also use "languages" argument
      super(name, job, age); // stored on the 'programmer' object
      this.languages = languages;
      this.busy = true; // "programmer" constructor sets 'busy' property on "programmer" object to 'true' 
    }
    // 'programmer' constrcutor defines several methods below
    completeTask() {
      this.busy = false;
    }
    
    acceptNewTask() {
      this.busy = true; 
    }
    
    offerNewTask() {
      if (this.busy) {
        console.log(`${this.name} can't accept any new tasks right now.`);
      } else {
        console.log(`${this.name} would love to take on a new responsibility.`);
      }
    }
    
    learnLanguage(language) {
      this.languages.push(language);
    }
    
    listLanguages() {
      console.log(`${this.name} knows ${this.languages.join(', ')}`);
    }
  }
  
  let tyler = new Person('Tyler', 'Manager', 35);
  tyler.fetchJob(); // prints "Tyler is a Manager"
  tyler.exercise(); // prints "Running is fun! - said no one ever"
  
  let eric = new Programmer('Eric', 'Developer', 25, ['JavaScript', 'Python']);
  eric.fetchJob(); // prints "Eric is a Developer"
  eric.exercise(); // prints "Running is fun! - said no one ever"
  eric.offerNewTask(); // prints "Eric can't accept any new tasks right now."
  eric.completeTask();
  eric.offerNewTask(); // prints "Eric would love to take on a new responsibility."
  eric.learnLanguage('Java');
  eric.listLanguages(); // prints "Eric knows JavaScript, Python, Java"
  