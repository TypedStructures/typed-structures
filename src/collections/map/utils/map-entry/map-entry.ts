import {IMapEntry} from './map-entry-interface';

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
        let hash: number = 1;

        if ((<any>this.getKey()).hashCode && (<any>this.getValue()).hashCode)
            hash = hash * 17 + (this.getKey() === null ? 0 : (<any>this.getKey()).hashCode()) +
                (this.getValue() === null ? 0 : (<any>this.getValue()).hashCode());
        else if ((<any>this.getKey()).hashCode && !(<any>this.getValue()).hashCode)
            hash = hash * 17 + (this.getKey() === null ? 0 : (<any>this.getKey()).hashCode()) +
                (this.getValue() === null ? 0 : (<any>this.getValue()) as number);
        else if (!(<any>this.getKey()).hashCode && (<any>this.getValue()).hashCode)
            hash = hash * 17 + (this.getKey() === null ? 0 : (<any>this.getKey()) as number) +
                (this.getValue() === null ? 0 : (<any>this.getValue()).hashCode());
        else
            hash = hash * 17 + (this.getKey() === null ? 0 : (<any>this.getKey()) as number) +
                (this.getValue() === null ? 0 : (<any>this.getValue()) as number);

        return hash;
    }

    setValue(value: V): V {
        let old: V = this.getValue();
        this._value = value;
        return old;
    }

}