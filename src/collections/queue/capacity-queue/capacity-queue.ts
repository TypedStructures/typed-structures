import { Queue } from "../queue";
import { ICapacityQueue } from "./capacity-queue-interface";
import { CapacityFullException } from "../../../exceptions/capacity-full-exception";

export class CapacityQueue<T> extends Queue<T> implements ICapacityQueue {

    private readonly _capacity: number;

    constructor(capacity: number) {
        super();
        this._capacity = capacity;
    }

    capacity(): number {
        return this._capacity;
    }

    isFull(): boolean {
        return this.length() >= this._capacity ? true : false;
    }

    enqueue(item: T): void {
        if (this._items.length() < this.capacity()) {
            this._items.push(item);
        } else {
            throw new CapacityFullException('Capacity Full')
        }
    }

}