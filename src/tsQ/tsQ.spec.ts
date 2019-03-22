import { TsQ } from './tsQ';
import {DoublyLinkedList, GenericRingBuffer, SinglyLinkedList, Map, Queue, Set, Stack, IStack} from '..';
import {NoSuchPropertyException} from '../exceptions/no-such-property-exception';
import {NoDecoratorException} from '../exceptions/no-decorator-exception';

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

class Person {
    protected _id: number;
    protected _name: string;
    protected _surname: string;
    protected _subscription_date: Date;
    protected _price: number;

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

let Pa = new Person(1, 'A', 'A', new Date('0000-01-01'), 0);
let Pb = new Person(2, 'A', 'A', new Date('0000-01-02'), 0);
let Pc = new Person(3, 'A', 'A', new Date('0000-01-03'), 0);
let Pd = new Person(4, 'B', 'A', new Date('0000-01-01'), 0);
let Pe = new Person(5, 'B', 'A', new Date('0000-01-02'), 0);
let Pf = new Person(6, 'B', 'A', new Date('0000-01-03'), 0);

class SponsoredPerson extends Person {
    private _sponsor: Person;

    constructor(id: number, name: string, surname: string, date: Date, price: number, sponsor: Person) {
        super(id, name, surname, date, price);
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

let Pg = new SponsoredPerson(1, 'Dubois', 'Simon', new Date('2012-02-23'), 27, Pa);
let Ph = new SponsoredPerson(2, 'Dubois', 'Chloé', new Date('2012-02-16'), 98, Pb);
let Pi = new SponsoredPerson(3, 'Durant', 'Fabienne', new Date('2012-02-13'), 90, Pc);
let Pj = new SponsoredPerson(4, 'Dupond', 'Fabrice', new Date('2012-02-07'), 65, Pd);
let Pk = new SponsoredPerson(5, 'Durant', 'Maurice', new Date('2012-02-05'), 145, Pe);
let Pl = new SponsoredPerson(6, 'Durant', 'Maurice', new Date('2012-02-05'), 145, Pf);



describe('from', function () {
    it('should return an *identity* function for all types', function () {
        expect(TsQ.from(b).fetch()).toEqual([1, 2]);
        expect(TsQ.from(c).fetch()).toEqual([1, 2]);
        expect(TsQ.from(d).fetch()).toEqual([1, 2]);
        expect(TsQ.from(e).fetch()).toEqual([1, 2]);
        expect(TsQ.from(f).fetch()).toEqual([1, 2]);
        expect(TsQ.from(g).fetch()).toEqual([1, 2]);
        expect(TsQ.from(h).fetch().reverse()).toEqual([1, 2]);
    });
});

describe('where', function () {
    it('should filters element equal to 1', function () {
        expect(
            TsQ
                .from(b)
                .where(e => e < 2)
                .fetch()
        ).toEqual([1]);

        expect(
            TsQ
                .from(c)
                .where(e => e < 2)
                .fetch()
        ).toEqual([1]);

        expect(
            TsQ
                .from(d)
                .where(e => e < 2)
                .fetch()
        ).toEqual([1]);

        expect(
            TsQ
                .from(e)
                .where(e => e < 2)
                .fetch()
        ).toEqual([1]);

        expect(
            TsQ
                .from(f)
                .where(e => e < 2)
                .fetch()
        ).toEqual([1]);

        expect(
            TsQ
                .from(g)
                .where(e => e < 2)
                .fetch()
        ).toEqual([1]);

        expect(
            TsQ
                .from(h)
                .where(e => e < 2)
                .fetch()
        ).toEqual([1]);
    });
});

describe('order_by', function () {

    it('should order embedded objects', function () {
        let q: Queue<SponsoredPerson> = new Queue<SponsoredPerson>();
        q.enqueue(Pg);
        q.enqueue(Ph);
        q.enqueue(Pi);
        q.enqueue(Pj);
        q.enqueue(Pk);
        q.enqueue(Pl);

        expect(
            TsQ
                .from(q)
                .order_by('name', 'desc')
                .order_by('subscription_date', 'desc')
                .order_by('sponsor', 'desc')
                .order_by('id')
                .fetch()
                .map((person: Person) => person.id)
        ).toEqual([3, 6, 5, 4, 2, 1]);

        expect(
            TsQ
                .from(q)
                .order_by('id')
                .fetch()
                .map((person: Person) => person.id)
        ).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should order embedded objects', function () {
        let q: Queue<SponsoredPerson> = new Queue<SponsoredPerson>();
        q.enqueue(Pg);
        q.enqueue(Ph);
        q.enqueue(Pi);
        q.enqueue(Pj);
        q.enqueue(Pk);
        q.enqueue(Pl);

        expect(
            TsQ
                .from(q)
                .order_by('sponsor', 'asc')
                .fetch()
                .map((person: Person) => person.id)
        ).toEqual([4, 5, 6, 1, 2, 3]);
    });

    it('should order in the right order of provided clauses', function () {
        let q: Queue<Person> = new Queue<Person>();
        q.enqueue(Pa);
        q.enqueue(Pb);
        q.enqueue(Pc);
        q.enqueue(Pd);
        q.enqueue(Pe);
        q.enqueue(Pf);

        expect(
            TsQ
                .from(q)
                .order_by('name')
                .order_by('subscription_date')
                .fetch()
        ).toEqual([Pc, Pb, Pa, Pf, Pe, Pd]);
    });
});

describe('select', function () {
    it('should filter with getter name', function () {
        let q: Queue<Person> = new Queue<Person>();
        q.enqueue(Pa);
        q.enqueue(Pb);
        q.enqueue(Pc);
        q.enqueue(Pd);
        q.enqueue(Pe);
        q.enqueue(Pf);

        let res: string[] = [];

        TsQ
            .from(q)
            .select('name')
            .fetch()
            .forEach((p: Person) => {
                res.push(p.name);
            });

        expect(res).toEqual(['A', 'A', 'A', 'B', 'B', 'B']);
    });

    it('should throw an exception if the field does not exist', function () {
        let q: Queue<Person> = new Queue<Person>();
        q.enqueue(Pa);
        q.enqueue(Pb);
        q.enqueue(Pc);
        q.enqueue(Pd);
        q.enqueue(Pe);
        q.enqueue(Pf);

        expect(
            () => TsQ
                .from(q)
                .select('test')
                .fetch()
                .map((p: Person) => p.name)
        ).toThrow(new NoSuchPropertyException('The specified property "test" does not exist in the data provided collection'));
    });

    it('should handle key\'ed classes', function () {
        let q: GenericRingBuffer<Person> = new GenericRingBuffer<Person>(6, 5, 0, 0, 0);
        q.put(Pa);
        q.put(Pb);
        q.put(Pc);
        q.put(Pd);
        q.put(Pe);
        q.put(Pf);

        expect(
            TsQ
                .from(q)
                .select('name')
                .fetch()
                .map((p: Person) => p.name)
        ).toEqual(['A', 'A', 'A', 'B', 'B', 'B']);
    });
});

describe('group_by', function() {
    it('should group', function () {
        let q: GenericRingBuffer<Person> = new GenericRingBuffer<Person>(6, 5, 0, 0, 0);
        q.put(Pa);
        q.put(Pb);
        q.put(Pc);
        q.put(Pd);
        q.put(Pe);
        q.put(Pf);

        expect(
            TsQ
                .from(q)
                .group_by('name')
                .fetch()[0]
        ).toEqual([Pa, Pb, Pc]);

        expect(
            TsQ
                .from(q)
                .group_by('name')
                .fetch()[1]
        ).toEqual([Pd, Pe, Pf]);
    });
});

describe('no decorator', function () {
    it('should throw an exception', function () {

        class NoDecoratorStack<T> implements IStack<T> {

            private _items: SinglyLinkedList<T>;

            constructor() {
                this._items = new SinglyLinkedList<T>();
            }

            public length() {
                return this._items.length();
            }

            public stack(item: T): void {
                this._items.unshift(item);
            }

            public unstack(): T {
                return this._items.shift();
            }

            public peek(): T {
                return this._items.peek();
            }

            public empty(): boolean {
                return this._items.empty();
            }

            public toArray(): T[] {
                return this._items.toArray();
            }
        }

        let nds = new NoDecoratorStack<Person>();

        nds.stack(Pa);

        expect(() => TsQ.from(nds).fetch()).toThrow(new NoDecoratorException('TsQ decorator is missing from class NoDecoratorStack'));
    });
});
