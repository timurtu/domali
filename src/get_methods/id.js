let _document = document;

export default {

  /**
   * Return one or many elements by getting them by id.
   *
   * @param ids Any number of id strings
   * @returns elements as an array
   */
  getId(...ids) {
      if (ids.length > 1) {
        return ids.map(id => _document.getElementById(id))
      } else {
        return _document.getElementById(ids[0])
      }
    },

    /**
     * Return one or many elements created with their tagname
     *
     * @param element Any number of element tag strings
     * @returns elements as an array
     */
    create(...elements) {
      if (elements.length > 1) {
        return elements.map(element => _document.createElement(element))
      } else {
        return _document.createElement(elements[0])
      }
    },

    getClass(className) {
      return _document.getElementsByClassName(className)
    },

    getClass(className) {
      return _document.getElementsByClassName(className)
    },

    getTags(tagName) {
      return _document.getElementsByTagName(tagName)
    },

    selectAll(query) {
      return _document.querySelectorAll(query)
    },

    bindElement(element) {
      _document = element;
    }

}
