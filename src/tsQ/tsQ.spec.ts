import { TsQ } from './tsQ';
import {DoublyLinkedList, GenericRingBuffer, SinglyLinkedList, Map, Queue, Set, Stack} from '..';

let b: GenericRingBuffer<number> = new GenericRingBuffer<number>(2, 1, 0, 0, 0);
b.put(1);
b.put(2);

let c: SinglyLinkedList<number> = new SinglyLinkedList<number>();
c.push(1);
c.push(2);

let d: DoublyLinkedList<number> = new DoublyLinkedList<number>();
d.push(1);
d.push(2);

let e: Map<number, number> = new Map<number, number>();
e.put(1, 1);
e.put(2, 2);

let f: Queue<number> = new Queue<number>();
f.enqueue(1);
f.enqueue(2);

let g: Set<number> = new Set<number>();
g.add(1);
g.add(2);

let h: Stack<number> = new Stack<number>();
h.stack(1);
h.stack(2);

describe('from', function () {
    it('should return an *identity* function for all types', function () {
        expect(TsQ.from(b).toArray()).toEqual([1, 2]);
        expect(TsQ.from(c).toArray()).toEqual([1, 2]);
        expect(TsQ.from(d).toArray()).toEqual([1, 2]);
        expect(TsQ.from(e).toArray()).toEqual([1, 2]);
        expect(TsQ.from(f).toArray()).toEqual([1, 2]);
        expect(TsQ.from(g).toArray()).toEqual([1, 2]);
        expect(TsQ.from(h).toArray().reverse()).toEqual([1, 2]);
    });
});

describe('where', function () {
    it('should filters element equal to 1', function () {
        expect(
            TsQ
                .from(b)
                .where(e => e < 2)
                .toArray()
        ).toEqual([1]);

        expect(
            TsQ
                .from(c)
                .where(e => e < 2)
                .toArray()
        ).toEqual([1]);

        expect(
            TsQ
                .from(d)
                .where(e => e < 2)
                .toArray()
        ).toEqual([1]);

        expect(
            TsQ
                .from(e)
                .where(e => e < 2)
                .toArray()
        ).toEqual([1]);

        expect(
            TsQ
                .from(f)
                .where(e => e < 2)
                .toArray()
        ).toEqual([1]);

        expect(
            TsQ
                .from(g)
                .where(e => e < 2)
                .toArray()
        ).toEqual([1]);

        expect(
            TsQ
                .from(h)
                .where(e => e < 2)
                .toArray()
        ).toEqual([1]);
    });
});

describe('order_by', function () {

    class Person {
        private _id: number;
        private _name: string;
        private _surname: string;
        private _subscription_date: Date;
        private _price: number;

        constructor(id: number, name: string, surname: string, date: Date, price: number) {
            this._id = id;
            this._name = name;
            this._surname = surname;
            this._subscription_date = date;
            this._price = price;
        }

        get id(): number {
            return this._id;
        }

        set id(value: number) {
            this._id = value;
        }

        get name(): string {
            return this._name;
        }

        set name(value: string) {
            this._name = value;
        }

        get subscription_date(): Date {
            return this._subscription_date;
        }

        set subscription_date(value: Date) {
            this._subscription_date = value;
        }

        get price(): number {
            return this._price;
        }

        set price(value: number) {
            this._price = value;
        }

        get surname(): string {
            return this._surname;
        }

        set surname(value: string) {
            this._surname = value;
        }
    }

    let a = new Person(5, 'Dubois', 'Simon', new Date('2012-02-23'), 27);
    let b = new Person(4, 'Dubois', 'Chloé', new Date('2012-02-16'), 98);
    let c = new Person(3, 'Durant', 'Fabienne', new Date('2012-02-13'), 90);
    let d = new Person(2, 'Dupond', 'Fabrice', new Date('2012-02-07'), 65);
    let e = new Person(1, 'Durant', 'Maurice', new Date('2012-02-05'), 145);

    it('should order in the right order of provided clauses', function () {
        let q: Queue<Person> = new Queue<Person>();
        q.enqueue(a);
        q.enqueue(b);
        q.enqueue(c);
        q.enqueue(d);
        q.enqueue(e);

        expect(
            TsQ
                .from(q)
                .order_by('name', 'desc')
                .order_by('subscription_date', 'desc')
                .toArray()
                .map((person: Person) => person.id)
        ).toEqual([5, 4, 3, 2, 1]);
    });

    class SponsoredPerson {
        private _id: number;
        private _name: string;
        private _surname: string;
        private _subscription_date: Date;
        private _price: number;
        private _sponsor: Person;

        constructor(id: number, name: string, surname: string, date: Date, price: number, sponsor: Person) {
            this._id = id;
            this._name = name;
            this._surname = surname;
            this._subscription_date = date;
            this._price = price;
            this._sponsor = sponsor;
        }

        get id(): number {
            return this._id;
        }

        set id(value: number) {
            this._id = value;
        }

        get name(): string {
            return this._name;
        }

        set name(value: string) {
            this._name = value;
        }

        get subscription_date(): Date {
            return this._subscription_date;
        }

        set subscription_date(value: Date) {
            this._subscription_date = value;
        }

        get price(): number {
            return this._price;
        }

        set price(value: number) {
            this._price = value;
        }

        get surname(): string {
            return this._surname;
        }

        set surname(value: string) {
            this._surname = value;
        }

        get sponsor(): Person {
            return this._sponsor;
        }

        set sponsor(value: Person) {
            this._sponsor = value;
        }
    }

    let f = new SponsoredPerson(5, 'Dubois', 'Simon', new Date('2012-02-23'), 27, a);
    let g = new SponsoredPerson(4, 'Dubois', 'Chloé', new Date('2012-02-16'), 98, b);
    let h = new SponsoredPerson(3, 'Durant', 'Fabienne', new Date('2012-02-13'), 90, c);
    let i = new SponsoredPerson(2, 'Dupond', 'Fabrice', new Date('2012-02-07'), 65, d);
    let j = new SponsoredPerson(1, 'Durant', 'Maurice', new Date('2012-02-05'), 145, e);

    it('should order embedded objects', function () {
        let q: Queue<SponsoredPerson> = new Queue<SponsoredPerson>();
        q.enqueue(f);
        q.enqueue(g);
        q.enqueue(h);
        q.enqueue(i);
        q.enqueue(j);

        expect(
            TsQ
                .from(q)
                // .order_by('name', 'desc')
                // .order_by('subscription_date', 'desc')
                .order_by('sponsor', 'desc')
                .toArray()
                .map((person: Person) => person.id)
        ).toEqual([5, 4, 3, 2, 1]);
    });
});