import {MapEntryInterface} from './mapEntryInterface';

export class MapEntry<K, V> implements MapEntryInterface<K, V> {

    private _key: K;
    private _value: V;

    constructor(key: K, value: V) {
        this._value = value;
        this._key = key;
    }

    equals(o: any): boolean {
        return (this.getKey() === null ? o.getKey() === null : this.getKey() === o.getKey())  &&
            (this.getValue() === null ? o.getValue() === null : this.getValue() === o.getValue());
    }

    getKey(): K {
        return this._key;
    }

    getValue(): V {
        return this._value;
    }

    hashCode(): number {
        return 0;
        // FIXME: Find d way to get d hash
        // return (this.getKey() === null ? 0 : this.getKey().hashCode()) ^
        //     (this.getValue() === null ? 0 : this.getValue().hashCode());
    }

    setValue(value: V): V {
        let old: V = this.getValue();
        this._value = value;
        return old;
    }

}