/**MappableSet is a class that extends ES6 Set and adds a map function.
 * @author Miracutor
 * @license MIT
*/
class MappableSet<T> extends Set<T> {
  /** map function similar to Array.map but for Set.
   * @param {Function} callback - callback function to be called for each element in the set.
   * @returns {Array} - new array with the results of the callback function.
  */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  map = (callback: (value: T) => any): Array<any> => {
    const result = [];
    for (const value of this[Symbol.iterator]()) {
      result.push(callback(value));
    }
    return result;
  };
    
}

export default MappableSet;
