describe("Tests for Question 1. The function outputSimpleMsg", function() {  
  beforeEach(function(){
    spyOn(console, 'log');
  })
    
  it("should display 'hello world' in the console",function(){
    outputSimpleMsg()
    expect(console.log).toHaveBeenCalled();
    expect(console.log.calls.argsFor(0)).toEqual(['hello world']);
  });
});


describe("Tests for Question 2. The function outputMsg", function() {  
  beforeEach(function(){
    spyOn(console, 'log');
  })
    
  it("should display 'You entered xxxx' in the console when called with an argument of 'xxxx'",function(){
    outputMsg('red')
    expect(console.log).toHaveBeenCalled();
    expect(console.log.calls.argsFor(0)).toEqual(['You entered red']);   
  });
    
});

describe("Tests for Question 3. The function addTwoNumbers", function() {  
  beforeEach(function(){
    spyOn(console, 'log');
  })
    
  it("should display the total of two numbers when passed two numbers as arguments",function(){
    addTwoNumbers(6, 2)
    expect(console.log).toHaveBeenCalled();
    expect(console.log.calls.argsFor(0)).toEqual([8]);
  });

});

describe("Tests for Question 4. The function outputPositiveNumbers", function() {  
  beforeEach(function(){
    spyOn(console, 'log');
  })
    
  it("should output separate console messages when called with an array of positive numbers",function(){
    outputPositiveNumbers([3,5,23,643])
    expect(console.log.calls.count()).toEqual(4);
    expect(console.log.calls.argsFor(0)).toEqual([3]);
    expect(console.log.calls.argsFor(1)).toEqual([5]);
    expect(console.log.calls.argsFor(2)).toEqual([23]);
    expect(console.log.calls.argsFor(3)).toEqual([643]);
  });
    
  it("should not output negative numbers",function(){
    outputPositiveNumbers([-3,5,-23,643])
    expect(console.log.calls.count()).toEqual(2);
    expect(console.log.calls.argsFor(0)).toEqual([5]);
    expect(console.log.calls.argsFor(1)).toEqual([643]);
  });
    
  it("should not output 0 as a positive number",function(){
    outputPositiveNumbers([0])
    expect(console.log.calls.count()).toEqual(0);
  });

})

describe("Tests for Question 5. The function printPassed", function() {  
  beforeEach(function(){
    spyOn(console, 'log');
  })
    
  it('should display "xxxx has passed" in the console if the student has a mark of 40 or above',function(){
    printPassed({name:"Zofia",course:"BAIM", mark:72});
    expect(console.log).toHaveBeenCalled();
    expect(console.log.calls.argsFor(0)).toEqual(['Zofia has passed']);
  });
    
it('should display "xxxx has failed" if the student has a mark less than 40',function(){
    printPassed({name:"Zofia",course:"BAIM", mark:39});
    expect(console.log).toHaveBeenCalled();
    expect(console.log.calls.argsFor(0)).toEqual(['Zofia has failed']);
  });
    
it('should display "xxxx has passed" if the student has a mark of 40',function(){
    printPassed({name:"Imran",course:"ICT", mark:40});
    expect(console.log).toHaveBeenCalled();
    expect(console.log.calls.argsFor(0)).toEqual(['Imran has passed']);
  });
});

describe("Tests for Question 6. The function simpleLogin", function() {  
  it("should return true when passed valid login details",function(){
    expect(simpleLogin('user','letmein')).toEqual(true);
  });
 
  it("should return false when passed an incorrect username",function(){
    expect(simpleLogin('user','anotherpassword')).toEqual(false);
  });
    
  it("should return false when passed an incorrect password",function(){
    expect(simpleLogin('anotheruser','letmein')).toEqual(false);
  });
    
});

describe("Tests for Question 7. The function addTen", function() {  
  it("should return a number 10 more than the argument",function(){
    expect(addTen(1)).toEqual(11);
  });

  it("should work with negative numbers",function(){
    expect(addTen(-5)).toEqual(5);
  });
    
});

describe("Tests for Question 8. The function addNumbers", function() {  
  it("should return the total of all numbers in an array",function(){
    expect(addNumbers([3,2,5])).toEqual(10);
  });
});

describe("Tests for Question 9. The function getPositiveNumbers",function(){
 it("should return an array of positive numbers",function(){
    expect(getPositiveNumbers([3,5,23,643])).toEqual([3,5,23,643])
  });
  it("shouldn't return negative numbers",function(){
    expect(getPositiveNumbers([-3,5,-23,643])).toEqual([5,643])
  });
    
  it("shouldn't return 0 as one of the numbers",function(){
    expect(getPositiveNumbers([3,5,0,643])).toEqual([3,5,643])
  });
   
});

describe("Tests for Question 10. The function addTen", function() {  
  it("should return undefined when passed a non numeric argument",function(){
    expect(addTen('hello')).toEqual(undefined);
  });  
});

describe("Tests for Question 11. The function validUserName", function() {  
  it("should return false when passed a string of length less than 6",function(){
    expect(validUserName('hello')).toEqual(false);
  });  
  it("should return true when passed a string with length greater 5",function(){
    expect(validUserName('testuser')).toEqual(true);
  }); 
  it("should return false when passed a non string argument",function(){
    expect(validUserName([2,123,'werty',21,'saw','azxcv'])).toEqual(false);
  }); 
    
});

describe("Tests for Question 12. The function createEl", function() { 
    var newElement = document.createElement('div');
    newElement.innerHTML='new content';
    it("should return an HTML element when passed a tag name and string as arguments",function(){
      expect(createEl('div','new content')).toEqual(newElement);
    });
});

describe("Tests for Question 13. The function buildList", function(){
  var newElement = document.createElement('ul');
  newElement.innerHTML='<li>q</li><li>w</li>';
  it("should return an HTML <ul> element when passed an array of strings",function(){
      expect(buildList(["q","w"])).toEqual(newElement);
  });
  it("should throw an error if passed an argument that isn't an array",function(){
      expect(buildList).toThrow();
  });
});
