class Queue{

}
class AnimalShelter{
  constructor(){
    this.dog = new Queue();
    this.cat = new Queue();
  }
  enqueue(animal){
    if(animal.type === 'cat'){
      this.cat.enqueue(animal)
    }
    if(animal.type === 'dog'){
      this.dog.enqueue(animal)
    }
  }
  dequeue(pref){
    if(pref === 'dog'){
      return this.dog.dequeue(pref);
    } else if (pref === 'cat'){
      return this.cat.dequeue(pref);
    } else {
      return null;
    }
  }
}
