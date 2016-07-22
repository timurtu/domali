/**
 * Created by timur on 5/22/16.
 */

/**
 * Return one or many elements by getting them by id.
 *
 * @param ids Any number of id strings
 * @returns elements as an array
 */
export const getId = (...ids) => (ids.length > 1) ?
  ids.map(id => document.getElementById(id)) :
  document.getElementById(ids[0])

/**
 * Return one or many elements created with their tagname
 *
 * @param elements Any number of element tag strings
 * @returns elements as an array
 */
export const create = (...elements) => {
  const domNodes = elements.map(el => document.createElement(el))
  return (domNodes.length > 1) ? domNodes : domNodes[0]
}

export const getClass = className => document.getElementsByClassName(className)
export const getTags = tagName => document.getElementsByTagName(tagName)
export const select = query => document.querySelector(query)
export const selectAll = query => document.querySelectorAll(query)
