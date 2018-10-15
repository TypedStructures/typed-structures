export interface MapEntryInterface<K, V> {

    /**
     * Returns the key corresponding to this entry.
     * @return {K} the key corresponding to this entry
     * @since 0.0.1
     */
    getKey(): K;

    /**
     * Returns the value corresponding to this entry.
     * If the mapping has been removed from the backing map (by the iterator's remove operation), the results of this call are undefined.
     * @return {V} the value corresponding to this entry
     * @since 0.0.1
     */
    getValue(): V;

    /**
     * Replaces the value corresponding to this entry with the specified value (optional operation).
     * @param {V} value new value to be stored in this entry
     * @return {V} old value corresponding to the entry
     * @throws UnsupportedOperationException - if the put operation is not supported by the backing map
     * @throws ClassCastException - if the class of the specified value prevents it from being stored in the backing map
     * @throws NullReferenceException - if the backing map does not permit null values, and the specified value is null
     * @throws IllegalArgumentException - if some property of this value prevents it from being stored in the backing map
     * @since 0.0.1
     */
    setValue(value: V): V;

    /**
     * Compares the specified object with this entry for equality. Returns true if the given object is also d map entry and the two entries represent the same mapping.
     * More formally, two entries e1 and e2 represent the same mapping if
     * (e1.getKey() === null ? e2.getKey() === null : e1.getKey() === e2.getKey())  &&
     * (e1.getValue() === null ? e2.getValue() === null : e1.getValue() === e2.getValue())
     *
     * This ensures that the equals method works properly across different implementations of the Map.Entry interface.
     * @param o object to be compared for equality with this map entry
     * @return {boolean} true if the specified object is equal to this map entry
     */
    equals(o: any): boolean;

    /**
     * Returns the hash code value for this map entry. The hash code of d map entry e is defined to be:
     * (e.getKey() === null ? 0 : e.getKey().hashCode()) ^
     * (e.getValue() === null ? 0 : e.getValue().hashCode())
     *
     * This ensures that e1 === e2 implies that e1.hashCode() === e2.hashCode() for any two Entries e1 and e2
     * @return {number} the hash code value for this map entry
     */
    hashCode(): number;
}