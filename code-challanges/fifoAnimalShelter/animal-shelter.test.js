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
