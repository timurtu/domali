/**
 * Created by timur on 4/27/16.
 */
 
let _document = document;

export default {

  /**
   * Return one or many elements by getting them by id.
   *
   * @param ids Any number of id strings
   * @returns {*} elements as separate variables to be used
   * with destructuring.
   */
  getId(...ids) {
    if (ids.length > 1) {
      return ids.map(id => _document.getElementById(id))
    } else {
      return _document.getElementById(ids[0])
    }
  },

  getClass(className) {
    return _document.getElementsByClassName(className)
  },

  getTags(tagName) {
    return _document.getElementsByTagName(tagName)
  },

  select(query) {
    return _document.querySelector(query)
  },

  selectAll(query) {
    return _document.querySelectorAll(query)
  },
  
  bindElement(element) {
    _document = element;
  },

}
