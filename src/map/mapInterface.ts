import { BiFunctionInterface } from '../util/function/biFunctionInterface';
import { FunctionInterface } from '../util/function/functionInterface';

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
     * TODO: Define and implement Set
     * TODO: Define and implement MapEntry
     *
     * Returns a Set view of the mappings contained in this map. The set is backed by the map, so changes to the map are reflected in the set, and vice-versa.
     * If the map is modified while an iteration over the set is in progress (except through the iterator's own remove operation, or through the setValue operation on a map entry returned by the iterator) the results of the iteration are undefined.
     * The set supports element removal, which removes the corresponding mapping from the map, via the Iterator.remove, Set.remove, removeAll, retainAll and clear operations.
     * It does not support the add or addAll operations.
     *
     * @return {Set<MapEntry<K, V>>} a set view of the mappings contained in this map
     * @since 0.0.1
     */
    entrySet(): Set<MapEntry<K, V>>;

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

}
