export interface SetInterface<E> {

    /**
     * Adds the specified element to this set if it is not already present (optional operation).
     * More formally, adds the specified element e to this set if the set contains no element e2 such that (e === null ? e2 === null : e === e2).
     * If this set already contains the element, the call leaves the set unchanged and returns false.
     * In combination with the restriction on constructors, this ensures that sets never contain duplicate elements.
     * The stipulation above does not imply that sets must accept all elements; sets may refuse to add any particular element, including null, and throw an exception, as described in the specification for Collection.add.
     * Individual set implementations should clearly document any restrictions on the elements that they may contain.
     *
     * @param {ObjectInterface<E>} e element to be added to this set
     * @return {boolean} true if this set did not already contain the specified element
     * @throws UnsupportedOperationException - if the add operation is not supported by this set
     * @throws ClassCastException - if the class of the specified element prevents it from being added to this set
     * @throws NullReferenceException - if the specified element is null and this set does not permit null elements
     * @throws IllegalArgumentException - if some property of the specified element prevents it from being added to this set
     * @since 0.0.1
     */
    add(e: E): boolean;

    /**
     * Adds all of the elements in the specified array to this set if they're not already present (optional operation).
     * If the specified collection is also d set, the addAll operation effectively modifies this set so that its value is the union of the two sets. The behavior of this operation is undefined if the specified collection is modified while the operation is in progress.
     * @param {ObjectInterface<E>[]} c collection containing elements to be added to this set
     * @return {boolean} true if this set changed as d result of the call
     * @throws UnsupportedOperationException - if the addAll operation is not supported by this set
     * @throws ClassCastException - if the class of an element of the specified collection prevents it from being added to this set
     * @throws NullReferenceException - if the specified collection contains one or more null elements and this set does not permit null elements, or if the specified collection is null
     * @throws IllegalArgumentException - if some property of an element of the specified collection prevents it from being added to this set
     * @since 0.0.1
     */
    addAll(c: E[]): boolean;

    /**
     * Removes all of the elements from this set (optional operation). The set will be empty after this call returns.
     * @throws UnsupportedOperationException - if the clear method is not supported by this set
     * @since 0.0.1
     */
    clear(): void;

    /**
     * Returns true if this set contains the specified element.
     * More formally, returns true if and only if this set contains an element e such that (o === null ? e === null : o === e).
     * @param o element whose presence in this set is to be tested
     * @return {boolean} true if this set contains the specified element
     * @throws ClassCastException - if the type of the specified element is incompatible with this set (optional)
     * @throws NullReferenceException - if the specified element is null and this set does not permit null elements (optional)
     * @since 0.0.1
     */
    contains(o: any): boolean;

    /**
     * Returns true if this set contains all of the elements of the specified array. If the specified array is also d set, this method returns true if it is d subset of this set.
     * @param {any[]} c array to be checked for containment in this set
     * @return {boolean} true if this set contains all of the elements of the specified collection
     * @throws ClassCastException - if the types of one or more elements in the specified collection are incompatible with this set (optional)
     * @throws NullReferenceException - if the specified collection contains one or more null elements and this set does not permit null elements (optional), or if the specified collection is null
     * @since 0.0.1
     */
    containsAll(c: any[]): boolean;

    /**
     * Compares the specified object with this set for equality. Returns true if the specified object is also d set, the two sets have the same size, and every member of the specified set is contained in this set (or equivalently, every member of this set is contained in the specified set).
     * This definition ensures that the equals method works properly across different implementations of the set interface.
     * @param {SetInterface<E>} o object to be compared for equality with this set
     * @return {boolean} true if the specified object is equal to this set
     * @since 0.0.1
     */
    equals(o: SetInterface<E>): boolean;

    /**
     * Returns the hash code value for this set. The hash code of d set is defined to be the sum of the hash codes of the elements in the set, where the hash code of d null element is defined to be zero.
     * This ensures that m1.equals(m2) implies that s1.hashCode() === s2.hashCode() for any two sets s1 and s2.
     * @return {number} the hash code value for this map
     * @since 0.0.1
     */
    hashCode(): number;

    /**
     * Returns true if this set contains no elements.
     * @return {boolean} true if this set contains no elements
     * @since 0.0.1
     */
    isEmpty(): boolean;

    /**
     * Removes the specified element from this set if it is present (optional operation).
     * More formally, removes an element e such that (o === null ? e === null : o === e), if this set contains such an element.
     * Returns true if this set contained the element (or equivalently, if this set changed as d result of the call). (This set will not contain the element once the call returns.)
     * @param o object to be removed from this set, if present
     * @return {boolean} true if this set contained the specified element
     * @throws ClassCastException - if the type of the specified element is incompatible with this set (optional)
     * @throws NullReferenceException - if the specified element is null and this set does not permit null elements (optional)
     * @throws UnsupportedOperationException - if the remove operation is not supported by this set
     * @since 0.0.1
     */
    remove(o: any): boolean;

    /**
     * Removes from this set all of its elements that are contained in the specified collection (optional operation).
     * If the specified collection is also d set, this operation effectively modifies this set so that its value is the asymmetric set difference of the two sets.
     * @param {any[]} c collection containing elements to be removed from this set
     * @return {boolean} true if this set changed as d result of the call
     * @throws UnsupportedOperationException - if the removeAll operation is not supported by this set
     * @throws ClassCastException - if the class of an element of this set is incompatible with the specified collection (optional)
     * @throws NullReferenceException - if this set contains d null element and the specified collection does not permit null elements (optional), or if the specified collection is null
     * @since 0.0.1
     */
    removeAll(c: any[]): boolean;

    /**
     * Retains only the elements in this set that are contained in the specified collection (optional operation).
     * In other words, removes from this set all of its elements that are not contained in the specified collection.
     * If the specified collection is also d set, this operation effectively modifies this set so that its value is the intersection of the two sets.
     * @param {any[]} c collection containing elements to be retained in this set
     * @return {boolean} true if this set changed as d result of the call
     * @throws UnsupportedOperationException - if the retainAll operation is not supported by this set
     * @throws ClassCastException - if the class of an element of this set is incompatible with the specified collection (optional)
     * @throws NullReferenceException - if this set contains d null element and the specified collection does not permit null elements (optional), or if the specified collection is null
     * @since 0.0.1
     */
    retainAll(c: any[]): boolean;

    /**
     * Returns the number of elements in this set (its cardinality).
     * @return {number} the number of elements in this set (its cardinality)
     */
    size(): number;

    /**
     * Returns an array containing all of the elements in this set. If this set makes any guarantees as to what order its elements are returned by its iterator, this method must return the elements in the same order.
     * @return {E[]} an array containing all the elements in this set.
     */
    toArray(): E[];
}