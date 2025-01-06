const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null; // Голова очереди (начало списка)
    this.tail = null; // Хвост очереди (конец списка)
  }

  // Метод для добавления элемента в конец очереди
  enqueue(value) {
    const newNode = new ListNode(value); // Создаем новый узел
    if (!this.tail) { // Если очередь пуста
      this.head = newNode; // Новый узел будет и головой, и хвостом
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // Добавляем новый узел в конец очереди
      this.tail = newNode; // Обновляем хвост
    }
  }

  // Метод для извлечения и удаления элемента из начала очереди
  dequeue() {
    if (!this.head) return undefined; // Если очередь пуста, возвращаем undefined
    const value = this.head.value; // Сохраняем значение первого элемента
    this.head = this.head.next; // Перемещаем голову очереди на следующий элемент
    if (!this.head) {
      this.tail = null; // Если очередь пуста после удаления, хвост тоже становится null
    }
    return value; // Возвращаем значение первого элемента
  }

  // Метод для получения underlying linked list (связанного списка)
  getUnderlyingList() {
    return this.head; // Возвращаем голову списка
  }
}

module.exports = {
  Queue
};
