// linkedlist is a collection of nodes
// each node will have reference to the next one

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newnode = new Node(val);
    if (!this.head) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      this.tail.next = newnode;
      this.tail = newnode;
    }
    this.length++;
    return this;
  }
  pop(val) {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    // if(!this.head.next) return this.pop();
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  unshift(val) {
    const newnode = new Node(val);
    const current = this.head;
    if (!current) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      newnode.next = current;
      this.head = newnode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let i = 0;
    let current = this.head;
    while (i !== index) {
      // console.log(i, current.val);
      current = current.next;
      i++;
    }
    return current;
  }
  set(index, val) {
    const getitem = this.get(index);
    if (!getitem) return null;
    getitem.val = val;
    return getitem;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) {
      return this.unshift(val);
    }
    if (index === this.length) {
      return this.push(val);
    }
    const newnode = new Node(val);
    const getitem = this.get(index - 1);
    newnode.next = getitem.next;
    getitem.next = newnode;
    this.length++;
    return this;
  }
  remove(index) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    const previtem = this.get(index - 1);
    const getitem = this.get(index);
    previtem.next = getitem.next;
    this.length--;
    return getitem;
  }
  reverse(){
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = null;
    let prev = null;
    for(let i = 0; i < this.length; i++){
      // console.log('==============');
      // console.log(node, next, prev, i);
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
      // console.log(node, next, prev, i);
      // console.log('==============');
    }
    return this;
  }
  print(){
      var arr = [];
      var current = this.head
      while(current){
          arr.push(current.val)
          current = current.next
      }
      console.log(arr);
  }
}

const nsl = new SinglyLinkedList();
nsl.push('test');
nsl.push('test22');
/* console.log(nsl.pop())
console.log(nsl);
console.log(nsl.pop())
console.log(nsl);
console.log(nsl.pop())
console.log(nsl);
nsl.push('test');
nsl.push('test22');
console.log(nsl);
console.log(nsl.shift())
console.log(nsl);
console.log(nsl.shift())
console.log(nsl);
console.log(nsl.shift()) */
console.log(nsl);
nsl.unshift('bharath');
console.log(nsl);
// console.log(nsl.head.next);
console.log(nsl.get(1));
console.log(nsl.set(1, 'vemika'));
nsl.insert(1, 'mom');
// console.log(nsl);
// console.log(nsl.length);
/* 
console.log(nsl.get(0));
console.log(nsl.get(1));
console.log(nsl.get(2));
console.log(nsl.get(3)); */
nsl.insert(4, 'dad');
// console.log(nsl.get(3));
// console.log(nsl.get(4));
// nsl.remove(1);
/* console.log('---------------');
console.log(nsl.get(0));
console.log(nsl.get(1));
console.log(nsl.get(2));
console.log(nsl.get(3));
console.log(nsl.get(4)); */
console.log(nsl.reverse());
/* console.log('==============');
console.log(nsl.get(0));
console.log(nsl.get(1));
console.log(nsl.get(2));
console.log(nsl.get(3));
console.log(nsl.get(4)); */