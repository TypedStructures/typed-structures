import {IMap} from './map-interface';
import {IBiFunction} from '../../functions/bi-function/bi-function-interface';
import {IFunction} from '../../functions/function/function-interface';
import {ISetInterface} from '../set/set-interface';
import {IMapEntry} from './utils/map-entry/map-entry-interface';
import {UnsupportedOperationException} from '../../exceptions/unsupported-operation-exception';
import {NullReferenceException} from '../../exceptions/null-reference-exception';
import {Set} from '../set/set';
import {MapEntry} from './utils/map-entry/map-entry';

export class Map<K, V> implements IMap<K, V> {

    private _entries: IMapEntry<K, V>[];

    constructor() {
        this._entries = [];
    }

    clear(): void {
        this._entries.length = 0;
    }

    compute(key: K, remappingFunction: IBiFunction<K, V, V>): V {

        let oldValue: V = this.get(key);
        let newValue: V = remappingFunction.apply(key, oldValue);
        if (oldValue !== null) {
            if (newValue !== null) {
                return this.put(key, newValue);
            } else {
                return this.remove(key);
            }
        } else {
            if (newValue !== null) {
                return this.put(key, newValue);
            } else {
                return null;
            }
        }
    }

    computeIfAbsent(key: K, mappingFunction: IFunction<K, V>): V {

        if (key === null || key === undefined)
            throw new NullReferenceException('The key cannot be null nor undefined');

        if (this.get(key) === null) {
            let newValue: V = mappingFunction.apply(key);
            if (newValue !== null)
                return this.put(key, newValue);
        }
    }

    computeIfPresent(key: K, v: IBiFunction<K, V, V>): V {

        if (key === null || key === undefined)
            throw new NullReferenceException('The key cannot be null nor undefined');

        if (this.get(key) !== null) {
            let oldValue: V = this.get(key);
            let newValue: V = v.apply(key, oldValue);
            if (newValue !== null)
                return this.put(key, newValue);
            else
                return this.remove(key);
        }
    }

    containsKey(key: any): boolean {

        if (key === null || key === undefined)
            throw new NullReferenceException('The key cannot be null nor undefined');

        return this._entries.find((entry: IMapEntry<K, V>) => {
            return entry.getKey() === key;
        }) !== undefined;
    }

    containsValue(value: any): boolean {

        if (value === null || value === undefined)
            throw new NullReferenceException('The value cannot be null nor undefined');

        return this._entries.find((entry: IMapEntry<K, V>) => {
            return entry.getValue() === value;
        }) !== undefined;
    }

    entrySet(): ISetInterface<IMapEntry<K, V>> {
        let set: ISetInterface<IMapEntry<K, V>> = new Set<MapEntry<K, V>>();
        set.addAll(this._entries);
        return set;
    }

    equals(m: IMap<K, V>): boolean {
        return this.entrySet().equals(m.entrySet());
    }

    forEach(callback: IFunction<IMapEntry<K, V>, IMapEntry<K, V>>): void {
        this._entries = this._entries.map(mapEntry => callback.apply(mapEntry));
    }

    get(key: K): V {
        if (key === null || key === undefined)
            throw new NullReferenceException('The key cannot be null nor undefined');

        try {
            return this._entries
                .find((mapEntry: IMapEntry<K, V>) => mapEntry.getKey() === key)
                .getValue();
        } catch (e) {
            return null;
        }
    }

    getOrDefault(key: K, defaultValue: V): V {
        let get = this.get(key);
        if (get) {
            return get;
        } else {
            return defaultValue;
        }
    }

    hashCode(): number {
        return this.entrySet().toArray().reduce((accumulator: number, mapEntry: IMapEntry<K, V>) => {
            return accumulator + mapEntry.hashCode();
        }, 0);
    }

    isEmpty(): boolean {
        return this._entries.length === 0;
    }

    keySet(): ISetInterface<K> {
        return this._entries.reduce((set: ISetInterface<K>, mapEntry: IMapEntry<K, V>) => {
            set.add(mapEntry.getKey());
            return set;
        }, new Set<K>());
    }

    merge(key: K, value: V, remappingFunction: IBiFunction<V, V, V>): V {

        if (key === null || key === undefined)
            throw new NullReferenceException('The key cannot be null nor undefined');

        let oldValue: V = this.get(key);
        let newValue: V = (oldValue === null) ? value : remappingFunction.apply(oldValue, value);
        if (newValue === null) {
            this.remove(key);
        } else {
            this.put(key, newValue);
            return newValue;
        }
    }

    put(key: K, value: V): V {
        let previousValue: V = null;

        if (key === null || key === undefined)
            throw new NullReferenceException('The key cannot be null nor undefined');

        if (this.containsKey(key))
            this._entries = this._entries
                .map((mapEntry: IMapEntry<K, V>) => {
                    if (mapEntry.getKey() === key)
                        previousValue = mapEntry.setValue(value);
                    return mapEntry;
                });
        else
            this._entries.push(new MapEntry<K, V>(key, value));

        return previousValue;
    }

    putAll(m: IMap<K, V>): void {
        m.entrySet()
            .toArray()
            .forEach((mapEntry: IMapEntry<K, V>) => this.put(mapEntry.getKey(), mapEntry.getValue()));
    }

    putIfAbsent(key: K, value: V): V {

        if (key === null || key === undefined)
            throw new NullReferenceException('The key cannot be null nor undefined');

        let v: V = this.get(key);

        if (v === null)
            v = this.put(key, value);

        return v;
    }

    remove(key: K): V;
    remove(key: K, value: V): boolean;
    remove(key: K, value?: V): any {
        if (value)
            if (this.containsKey(key) && this.get(key) === value) {
                this.remove(key);
                return true;
            } else {
                return false;
            }
        else {

            if (key === null || key === undefined)
                throw new NullReferenceException('The key cannot be null nor undefined');

            let length: number = this._entries.length;
            this._entries = this._entries
                .filter((mapEntry: IMapEntry<K, V>) => mapEntry.getKey() !== key);
            return this._entries.length !== length;
        }
    }

    replace(key: K, value: V): V;
    replace(key: K, oldValue: V, newValue: V): boolean;
    replace(key: K, value: V, newValue?: V): any {
        if (newValue)
            if (this.containsKey(key) && this.get(key) === value) {
                this.put(key, newValue);
                return true;
            } else {
                return false;
            }
        else {
            if (key === null || key === undefined)
                throw new NullReferenceException('The key cannot be null nor undefined');

            if (this.containsKey(key)) {
                return this.put(key, value);
            } else {
                return null;
            }
        }
    }

    replaceAll(f: IBiFunction<K, V, V>): void {

        if (f === null || f === undefined)
            throw new NullReferenceException('The function cannot be null nor undefined');

        this.entrySet().toArray().forEach((mapEntry: IMapEntry<K, V>) => {
            mapEntry.setValue(f.apply(mapEntry.getKey(), mapEntry.getValue()));
        });
    }

    size(): number {
        return this._entries.length;
    }

    values(): V[] {
        return this._entries
            .map((mapEntry: IMapEntry<K, V>) => mapEntry.getValue());
    }
}