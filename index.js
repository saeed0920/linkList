"use strict";

class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkList {
  constructor(value) {
    const newNode = new node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    const pushItem = new node(value);
    if (this.length > 0) {
      this.tail.next = pushItem;
      this.tail = pushItem;
      this.length++;
    } else {
      this.head = pushItem;
      this.tail = pushItem;
      this.length = 1;
    }
    return this;
  }
  pop() {
    if (this.length === 0) {
      console.log("Pop is doesn't work");
      return undefined;
    } else if (this.length === 1) {
      const temp = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return temp;
    } else if (this.length > 1) {
      let temp = this.head;
      let pre = this.head;
      while (temp.next !== null) {
        pre = temp;
        temp = temp.next;
      }
      this.tail = pre;
      this.tail.next = null;
      this.length--;
      return temp;
    }
  }

  unShift(value) {
    const unShiftItem = new node(value);
    if (this.length > 0) {
      unShiftItem.next = this.head;
      this.head = unShiftItem;
    } else {
      this.head = unShiftItem;
      this.tail = unShiftItem;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    } else if (this.length === 1) {
      const temp = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return temp;
    } else if (this.length > 1) {
      const temp = this.head;
      this.head = this.head.next;
      temp.next = null;
      this.length--;
      return temp;
    }
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index === 0) return this.unShift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;
    if (this.length === 0) return undefined;
    const insertItem = new node(value);
    let before = this.get(index - 1);
    let after = this.get(index);
    before.next = insertItem;
    insertItem.next = after;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const removeItem = this.get(index);
    const before = this.get(index - 1);
    before.next = removeItem.next;
    removeItem.next = null;
    this.length--;
    return removeItem;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next = temp.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}
