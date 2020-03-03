'use strict';

function multiBracketValidation(input){
  const bracketStr = input.split('').filter(char => '{}[]()'.includes(char)).join('');
  const stack = [];
  const map = {
    ')' : '(',
    ']' : '[',
    '}' : '{'
  }
  for(let char of bracketStr){
    if('{(['.includes(char)){
      stack.push(char)
    }
    else{
      let popped = stack.pop();
      if(popped !== map[char]){
        return false;
      }
    }
  }
  return stack.length === 0;
}
multiBracketValidation('(){}[]codefellows[]');
