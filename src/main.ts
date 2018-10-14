import { DoublyLinkedList } from './linked-list/doubly-linked-list/doubly-linked-list';

let list = new DoublyLinkedList<number>();
list.unshift(2);
list.unshift(3);
list.remove(2);
console.log(list);