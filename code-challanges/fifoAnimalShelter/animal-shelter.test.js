'use strict';

const Animals = require('./fifo-animal-shelter');
const animal = new Animals();


describe('Can add animals to the shelter', () => {
  it('You can add an animal to the shelter', () => {
    const newShelterAnimal = {type: 'dog', name: 'Olive', age: 'Puppy'}
    animal.enqueue(newShelterAnimal);
    expect(animal.dog.stackOne.storage).toEqual([{type: 'dog', name: 'Olive', age: 'Puppy'}]);
  })
});

describe('Can adopt a pet from the shelter', () => {
  it('You can get your new pet', () => {
    animal.enqueue({type: 'cat', name: 'Boots', age: 'Kitten'});
    animal.enqueue({type: 'dog', name: 'Tanya', age: 'Adult'});
    animal.dequeue('dog');
    expect(animal.dog.stackTwo.storage).toEqual([{type: 'dog', name: 'Tanya', age: 'Adult'}])
  })
});
