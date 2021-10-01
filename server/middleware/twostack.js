class Stack {
  #items = []
  push = (element) => this.#items.push(element)
  pop = () => this.#items.pop()
  isempty = () => this.#items.length === 0
  empty = () => (this.#items.length = 0)
  size = () => this.#items.length
  print = () => this.#items.reduce((a,c) => a + c, '')
}

const a = new Stack();
a.push(1);
a.push(2);
console.log(a.size());
console.log(a.print());
console.log(a.pop());
console.log(a.empty());
console.log(a.print());

function TwoStackQueue() {
  this.firstStack = new Stack()
  this.secondStack = new Stack()
}

TwoStackQueue.prototype.enqueue = function(element){
  this.firstStack.push(element)
}

TwoStackQueue.prototype.dequeue = function(element){
  if(this.secondStack.isempty()){
    while(!this.firstStack.isempty()){
      this.secondStack.push(this.firstStack.pop())
    }
  }
  return this.secondStack.pop()
}

//test
q = new TwoStackQueue()

q.enqueue('hello')
q.enqueue('world')
console.log(q.dequeue()) // 'hello'
