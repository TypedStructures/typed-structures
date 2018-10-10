import {MapInterface} from './mapInterface';
import {BiFunctionInterface} from '../util/function/biFunctionInterface';
import {FunctionInterface} from '../util/function/functionInterface';
import {SetInterface} from './setInterface';
import {MapEntryInterface} from './mapEntryInterface';
import {UnsupportedOperationException} from '../util/exception/unsupportedOperationException';
import {NullReferenceException} from '../util/exception/nullReferenceException';

export class Map<K, V> implements MapInterface<K, V> {

    private _entries: MapEntryInterface<K, V>[];

    clear(): void {
        try {
            this._entries.length = 0;
        } catch (e) {
            throw new UnsupportedOperationException(e.message);
        }
    }

    compute(key: K, remappingFunction: BiFunctionInterface<K, V, V>): V {

        let oldValue: V = this.get(key);
        let newValue: V = remappingFunction.apply(key, oldValue);
        if (oldValue !== null) {
            if (newValue != null) {
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

    computeIfAbsent(key: K, mappingFunction: FunctionInterface<K, V>): V {

        if (key === null || key === undefined)
            throw new NullReferenceException('The key cannot be null nor undefined');

        if (this.get(key) === null) {
            let newValue: V = mappingFunction.apply(key);
            if (newValue !== null)
                try {
                    return this.put(key, newValue);
                } catch (e) {
                    throw new UnsupportedOperationException(e.message);
                }
        }
    }

    computeIfPresent(key: K, v: BiFunctionInterface<K, V, V>): V {

        if (key === null || key === undefined)
            throw new NullReferenceException('The key cannot be null nor undefined');

        if (this.get(key) !== null) {
            let oldValue: V = this.get(key);
            let newValue: V = v.apply(key, oldValue);
            if (newValue != null) {
                try {
                    return this.put(key, newValue);
                } catch (e) {
                    throw new UnsupportedOperationException(e.message);
                }
            } else {
                return this.remove(key);
            }
        }
    }

    containsKey(key: any): boolean {

        if (key === null || key === undefined)
            throw new NullReferenceException('The key cannot be null nor undefined');

        return this._entries.find((entry: MapEntryInterface<K, V>) => {
            return entry.getKey() === key;
        }) !== undefined;
    }

    containsValue(value: any): boolean {

        if (value === null || value === undefined)
            throw new NullReferenceException('The value cannot be null nor undefined');

        return this._entries.find((entry: MapEntryInterface<K, V>) => {
            return entry.getValue() === value;
        }) !== undefined;
    }

    entrySet(): SetInterface<MapEntryInterface<K, V>> {
        return undefined;
    }

    equals(m: MapInterface<K, V>): boolean {
        return false;
    }

    forEach(callback: FunctionInterface<K, V>): void {
    }

    get(key: K): V {
        return undefined;
    }

    getOrDefault(key: K, defaultValue: V): V {
        return undefined;
    }

    hashCode(): number {
        return 0;
    }

    isEmpty(): boolean {
        return false;
    }

    keySet(): SetInterface<K> {
        return undefined;
    }

    merge(key: K, value: V, remappingFunction: BiFunctionInterface<V, V, V>): V {
        return undefined;
    }

    put(key: K, value: V): V {
        return undefined;
    }

    putAll(m: MapInterface<K, V>): void {
    }

    putIfAbsent(key: K, value: V): V {
        return undefined;
    }

    remove(key: K): V;
    remove(key: K, value: V): boolean;
    remove(key: K, value?: V): any {
    }

    replace(key: K, value: V): V;
    replace(key: K, oldValue: V, newValue: V): boolean;
    replace(key: K, value: V, newValue?: V): any {
    }

    replaceAll(f: BiFunctionInterface<K, V, V>): void {
    }

    size(): number {
        return 0;
    }

    values(): V[] {
        return undefined;
    }
}