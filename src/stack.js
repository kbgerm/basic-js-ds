const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = []; // Инициализируем пустой массив для хранения элементов стека
  }

  // Метод для добавления элемента в стек
  push(element) {
    this.stack.push(element);
  }

  // Метод для удаления и возвращения верхнего элемента стека
  pop() {
    return this.stack.pop();
  }

  // Метод для получения верхнего элемента без его удаления
  peek() {
    return this.stack[this.stack.length - 1];
  }

  // Метод для проверки, пуст ли стек
  isEmpty() {
    return this.stack.length === 0;
  }
}

module.exports = {
  Stack
};
