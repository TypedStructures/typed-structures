import {Queue} from './src';
import {TsQ} from './src/tsQ/tsQ';

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


let q: Queue<SponsoredPerson> = new Queue<SponsoredPerson>();
q.enqueue(f);
q.enqueue(g);
q.enqueue(h);
q.enqueue(i);
q.enqueue(j);

console.log(TsQ
    .from(q)
    // .order_by('name', 'desc')
    // .order_by('subscription_date', 'desc')
    .order_by('sponsor', 'desc')
    .toArray()
    .map((person: Person) => person.id)
);