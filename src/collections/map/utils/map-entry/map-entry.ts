import { hash } from '../../../../util/hash';
import { flattenObject } from '../../../../util/flatten';
import { IMapEntry } from '../../../..';

export class MapEntry<K, V> implements IMapEntry<K, V> {

    private _key: K;
    private _value: V;

    constructor(key: K, value: V) {
        this._value = value;
        this._key = key;
    }

    equals(o: any): boolean {
        return (this.getKey() === null ? o.getKey() === null : this.getKey() === o.getKey()) &&
            (this.getValue() === null ? o.getValue() === null : this.getValue() === o.getValue());
    }

    getKey(): K {
        return this._key;
    }

    getValue(): V {
        return this._value;
    }

    hashCode(): number {
        let key: string = typeof this._key === 'object' ? typeof (<any>this._key).hashCode === 'function' ? (<any>this._key).hashCode() : flattenObject(this._key) : this._key;
        let value: string = typeof this._value === 'object' ? typeof (<any>this._value).hashCode === 'function' ? (<any>this._value).hashCode() : flattenObject(this._value) : this._value;

        return hash( <string>key + <string>value);
    }

    setValue(value: V): V {
        let old: V = this.getValue();
        this._value = value;
        return old;
    }

}