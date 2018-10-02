import { SinglyLinkedList } from './linked-list/singly-linked-list/singly-linked-list';

let list = new SinglyLinkedList<number>();
list.push(5);
list.push(6);
// list.forEach( (item: number, index: number, array: SinglyLinkedList<number>) => console.log(item * 2, index, array));
// console.log(list.filter( (item: number, index: number, array: SinglyLinkedList<number>) => item === 5).length());
console.log(list.indexOf(7));