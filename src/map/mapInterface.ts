import { BiFunctionInterface } from '../util/function/biFunctionInterface';
import { FunctionInterface } from '../util/function/functionInterface';
import { SetInterface } from './setInterface';
import { MapEntryInterface } from './mapEntryInterface';

/**
 * This interface an adaptation of the Map<K, V> of the Java Collections Framework.
 * https://docs.oracle.com/javase/8/docs/api/java/util/Map.html
 */
export interface MapInterface<K, V> {

    /**
     * Removes all of the mappings from this map (optional operation).
     * The map will be empty after this call returns.
     * @throws UnsupportedOperationException if the clear operation is not supported by this map
     * @since 0.0.1
     */
    clear(): void;

    /**
     * Attempts to compute a mapping for the specified key and its current mapped value (or null if there is no current mapping).
     * For example, to either create or append a String msg to a value mapping:
     *
     *  map.compute(key, (k, v) => (v == null) ? msg : v.concat(msg))
     *
     * (Method merge() is often simpler to use for such purposes.)
     *
     * If the function returns null, the mapping is removed (or remains absent if initially absent).
     * If the function itself throws an (unchecked) exception, the exception is rethrown, and the current mapping is left unchanged.
     *
     * Implementation Requirements:
     *  The default implementation is equivalent to performing the following steps for this map, then returning the current value or null if absent:
     *
     *  let oldValue: V = map.get(key);
     *  let newValue: V = remappingFunction.apply(key, oldValue);
     *  if (oldValue !== null ) {
     *      if (newValue != null) {
     *          map.put(key, newValue);
     *      } else {
     *          map.remove(key);
     *      }
     *  } else {
     *      if (newValue != null) {
     *          map.put(key, newValue);
     *      } else {
     *          return null;
     *      }
     *  }
     *
     * The default implementation makes no guarantees about synchronization or atomicity properties of this method.
     * Any implementation providing atomicity guarantees must override this method and document its concurrency properties.
     * In particular, all implementations of subinterface ConcurrentMap must document whether the function is applied once atomically only if the value is not present.
     * @param {K} key
     * @param {BiFunctionInterface<K, V, V>} remappingFunction
     * @since 0.0.1
     */
    compute(key: K, remappingFunction: BiFunctionInterface<K, V, V>): V;

    /**
     * If the specified key is not already associated with a value (or is mapped to null), attempts to compute its value using the given mapping function and enters it into this map unless null.
     * If the function returns null no mapping is recorded. If the function itself throws an (unchecked) exception, the exception is rethrown, and no mapping is recorded.
     * The most common usage is to construct a new object serving as an initial mapped value or memoized result, as in:
     *
     *  map.computeIfAbsent(key, k => f(k));
     *
     * Or to implement a multi-value map, Map<K,Collection<V>>, supporting multiple values per key:
     *
     *  map.computeIfAbsent(key, k => new HashSet<V>()).add(v);
     *
     * Implementation Requirements:
     *  The default implementation is equivalent to the following steps for this map, then returning the current value or null if now absent:
     *
     *  if (map.get(key) == null) {
     *      let newValue: V = mappingFunction.apply(key);
     *      if (newValue != null)
     *          map.put(key, newValue);
     *  }
     *
     * The default implementation makes no guarantees about synchronization or atomicity properties of this method.
     * Any implementation providing atomicity guarantees must override this method and document its concurrency properties.
     * In particular, all implementations of subinterface ConcurrentMap must document whether the function is applied once atomically only if the value is not present.
     * @param {K} key key with which the specified value is to be associated
     * @param {FunctionInterface<K, V>} mappingFunction the function to compute a value
     * @return {V} the current (existing or computed) value associated with the specified key, or null if the computed value is null
     * @throws UnsupportedOperationException - if the put operation is not supported by this map (optional)
     * @throws ClassCastException - if the class of the specified key or value prevents it from being stored in this map (optional)
     * @throws NullReferenceException - if the specified key is null and this map does not support null keys, or the mappingFunction is null
     * @since 0.0.1
     */
    computeIfAbsent(key: K, mappingFunction: FunctionInterface<K, V>): V;

    /**
     * If the value for the specified key is present and non-null, attempts to compute a new mapping given the key and its current mapped value.
     * If the function returns null, the mapping is removed. If the function itself throws an (unchecked) exception, the exception is rethrown, and the current mapping is left unchanged.
     *
     * Implementation Requirements:
     *  The default implementation is equivalent to performing the following steps for this map, then returning the current value or null if now absent:
     *
     *  if (map.get(key) != null) {
     *      let oldValue: V = map.get(key);
     *      let newValue: V = remappingFunction.apply(key, oldValue);
     *      if (newValue != null) {
     *          map.put(key, newValue);
     *      } else {
     *          map.remove(key);
     *      }
     *  }
     *
     * The default implementation makes no guarantees about synchronization or atomicity properties of this method.
     * Any implementation providing atomicity guarantees must override this method and document its concurrency properties.
     * In particular, all implementations of subinterface ConcurrentMap must document whether the function is applied once atomically only if the value is not present.
     * @param {K} key key with which the specified value is to be associated
     * @param {BiFunctionInterface<K, V, V>} v the function to compute a value
     * @return {V} the new value associated with the specified key, or null if none
     * @throws UnsupportedOperationException - if the put operation is not supported by this map (optional)
     * @throws ClassCastException - if the class of the specified key or value prevents it from being stored in this map (optional)
     * @throws NullReferenceException - if the specified key is null and this map does not support null keys, or the mappingFunction is null
     * @since 0.0.1
     */
    computeIfPresent(key: K, v: BiFunctionInterface<K, V, V>): V;

    /**
     * Returns true if this map contains a mapping for the specified key.
     * More formally, returns true if and only if this map contains a mapping for a key k such that (key === null ? k === null : key === k). (There can be at most one such mapping.)
     * @param key key whose presence in this map is to be tested
     * @return {boolean} true if this map contains a mapping for the specified key
     * @throws ClassCastException - if the class of the specified key or value prevents it from being stored in this map (optional)
     * @throws NullReferenceException - if the specified key is null and this map does not support null keys, or the mappingFunction is null
     * @since 0.0.1
     */
    containsKey(key: any): boolean;

    /**
     * Returns true if this map maps one or more keys to the specified value.
     * More formally, returns true if and only if this map contains at least one mapping to a value v such that (value === null ? v === null : value === v). This operation will probably require time linear in the map size for most implementations of the Map interface.
     * @param value value whose presence in this map is to be tested
     * @return {boolean} true if this map maps one or more keys to the specified value
     * @throws ClassCastException - if the class of the specified key or value prevents it from being stored in this map (optional)
     * @throws NullReferenceException - if the specified key is null and this map does not support null keys, or the mappingFunction is null
     * @since 0.0.1
     */
    containsValue(value: any): boolean;

    /**
     * Returns a Set view of the mappings contained in this map. The set is backed by the map, so changes to the map are reflected in the set, and vice-versa.
     * If the map is modified while an iteration over the set is in progress (except through the iterator's own remove operation, or through the setValue operation on a map entry returned by the iterator) the results of the iteration are undefined.
     * The set supports element removal, which removes the corresponding mapping from the map, via the Iterator.remove, Set.remove, removeAll, retainAll and clear operations.
     * It does not support the add or addAll operations.
     *
     * @return {Set<MapEntry<K, V>>} a set view of the mappings contained in this map
     * @since 0.0.1
     */
    entrySet(): SetInterface<MapEntryInterface<K, V>>;

    /**
     * Compares the specified object with this map for equality. Returns true if the given object is also a map and the two maps represent the same mappings.
     * More formally, two maps m1 and m2 represent the same mappings if m1.entrySet().equals(m2.entrySet()).
     * This ensures that the equals method works properly across different implementations of the Map interface.
     * @param {MapInterface<K, V>} m object to be compared for equality with this map
     * @return {boolean} true if the specified object is equal to this map
     * @since 0.0.1
     */
    equals(m: MapInterface<K, V>): boolean;

    /**
     * Executes a provided function once for each Map<K, V> element.
     * @param {FunctionInterface} callback FunctionInterface to execute for each element, taking four arguments: node {MapEntry<K, V>} The current element, value {V} The current Node value, index {number} The current index in the Map<K, V>, Map {Map<K, V>} The Map.
     * @since 0.0.1
     */
    forEach(callback: FunctionInterface<K, V>): void;

    /**
     * Returns the value to which the specified key is mapped, or null if this map contains no mapping for the key.
     * More formally, if this map contains a mapping from a key k to a value v such that (key === null ? k === null : key === k), then this method returns v; otherwise it returns null. (There can be at most one such mapping.)
     *
     * If this map permits null values, then a return value of null does not necessarily indicate that the map contains no mapping for the key; it's also possible that the map explicitly maps the key to null.
     * The containsKey operation may be used to distinguish these two cases.
     *
     * @param {K} key the key whose associated value is to be returned
     * @return {V} the value to which the specified key is mapped, or null if this map contains no mapping for the key
     * @throws NullReferenceException - if the specified key is null and this map does not support null keys, or the mappingFunction is null
     * @since 0.0.1
     */
    get(key: K): V;

    /**
     * Returns the value to which the specified key is mapped, or defaultValue if this map contains no mapping for the key.
     *
     * Implementation Requirements:
     *  The default implementation makes no guarantees about synchronization or atomicity properties of this method.
     *  Any implementation providing atomicity guarantees must override this method and document its concurrency properties.
     *
     * @param {K} key the key whose associated value is to be returned
     * @param {V} defaultValue the default mapping of the key
     * @return {V} the value to which the specified key is mapped, or defaultValue if this map contains no mapping for the key
     * @throws NullReferenceException - if the specified key is null and this map does not support null keys, or the mappingFunction is null
     * @since 0.0.1
     */
    getOrDefault(key: K, defaultValue: V): V;

    /**
     * Returns the hash code value for this map. The hash code of a map is defined to be the sum of the hash codes of each entry in the map's entrySet() view.
     * This ensures that m1.equals(m2) implies that m1.hashCode() === m2.hashCode() for any two maps m1 and m2.
     * @return {number} the hash code value for this map
     * @since 0.0.1
     */
    hashCode(): number;

    /**
     * Returns true if this map contains no key-value mappings.
     * @return {boolean} true if this map contains no key-value mappings
     * @since 0.0.1
     */
    isEmpty(): boolean;

    /**
     * Returns a Set view of the keys contained in this map. The set is backed by the map, so changes to the map are reflected in the set, and vice-versa.
     * @return {Set<K>} a set view of the keys contained in this map
     * @since 0.0.1
     */
    keySet(): SetInterface<K>;

    /**
     * If the specified key is not already associated with a value or is associated with null, associates it with the given non-null value.
     * Otherwise, replaces the associated value with the results of the given remapping function, or removes if the result is null.
     * This method may be of use when combining multiple mapped values for a key. For example, to either create or append a String msg to a value mapping:
     *
     *  map.merge(key, msg, (str1: string, str2: str) => str1 + str2)
     *
     * If the function returns null the mapping is removed. If the function itself throws an (unchecked) exception, the exception is rethrown, and the current mapping is left unchanged.
     *
     * Implementation Requirements:
     *  The default implementation is equivalent to performing the following steps for this map, then returning the current value or null if absent:
     *
     *  let oldValue: V = map.get(key);
     *  let newValue: V = (oldValue === null) ? value : remappingFunction.apply(oldValue, value);
     *  if (newValue == null) {
     *      map.remove(key);
     *  } else {
     *      map.put(key, newValue);
     *  }
     *
     * The default implementation makes no guarantees about synchronization or atomicity properties of this method. Any implementation providing atomicity guarantees must override this method and document its concurrency properties. In particular, all implementations of subinterface ConcurrentMap must document whether the function is applied once atomically only if the value is not present.
     * @param {K} key key with which the resulting value is to be associated
     * @param {V} value the non-null value to be merged with the existing value associated with the key or, if no existing value or a null value is associated with the key, to be associated with the key
     * @param {BiFunctionInterface<V, V, V>} remappingFunction the function to recompute a value if present
     * @return {V} the new value associated with the specified key, or null if no value is associated with the key
     * @throws UnsupportedOperationException - if the put operation is not supported by this map (optional)
     * @throws ClassCastException - if the class of the specified key or value prevents it from being stored in this map (optional)
     * @throws NullReferenceException - if the specified key is null and this map does not support null keys, or the mappingFunction is null
     * @since 0.0.1
     */
    merge(key: K, value: V, remappingFunction: BiFunctionInterface<V, V, V>): V;

    /**
     * Associates the specified value with the specified key in this map (optional operation).
     * If the map previously contained a mapping for the key, the old value is replaced by the specified value.
     * (A map m is said to contain a mapping for a key k if and only if m.containsKey(k) would return true.)
     * @param {K} key key with which the specified value is to be associated
     * @param {V} value value to be associated with the specified key
     * @return {V} the previous value associated with key, or null if there was no mapping for key. (A null return can also indicate that the map previously associated null with key, if the implementation supports null values.)
     * @throws UnsupportedOperationException - if the put operation is not supported by this map (optional)
     * @throws ClassCastException - if the class of the specified key or value prevents it from being stored in this map (optional)
     * @throws NullReferenceException - if the specified key is null and this map does not support null keys, or the mappingFunction is null
     * @throws IllegalArgumentException - if some property of the specified key or value prevents it from being stored in this map
     * @since 0.0.1
     */
    put(key: K, value: V): V;

    /**
     * Copies all of the mappings from the specified map to this map (optional operation).
     * The effect of this call is equivalent to that of calling put(k, v) on this map once for each mapping from key k to value v in the specified map.
     * The behavior of this operation is undefined if the specified map is modified while the operation is in progress.
     * @param {Map<K, V>} m mappings to be stored in this map
     * @throws UnsupportedOperationException - if the put operation is not supported by this map (optional)
     * @throws ClassCastException - if the class of the specified key or value prevents it from being stored in this map (optional)
     * @throws NullReferenceException - if the specified key is null and this map does not support null keys, or the mappingFunction is null
     * @throws IllegalArgumentException - if some property of the specified key or value prevents it from being stored in this map
     * @since 0.0.1
     */
    putAll(m: MapInterface<K, V>): void;

    /**
     * If the specified key is not already associated with a value (or is mapped to null) associates it with the given value and returns null, else returns the current value.
     * Implementation Requirements:
     *  The default implementation is equivalent to, for this map:
     *
     *  let v: V = map.get(key);
     *  if (v === null)
     *      v = map.put(key, value);
     *
     *  return v;
     *
     * The default implementation makes no guarantees about synchronization or atomicity properties of this method.
     * Any implementation providing atomicity guarantees must override this method and document its concurrency properties.
     * @param {K} key key with which the specified value is to be associated
     * @param {V} value value to be associated with the specified key
     * @return {V} the previous value associated with the specified key, or null if there was no mapping for the key. (A null return can also indicate that the map previously associated null with the key, if the implementation supports null values.)
     * @throws UnsupportedOperationException - if the put operation is not supported by this map (optional)
     * @throws ClassCastException - if the class of the specified key or value prevents it from being stored in this map (optional)
     * @throws NullReferenceException - if the specified key is null and this map does not support null keys, or the mappingFunction is null
     * @throws IllegalArgumentException - if some property of the specified key or value prevents it from being stored in this map
     * @since 0.0.1
     */
    putIfAbsent(key: K, value: V): V;

    /**
     * Removes the mapping for a key from this map if it is present (optional operation). More formally, if this map contains a mapping from key k to value v such that (key === null ? k === null : key === k)), that mapping is removed. (The map can contain at most one such mapping.)
     * Returns the value to which this map previously associated the key, or null if the map contained no mapping for the key.
     *
     * If this map permits null values, then a return value of null does not necessarily indicate that the map contained no mapping for the key; it's also possible that the map explicitly mapped the key to null.
     *
     * The map will not contain a mapping for the specified key once the call returns.
     * @param {K} key key whose mapping is to be removed from the map
     * @return {V} the previous value associated with key, or null if there was no mapping for key.
     * @throws UnsupportedOperationException - if the put operation is not supported by this map (optional)
     * @throws ClassCastException - if the class of the specified key or value prevents it from being stored in this map (optional)
     * @throws NullReferenceException - if the specified key is null and this map does not support null keys, or the mappingFunction is null
     * @since 0.0.1
     */
    remove(key: K): V;

    /**
     * Removes the entry for the specified key only if it is currently mapped to the specified value.
     * Implementation Requirements:
     *  The default implementation is equivalent to, for this map:
     *
     *  if (map.containsKey(key) && map.get(key) === value) {
     *      map.remove(key);
     *      return true;
     *  } else {
     *      return false;
     *  }
     *
     * The default implementation makes no guarantees about synchronization or atomicity properties of this method.
     * Any implementation providing atomicity guarantees must override this method and document its concurrency properties.
     * @param key key with which the specified value is associated
     * @param value value expected to be associated with the specified key
     * @return true if the value was removed
     * @throws UnsupportedOperationException - if the put operation is not supported by this map (optional)
     * @throws ClassCastException - if the class of the specified key or value prevents it from being stored in this map (optional)
     * @throws NullReferenceException - if the specified key is null and this map does not support null keys, or the mappingFunction is null
     * @since 0.0.1
     */
    remove(key: K, value: V): boolean;

    /**
     * Replaces the entry for the specified key only if it is currently mapped to some value.
     * Implementation Requirements:
     *  The default implementation is equivalent to, for this map:
     *
     *  if (map.containsKey(key)) {
     *      return map.put(key, value);
     *  } else {
     *      return null;
     *  }
     *
     * The default implementation makes no guarantees about synchronization or atomicity properties of this method.
     * Any implementation providing atomicity guarantees must override this method and document its concurrency properties.
     * @param {K} key key with which the specified value is associated
     * @param {V} value value to be associated with the specified key
     * @return {V} the previous value associated with the specified key, or null if there was no mapping for the key. (A null return can also indicate that the map previously associated null with the key, if the implementation supports null values.)
     * @throws UnsupportedOperationException - if the put operation is not supported by this map (optional)
     * @throws ClassCastException - if the class of the specified key or value prevents it from being stored in this map (optional)
     * @throws NullReferenceException - if the specified key is null and this map does not support null keys, or the mappingFunction is null
     * @throws IllegalArgumentException - if some property of the specified key or value prevents it from being stored in this map
     * @since 0.0.1
     */
    replace(key: K, value: V): V;

    /**
     * Replaces the entry for the specified key only if currently mapped to the specified value.
     * Implementation Requirements:
     *  The default implementation is equivalent to, for this map:
     *
     *  if (map.containsKey(key) && map.get(key) === value) {
     *      map.put(key, newValue);
     *      return true;
     *  } else {
     *      return false;
     *  }
     *
     * The default implementation does not throw NullPointerException for maps that do not support null values if oldValue is null unless newValue is also null.
     * The default implementation makes no guarantees about synchronization or atomicity properties of this method.
     * Any implementation providing atomicity guarantees must override this method and document its concurrency properties.
     * @param {K} key key with which the specified value is associated
     * @param {V} oldValue value expected to be associated with the specified key
     * @param {V} newValue value to be associated with the specified key
     * @return {boolean} true if the value was replaced
     * @throws UnsupportedOperationException - if the put operation is not supported by this map (optional)
     * @throws ClassCastException - if the class of a specified key or value prevents it from being stored in this map
     * @throws NullReferenceException - if a specified key or newValue is null, and this map does not permit null keys or values
     * @throws NullReferenceException - if oldValue is null and this map does not permit null values (optional)
     * @throws IllegalArgumentException - if some property of a specified key or value prevents it from being stored in this map
     * @since 0.0.1
     */
    replace(key: K, oldValue: V, newValue: V): boolean;

    /**
     * Replaces each entry's value with the result of invoking the given function on that entry until all entries have been processed or the function throws an exception.
     * Exceptions thrown by the function are relayed to the caller.
     * Implementation Requirements:
     *  The default implementation is equivalent to, for this map:
     *
     *  for (let entry: Map.Entry<K, V> of map.entrySet()) {
     *      entry.setValue(function.apply(entry.getKey(), entry.getValue()));
     *  }
     *
     * The default implementation makes no guarantees about synchronization or atomicity properties of this method. Any implementation providing atomicity guarantees must override this method and document its concurrency properties.
     * @param {BiFunctionInterface<K, V, V>} f the function to apply to each entry
     * @throws UnsupportedOperationException - if the set operation is not supported by this map's entry set iterator.
     * @throws ClassCastException - if the class of a replacement value prevents it from being stored in this map
     * @throws NullReferenceException - if the specified function is null, or the specified replacement value is null, and this map does not permit null values
     * @throws ClassCastException - if a replacement value is of an inappropriate type for this map (optional)
     * @throws NullReferenceException - if function or a replacement value is null, and this map does not permit null keys or values (optional)
     * @throws IllegalArgumentException - if some property of a replacement value prevents it from being stored in this map (optional)
     * @since 0.0.1
     */
    replaceAll(f: BiFunctionInterface<K, V, V>): void;

    /**
     * Returns the number of key-value mappings in this map.
     * @return {number} the number of key-value mappings in this map
     * @since 0.0.1
     */
    size(): number;

    /**
     * Returns an array view of the values contained in this map.
     * @return {V[]} a array view of the values contained in this map
     * @since 0.0.1
     */
    values(): V[];
}
