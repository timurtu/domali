/**
 * Created by timur on 4/27/16.
 */
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
      return ids.map(id => document.getElementById(id))
    } else {
      return document.getElementById(ids[0])
    }
  },

  getClass(className) {
    return document.getElementsByClassName(className)
  },

  getTags(tagName) {
    return document.getElementsByTagName(tagName)
  },

  select(query) {
    return document.querySelector(query)
  },

  selectAll(query) {
    return document.querySelectorAll(query)
  }

}