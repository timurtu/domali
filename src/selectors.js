/**
 * Created by timur on 5/22/16.
 */

/**
 * Return one or many elements by getting them by id.
 *
 * @param ids Any number of id strings
 * @returns elements as an array
 */
export function getId(...ids) {
  return (ids.length > 1) ?
    ids.map(id => document.getElementById(id)) :
    document.getElementById(ids[0])
}

/**
 * Return one or many elements created with their tagname
 *
 * @param elements Any number of element tag strings
 * @returns elements as an array
 */
export function create(...elements) {
  return (elements.length > 1) ?
    elements.map(element => document.createElement(element)) :
    document.createElement(elements[0])
}

export function getClass(className) {
  return document.getElementsByClassName(className)
}

export function getTags(tagName) {
  return document.getElementsByTagName(tagName)
}

export function select(query) {
  return document.querySelector(query)
}

export function selectAll(query) {
  return document.querySelectorAll(query)
}
