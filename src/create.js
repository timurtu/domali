/**
 * Created by timur on 7/24/16.
 */

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
